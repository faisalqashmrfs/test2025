// packages/ui/src/components/StatCard/StatCard.tsx

'use client';

import React from 'react';
// @ts-ignore
import styles from './../../styles/style.module.css';

interface StatCardProps {
  title: string;
  value: string | number;
  subtext: string;
  highlightValue?: string | number;
}

export const StatCard = ({ title, value, subtext, highlightValue }: StatCardProps) => {
  return (
    <div className={styles.statCard_card}>
      <div>
        <h3 className={styles.statCard_title}>{title}</h3>
        <div className={styles.statCard_value}>{value}</div>
      </div>
      <div className={styles.statCard_footer}>
        {highlightValue && <span className={styles.statCard_highlight}>{highlightValue}</span>}
        <span>{subtext}</span>
      </div>
    </div>
  );
};