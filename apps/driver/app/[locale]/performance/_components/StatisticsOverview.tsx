import React from 'react';
import styles from './StatisticsOverview.module.css';

export default function StatisticsOverview() {
  return (
    <div className={styles.container}>
      {/* شريط الحالة العلوي */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <div className={styles.statusDot}></div>
          <div>
            <span className={styles.statusText}>To Start</span>{' '}
            <span className={styles.statusSub}>In 2days, 30min</span>
          </div>
          <span style={{ color: '#475569' }}>|</span>
          <div>
            <span className={styles.routeText}>Berlin</span> → <span className={styles.routeText}>Munich</span>
          </div>
          <span style={{ color: '#475569' }}>|</span>
          <div>
            <span className={styles.vehicleText}>Vehicle:</span>{' '}
            <span className={styles.routeText}>Porsche 911 GT3</span>
          </div>
        </div>
        <button className={styles.viewDetailsBtn}>
          VEW DETAILS &gt;
        </button>
      </div>

      {/* عنوان القسم والقائمة المنسدلة للشهر */}
      <div className={styles.headerSection}>
        <div>
          <div className={styles.dateText}>Oct 26, 2023 . 08:20AM</div>
          <h1 className={styles.title}>Your Statistics</h1>
          <p className={styles.subtitle}>Manage how you appear to partners and other members of the network.</p>
        </div>
        <div>
          <select className={styles.monthDropdown}>
            <option>This Month</option>
          </select>
        </div>
      </div>

      {/* بطاقات الإحصائيات الأربع */}
      <div className={styles.cardsGrid}>
        <div className={styles.cardBox}>
          <div className={styles.cardTitle}>TRIPS COMPLETED</div>
          <div className={styles.cardContent}>
            <span className={styles.cardValue}>142</span>
            <span className={styles.cardBadge}>+5%</span>
          </div>
        </div>

        <div className={styles.cardBox}>
          <div className={styles.cardTitle}>TOTAL DISTANCE</div>
          <div className={styles.cardContent}>
            <span className={styles.cardValue}>12,400km</span>
            <span className={styles.cardBadge}>+5%</span>
          </div>
        </div>

        <div className={styles.cardBox}>
          <div className={styles.cardTitle}>AVG. DISTANCE</div>
          <div className={styles.cardContent}>
            <span className={styles.cardValue}>295km</span>
          </div>
        </div>

        <div className={styles.cardBox}>
          <div className={styles.cardTitle}>TOTAL Drive HOURS</div>
          <div className={styles.cardContent}>
            <span className={styles.cardValue}>156h</span>
          </div>
        </div>
      </div>
    </div>
  );
}