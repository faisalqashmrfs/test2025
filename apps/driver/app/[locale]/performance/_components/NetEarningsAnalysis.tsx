import React from 'react';
import styles from './NetEarningsAnalysis.module.css';

export default function NetEarningsAnalysis() {
  return (
    <div className={styles.container}>
      {/* ====== صندوق الرسم البياني ====== */}
      <div className={styles.cardBox}>
        <div className={styles.headerRow}>
          <div className={styles.cardTitle}>Net Earnings Analysis</div>
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
          {/* محور Y */}
          <div className={styles.yAxisLabels}>
            <span>2k</span>
            <span>1.5k</span>
            <span>1k</span>
            <span>500</span>
            <span>0</span>
          </div>

          {/* الرسم البياني SVG */}
          <svg
            className={styles.chartSvg}
            viewBox="0 0 600 200"
            preserveAspectRatio="none"
          >
            <defs>
              {/* تدرج تعبئة الخط البني */}
              <linearGradient id="brownFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#854d0e" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#854d0e" stopOpacity="0.15" />
              </linearGradient>

              {/* تدرج تعبئة الخط الكحلي */}
              <linearGradient id="navyFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0b132b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0b132b" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* خطوط الشبكة الأفقية */}
            <line x1="0" y1="0" x2="600" y2="0" className={styles.gridLine} />
            <line x1="0" y1="50" x2="600" y2="50" className={styles.gridLine} />
            <line x1="0" y1="100" x2="600" y2="100" className={styles.gridLine} />
            <line x1="0" y1="150" x2="600" y2="150" className={styles.gridLine} />
            <line x1="0" y1="200" x2="600" y2="200" className={styles.gridLine} />

            {/* خطوط الشبكة العمودية عند Weeks */}
            <line x1="75" y1="0" x2="75" y2="200" className={styles.gridLine} />
            <line x1="225" y1="0" x2="225" y2="200" className={styles.gridLine} />
            <line x1="375" y1="0" x2="375" y2="200" className={styles.gridLine} />
            <line x1="525" y1="0" x2="525" y2="200" className={styles.gridLine} />

            {/* ====== تعبئة الخط البني (Last Month) ====== */}
            <path
              d="M 0,140 
                 C 60,120 100,80 150,70 
                 L 225,45 
                 L 300,45 
                 L 375,80 
                 L 450,105 
                 L 525,120 
                 L 555,110 
                 L 570,150 
                 L 600,120 
                 L 600,200 
                 L 0,200 Z"
              fill="url(#brownFill)"
            />

            {/* ====== تعبئة الخط الكحلي (This Month) ====== */}
            <path
              d="M 0,90 
                 C 60,95 100,75 150,100 
                 L 225,110 
                 L 300,105 
                 L 375,95 
                 L 450,110 
                 L 525,110 
                 L 555,140 
                 L 570,120 
                 L 600,110 
                 L 600,200 
                 L 0,200 Z"
              fill="url(#navyFill)"
            />

            {/* ====== الخط البني (Last Month) ====== */}
            <path
              d="M 0,140 
                 C 60,120 100,80 150,70 
                 L 225,45 
                 L 300,45 
                 L 375,80 
                 L 450,105 
                 L 525,120 
                 L 555,110 
                 L 570,150 
                 L 600,120"
              fill="none"
              stroke="#854d0e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* ====== الخط الكحلي (This Month) ====== */}
            <path
              d="M 0,90 
                 C 60,95 100,75 150,100 
                 L 225,110 
                 L 300,105 
                 L 375,95 
                 L 450,110 
                 L 525,110 
                 L 555,140 
                 L 570,120 
                 L 600,110"
              fill="none"
              stroke="#0b132b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* ====== نقاط على الخط البني ====== */}
            <circle cx="0" cy="140" r="3.5" fill="#854d0e" />
            <circle cx="150" cy="70" r="3.5" fill="#854d0e" />
            <circle cx="225" cy="45" r="3.5" fill="#854d0e" />
            <circle cx="300" cy="45" r="3.5" fill="#854d0e" />
            <circle cx="375" cy="80" r="3.5" fill="#854d0e" />
            <circle cx="450" cy="105" r="3.5" fill="#854d0e" />
            <circle cx="525" cy="120" r="3.5" fill="#854d0e" />
            <circle cx="570" cy="150" r="3.5" fill="#854d0e" />
            <circle cx="600" cy="120" r="3.5" fill="#854d0e" />

            {/* ====== نقاط على الخط الكحلي ====== */}
            <circle cx="0" cy="90" r="3.5" fill="#0b132b" />
            <circle cx="150" cy="100" r="3.5" fill="#0b132b" />
            <circle cx="225" cy="110" r="3.5" fill="#0b132b" />
            <circle cx="300" cy="105" r="3.5" fill="#0b132b" />
            <circle cx="375" cy="95" r="3.5" fill="#0b132b" />
            <circle cx="450" cy="110" r="3.5" fill="#0b132b" />
            <circle cx="525" cy="110" r="3.5" fill="#0b132b" />
            <circle cx="570" cy="120" r="3.5" fill="#0b132b" />
            <circle cx="600" cy="110" r="3.5" fill="#0b132b" />
          </svg>
        </div>

        {/* محور X */}
        <div className={styles.xAxisLabels}>
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>

      {/* ====== صندوق الملخص المالي ====== */}
      <div className={styles.cardBox}>
        <div className={styles.cardTitle}>FINANCIAL SUMMARY</div>

        <div style={{ marginTop: '2rem' }}>
          <div className={styles.financialRow}>
            <span>Gross Revenue</span>
            <span className={styles.financialValue}>€4,850.00</span>
          </div>
          <div className={styles.financialRow}>
            <span>Platform Fee (10%)</span>
            <span className={styles.negativeValue}>-€570.00</span>
          </div>
          <div className={styles.financialRow}>
            <span>Insurance Deductible</span>
            <span className={styles.negativeValue}>-€0.00</span>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div className={styles.divider}></div>
          <div className={styles.payoutRow}>
            <span>Net Payout</span>
            <span className={styles.payoutValue}>€4,280.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}