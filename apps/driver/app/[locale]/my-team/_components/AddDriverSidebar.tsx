'use client';

import React, { useState } from 'react';
import { X, Mail, AlertTriangle } from 'lucide-react';
import styles from './AddDriverSidebar.module.css';

const SafeX = X as unknown as React.FC<any>;
const SafeMail = Mail as unknown as React.FC<any>;
const SafeAlertTriangle = AlertTriangle as unknown as React.FC<any>;

interface AddDriverSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSendInvitation?: (email: string, message: string) => void;
}

export default function AddDriverSidebar({
  isOpen,
  onClose,
  onSendInvitation,
}: AddDriverSidebarProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    'Welcome to the XCARBOX elite team. We look forward to your performance analysis.'
  );

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (onSendInvitation) {
      onSendInvitation(email, message);
    }
    onClose();
  };

  return (
    <div className={styles.sidebarOverlay} onClick={onClose}>
      <div className={styles.sidebarContainer} onClick={(e) => e.stopPropagation()}>
        {/* رأس القائمة */}
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Add New Driver:</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <SafeX size={20} />
          </button>
        </div>

        {/* صندوق التوضيح */}
        <div className={styles.infoBox}>
          The invited driver will receive an email with a link to join the account. They must already have or create a XCARBOX driver account to accept. They will appear in the Pending Invitations table until they accept.
        </div>

        {/* حقل البريد الإلكتروني */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Driver Email:</label>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="e.g., name@email.com"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SafeMail className={styles.inputIcon} size={18} />
          </div>
        </div>

        {/* حقل الرسالة الاختيارية */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Optional Message:</label>
          <textarea
            className={styles.textareaField}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* تنبيه الصلاحية */}
        <div className={styles.warningBox}>
          <SafeAlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            Invitations expire after 7 days. You can resend invitations from the Pending table if they remain unaccepted.
          </span>
        </div>

        {/* أزرار الإجراءات */}
        <div className={styles.actionsContainer}>
          <button className={styles.sendBtn} onClick={handleSubmit}>
            SEND INVITATION
          </button>
          <button className={styles.cancelBtn} onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}