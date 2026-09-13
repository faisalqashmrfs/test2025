// settings/_components/tabs/NotificationsTab.tsx
'use client';

import React, { useState } from 'react';
import styles from '../../SettingsCenter.module.css';

interface NotificationSettingItem {
  id: string;
  title: string;
  description: string;
  email: boolean;
  push: boolean;
}

export const NotificationsTab: React.FC = () => {
  // General Settings State
  const [allNotifications, setAllNotifications] = useState(true);
  const [notificationFrequency, setNotificationFrequency] = useState<'instant' | 'digest'>('digest');

  // 1. Order Notifications State
  const [orderNotifications, setOrderNotifications] = useState<NotificationSettingItem[]>([
    { id: '1', title: 'New Order Created', description: 'When a new transport order is placed', email: true, push: true },
    { id: '2', title: 'Order Confirmed', description: 'When the order is accepted by a driver', email: true, push: true },
    { id: '3', title: 'Order Modified', description: 'When order details are changed', email: true, push: true },
    { id: '4', title: 'Order Cancelled', description: 'When an order is cancelled by any party', email: true, push: true },
  ]);

  // 2. Trip & Driver Notifications State
  const [tripNotifications, setTripNotifications] = useState<NotificationSettingItem[]>([
    { id: '1', title: 'Driver Assigned', description: 'When a driver is matched to an order', email: true, push: true },
    { id: '2', title: 'Vehicle Picked Up', description: 'When driver confirms vehicle collection', email: true, push: true },
    { id: '3', title: 'Vehicle In Transit', description: 'When the trip is actively in progress', email: true, push: true },
    { id: '4', title: 'Vehicle Delivered', description: 'When driver confirms delivery at destination', email: true, push: true },
    { id: '5', title: 'Driver Delayed', description: 'When driver reports or system detects a delay', email: true, push: true },
    { id: '6', title: 'Driver Unassigned', description: 'When a driver is removed from an order', email: true, push: true },
  ]);

  // 3. Team & Account Notifications State
  const [teamNotifications, setTeamNotifications] = useState<NotificationSettingItem[]>([
    { id: '1', title: 'New Team Member Added', description: 'When a new user joins the company account', email: true, push: true },
    { id: '2', title: 'Team Member Removed', description: 'When a user is removed', email: true, push: true },
    { id: '3', title: 'Role Changed', description: 'When a team member\'s permissions are updated', email: true, push: true },
    { id: '4', title: 'Login from New Device', description: 'Security alert for unrecognized login', email: true, push: true },
    { id: '5', title: 'Password Changed', description: 'When account password is updated', email: true, push: true },
    { id: '6', title: 'Two-Factor Authentication', description: 'When 2FA is enabled or disabled', email: true, push: true },
  ]);

  // 4. Document & Compliance Notifications State
  const [documentNotifications, setDocumentNotifications] = useState<NotificationSettingItem[]>([
    { id: '1', title: 'Document Verified', description: 'When a document passes verification', email: true, push: true },
    { id: '2', title: 'Document Rejected', description: 'When a document fails verification', email: true, push: true },
    { id: '3', title: 'Document Expired', description: 'When a document has passed its expiry date', email: true, push: true },
    { id: '4', title: 'Account Suspended', description: 'When account is restricted due to compliance', email: true, push: true },
    { id: '5', title: 'Dispute Opened', description: 'When a claim or dispute is filed on an order', email: true, push: true },
    { id: '6', title: 'Dispute Updated', description: 'When there\'s a status change on a dispute', email: true, push: true },
    { id: '7', title: 'Dispute Resolved', description: 'When a dispute is closed', email: true, push: true },
  ]);

  // Generic Toggle Handler
  const handleToggle = (
    listSetter: React.Dispatch<React.SetStateAction<NotificationSettingItem[]>>,
    id: string,
    field: 'email' | 'push'
  ) => {
    listSetter((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: !item[field] } : item))
    );
  };

  // Helper Component for List Rendering
  const renderNotificationGroup = (
    title: string,
    items: NotificationSettingItem[],
    listSetter: React.Dispatch<React.SetStateAction<NotificationSettingItem[]>>
  ) => (
    <div className={styles['notif-section']}>
      <h3 className={styles['section-heading-dark']}>{title}</h3>
      <div className={styles['settings-card']}>
        <div className={styles['notif-rows-stack']}>
          {items.map((item) => (
            <div key={item.id} className={styles['notif-item-row']}>
              <div>
                <div className={styles['notif-item-title']}>{item.title}</div>
                <div className={styles['notif-item-desc']}>{item.description}</div>
              </div>
              <div className={styles['notif-toggles-group']}>
                {/* Email Toggle */}
                <div className={styles['toggle-inline']}>
                  <span className={styles['toggle-sublabel']}>Email</span>
                  <label className={styles['switch-toggle']}>
                    <input
                      type="checkbox"
                      checked={item.email}
                      onChange={() => handleToggle(listSetter, item.id, 'email')}
                    />
                    <span className={styles['switch-slider']}></span>
                  </label>
                </div>

                {/* Push Toggle */}
                <div className={styles['toggle-inline']}>
                  <span className={styles['toggle-sublabel']}>Push</span>
                  <label className={styles['switch-toggle']}>
                    <input
                      type="checkbox"
                      checked={item.push}
                      onChange={() => handleToggle(listSetter, item.id, 'push')}
                    />
                    <span className={styles['switch-slider']}></span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles['settings-tab-content']}>
      {/* 1. General Notifications Setting */}
      <div className={styles['notif-section']}>
        <h3 className={styles['section-heading-dark']}>General Notifications Setting</h3>
        <div className={styles['settings-card']}>
          {/* All Notifications Toggle */}
          <div className={styles['notif-item-row']} style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(203, 213, 225, 0.6)' }}>
            <div>
              <div className={styles['notif-item-title']}>All Notifications</div>
              <div className={styles['notif-item-desc']}>By this Option you can Enable or Disable all Notification</div>
            </div>
            <div className={styles['toggle-inline']}>
              <span className={styles['toggle-sublabel']}>{allNotifications ? 'Enabled' : 'Disabled'}</span>
              <label className={styles['switch-toggle']}>
                <input
                  type="checkbox"
                  checked={allNotifications}
                  onChange={(e) => setAllNotifications(e.target.checked)}
                />
                <span className={styles['switch-slider']}></span>
              </label>
            </div>
          </div>

          {/* Notification Frequency */}
          <div style={{ paddingTop: '20px' }}>
            <div className={styles['notif-item-title']} style={{ marginBottom: '4px' }}>Notification Frequency</div>
            <div className={styles['notif-item-desc']} style={{ marginBottom: '16px' }}>Here you can Choose the Mode of Notification</div>
            
            <div className={styles['frequency-segment-control']}>
              <button
                type="button"
                className={`${styles['segment-btn']} ${notificationFrequency === 'instant' ? styles['segment-btn--active'] : ''}`}
                onClick={() => setNotificationFrequency('instant')}
              >
                Instant (per-event notifications)
              </button>
              <button
                type="button"
                className={`${styles['segment-btn']} ${notificationFrequency === 'digest' ? styles['segment-btn--active'] : ''}`}
                onClick={() => setNotificationFrequency('digest')}
              >
                Digest (Daily Summary email)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Order Notifications */}
      {renderNotificationGroup('Order Notifications', orderNotifications, setOrderNotifications)}

      {/* 3. Trip & Driver Notifications */}
      {renderNotificationGroup('Trip & Driver Notifications', tripNotifications, setTripNotifications)}

      {/* 4. Team & Account Notifications */}
      {renderNotificationGroup('Team & Account Notifications', teamNotifications, setTeamNotifications)}

      {/* 5. Document & Compliance Notifications */}
      {renderNotificationGroup('Document & Compliance Notifications', documentNotifications, setDocumentNotifications)}
    </div>
  );
};

export default NotificationsTab;