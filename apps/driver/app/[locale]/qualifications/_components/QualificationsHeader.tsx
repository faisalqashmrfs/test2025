import React from 'react';
import styles from './QualificationsHeader.module.css';

export default function QualificationsHeader() {
  return (
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

      <div>
        <div className={styles.dateTime}>Oct 26, 2023 . 08:20AM</div>
        <h1 className={styles.sectionTitle}>Qualifications</h1>
        <p className={styles.sectionSubtitle}>Complete company qualifications to unlock their trip offers in your feed</p>
      </div>

      {/* بطاقات الإحصائيات الثلاث */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>TOTAL AVAILABLE</div>
          <div className={styles.statValueContainer}>
            <span className={styles.statNumber}>24</span>
            <span className={styles.statUnit}>Exam</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statLabel}>PASSED & UNLOCKED</div>
          <div className={styles.statValueContainer}>
            <span className={styles.statNumber}>04</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statLabel}>UnPassed</div>
          <div className={styles.statValueContainer}>
            <span className={styles.statNumber}>20</span>
          </div>
        </div>
      </div>

      {/* صندوق الملاحظة التوضيحية */}
      <div className={styles.noteBox}>
        <div className={styles.noteIcon}>⚠️</div>
        <div className={styles.noteText}>
          <span className={styles.noteHighlight}>Note:</span> XCARBOX partners define their own operational standards. Qualifications are company-specific assessments designed to ensure you meet their unique safety and handling requirements. Passing an exam unlocks immediate access to that partner&apos;s premium trip offers. Please note that failure in one company&apos;s qualification does not affect your standing with others. Some partners may offer direct enrollment without a formal examination based on your driver history and tier status.
        </div>
      </div>
    </div>
  );
}