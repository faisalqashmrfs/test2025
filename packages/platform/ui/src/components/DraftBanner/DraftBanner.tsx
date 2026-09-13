// packages/ui/src/components/DraftBanner/DraftBanner.tsx

'use client';

import React from 'react';
// @ts-ignore
import styles from './../../styles/style.module.css';

interface DraftBannerProps {
  statusText?: string;
  fromLocation: string;
  toLocation: string;
  vehicleName: string;
  buttonText: string;
  onComplete?: () => void;
}

export const DraftBanner = ({
  statusText = 'Draft',
  fromLocation,
  toLocation,
  vehicleName,
  buttonText,
  onComplete,
}: DraftBannerProps) => {
  return (
    <div className={styles.draftBanner_container}>
      <div className={styles.draftBanner_info}>
        <span className={styles.draftBanner_dot} />
        <span className={styles.draftBanner_badge}>{statusText}</span>
        <span className={styles.draftBanner_route}>
          {fromLocation} → {toLocation}
        </span>
        <span className={styles.draftBanner_divider}>|</span>
        <span className={styles.draftBanner_vehicle}>Vehicle: <strong>{vehicleName}</strong></span>
      </div>

      <button type="button" className={styles.draftBanner_btn} onClick={onComplete}>
        {buttonText} ›
      </button>
    </div>
  );
};