import React from 'react';
import styles from './PerformanceAndTrips.module.css';

// ===== بيانات Performance Metrics =====
const METRICS = [
  { label: 'COMPLETION RATE:', value: '98%', badge: 'OPTIMAL', badgeType: 'optimal' },
  { label: 'CANCELLATION RATE:', value: '2%', badge: 'STABLE', badgeType: 'stable' },
  { label: 'RESPONSE TIME:', value: '4min', badge: 'EXPRESS', badgeType: 'express' },
  { label: 'PICKUP ON-TIME:', value: '95%', badge: 'MONITOR', badgeType: 'monitor' },
  { label: 'DELIVERY ON-TIME:', value: '97%', badge: 'OPTIMAL', badgeType: 'optimal' },
];

// ===== بيانات Trips Analysis =====
const BARS = [
  { week: 'Week 1', lastMonth: 12, thisMonth: 28 },
  { week: 'Week 2', lastMonth: 42, thisMonth: 22 },
  { week: 'Week 3', lastMonth: 38, thisMonth: 45 },
  { week: 'Week 4', lastMonth: 18, thisMonth: 32 },
];

const MAX_VALUE = 50;

export default function PerformanceAndTrips() {
  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'optimal': return styles.badgeOptimal;
      case 'stable': return styles.badgeStable;
      case 'express': return styles.badgeExpress;
      case 'monitor': return styles.badgeMonitor;
      default: return styles.badgeOptimal;
    }
  };

  return (
    <div className={styles.container}>
      {/* ===================== Performance Metrics ===================== */}
      <div className={styles.cardBox}>
        <div className={styles.cardTitle}>Performance Metrics</div>

        <div className={styles.metricsList}>
          {METRICS.map((metric, idx) => (
            <div key={idx} className={styles.metricRow}>
              <span className={styles.metricLabel}>{metric.label}</span>
              <div className={styles.metricRight}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={`${styles.badge} ${getBadgeClass(metric.badgeType)}`}>
                  {metric.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== Trips Analysis ===================== */}
      <div className={styles.cardBox}>
        <div className={styles.headerRow}>
          <div className={styles.cardTitle}>Trips Analysis</div>
          <div className={styles.legendWrapper}>
            <div className={styles.legendItem}>
              <span className={styles.dotLastMonth}></span> Last Month
            </div>
            <div className={styles.legendItem}>
              <span className={styles.dotThisMonth}></span> This Month
            </div>
          </div>
        </div>

        <div className={styles.chartWrapper}>
          <div className={styles.yAxisLabels}>
            <span>40</span>
            <span>20</span>
            <span>5</span>
            <span>0</span>
          </div>

          <svg className={styles.chartSvg} viewBox="0 0 500 200" preserveAspectRatio="none">
            {/* خطوط الشبكة الأفقية */}
            <line x1="0" y1="0" x2="500" y2="0" className={styles.gridLine} />
            <line x1="0" y1="66" x2="500" y2="66" className={styles.gridLine} />
            <line x1="0" y1="133" x2="500" y2="133" className={styles.gridLine} />
            <line x1="0" y1="200" x2="500" y2="200" className={styles.gridLine} />

            {BARS.map((bar, idx) => {
              const groupWidth = 500 / BARS.length;
              const groupCenter = idx * groupWidth + groupWidth / 2;
              const barWidth = 30;
              const gap = 6;

              const lastMonthHeight = (bar.lastMonth / MAX_VALUE) * 200;
              const thisMonthHeight = (bar.thisMonth / MAX_VALUE) * 200;

              return (
                <g key={idx}>
                  <rect
                    x={groupCenter - barWidth - gap / 2}
                    y={200 - lastMonthHeight}
                    width={barWidth}
                    height={lastMonthHeight}
                    fill="#b45309"
                    rx="2"
                  />
                  <rect
                    x={groupCenter + gap / 2}
                    y={200 - thisMonthHeight}
                    width={barWidth}
                    height={thisMonthHeight}
                    fill="#1e293b"
                    rx="2"
                  />
                </g>
              );
            })}
          </svg>

          <div className={styles.xAxisLabels}>
            {BARS.map((bar, idx) => (
              <div key={idx} className={styles.xAxisLabel}>{bar.week}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}