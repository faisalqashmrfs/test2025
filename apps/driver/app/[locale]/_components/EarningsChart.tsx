import React from 'react';
import styles from './EarningsChart.module.css';

export default function EarningsChart() {
  return (
    <div>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Earnings Chart:</h3>
      <div className={styles.chartContainerBox}>
        <div className={styles.chartHeaderFlex}>
          <div>
            <span className={styles.chartTitleSmall}>WEEKLY EARNINGS</span>
            <div className={styles.chartBigAmount}>&euro;4,250.00</div>
          </div>
          <div className={styles.chartHeaderRight}>
            <span className={styles.chartPercentageBadge}>
              +12.5%
            </span>
            <div className={styles.chartTabsGroup}>
              <button className={styles.chartTabActive}>Weekly</button>
              <button className={styles.chartTabInactive}>Monthly</button>
              <button className={styles.chartTabInactive}>Yearly</button>
            </div>
          </div>
        </div>

        <div className={styles.chartBarsArea}>
          <div className={styles.barColStandard} style={{ height: '5rem' }}>
            <span className={styles.barDayText}>Mon</span>
          </div>
          <div className={styles.barColStandard} style={{ height: '6rem' }}>
            <span className={styles.barDayText}>Tue</span>
          </div>
          <div className={styles.barColStandard} style={{ height: '4rem' }}>
            <span className={styles.barDayText}>Wed</span>
          </div>
          <div className={styles.barColStandard} style={{ height: '7rem' }}>
            <span className={styles.barDayText}>Thu</span>
          </div>
          <div className={styles.barColToday} style={{ height: '8rem' }}>
            <span className={styles.barTodayLabelBadge}>Friday (Today)</span>
          </div>
          <div className={styles.barColStandard} style={{ height: '5.5rem' }}>
            <span className={styles.barDayText}>Sat</span>
          </div>
          <div className={styles.barColStandard} style={{ height: '3.5rem' }}>
            <span className={styles.barDayText}>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
}