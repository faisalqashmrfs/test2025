'use client';

import React, { useState } from 'react';
import styles from './MyTeamHeader.module.css';
import AddDriverSidebar from './AddDriverSidebar'; // استيراد السايد بار الذي أنشأناه

export default function MyTeamHeader() {
  const [isAddDriverOpen, setIsAddDriverOpen] = useState(false);

  const handleSendInvitation = (email: string, message: string) => {
    // يمكنك إضافة منطق إرسال الدعوة هنا لاحقاً
    console.log('Sending invitation to:', email, 'with message:', message);
    alert(`Invitation sent successfully to ${email}`);
  };

  return (
    <>
      <div className={styles.container}>
        {/* شريط الإشعار العلوي المشترك */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <span className={styles.dot}></span>
            <span>To Start In 2days, 30min</span>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <span className={styles.routeText}>Berlin → Munich</span>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <span className={styles.vehicleText}>Vehicle: Porsche 911 GT3</span>
          </div>
          <button className={styles.viewDetailsBtn}>VEIW DETAILS &gt;</button>
        </div>

        {/* العنوان وزر إضافة سائق */}
        <div className={styles.headerRow}>
          <div className={styles.titleSection}>
            <div className={styles.dateTime}>Oct 26, 2023 . 08:20AM</div>
            <h1 className={styles.sectionTitle}>My Team</h1>
            <p className={styles.sectionSubtitle}>Manage the drivers working under your account</p>
          </div>
          <button 
            className={styles.addDriverBtn} 
            onClick={() => setIsAddDriverOpen(true)}
          >
            Add Driver <span>⊕</span>
          </button>
        </div>

        {/* بطاقات الإحصائيات الثلاث */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>TOTAL DRIVERS</div>
            <div className={styles.statNumber}>012</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Pending Invitations</div>
            <div className={styles.statNumber}>04</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Verified Drivers</div>
            <div className={styles.statNumber}>08</div>
          </div>
        </div>

        {/* شريط التبويبات (Tabs) */}
        <div className={styles.tabsContainer}>
          <button className={styles.tabActive}>ALL</button>
          <button className={styles.tabInactive}>Verified Drivers</button>
          <button className={styles.tabInactive}>Unverified Drivers</button>
          <button className={styles.tabInactive}>Pending Verification</button>
        </div>
      </div>

      {/* القائمة الجانبية لإضافة سائق جديد */}
      <AddDriverSidebar
        isOpen={isAddDriverOpen}
        onClose={() => setIsAddDriverOpen(false)}
        onSendInvitation={handleSendInvitation}
      />
    </>
  );
}