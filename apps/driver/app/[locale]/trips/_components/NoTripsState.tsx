'use client';

import React from 'react';
import { Ban } from 'lucide-react';
import styles from './NoTripsState.module.css';

const SafeBan = Ban as unknown as React.FC<any>;

interface NoTripsStateProps {
  onClearFilter?: () => void;
}

export default function NoTripsState({ onClearFilter }: NoTripsStateProps) {
  return (
    <div className={styles.container}>
      {/* 1. الشريط التنبيهي العلوي الأحمر */}
      <div className={styles.topAlertBanner}>
        There is no Offers for now come back again
      </div>

      {/* 2. المحتوى الرئيسي المنتصف */}
      <div className={styles.contentBox}>
        {/* أيقونة المنع */}
        <div className={styles.iconWrapper}>
          <SafeBan className="w-6 h-6" />
        </div>

        {/* العنوان الرئيسي */}
        <h2 className={styles.mainTitle}>
          No trips found<br />
          matching your filters
        </h2>

        {/* النص التوضيحي */}
        <p className={styles.subText}>
          Adjust your departure windows or vehicle specifications to browse available routes across Germany.
        </p>

        {/* زر مسح الفلتر */}
        <button onClick={onClearFilter} className={styles.clearButton}>
          CLEAR FILTER
        </button>

        {/* نصيحة سريعة بالأسفل */}
        <div className={styles.quickTipBox}>
          <span className={styles.quickTipTag}>QUICK TIP</span>
          <span>Try searching for the 'Western Axis' region.</span>
        </div>
      </div>
    </div>
  );
}