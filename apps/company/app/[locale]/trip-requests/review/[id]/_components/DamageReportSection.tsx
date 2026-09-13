'use client';

import React, { useState } from 'react';
import styles from '../TripProtocolsReview.module.css';
import { DamageReportData } from '../_types/types';

interface DamageReportSectionProps {
  damageReport: DamageReportData;
}

export const DamageReportSection: React.FC<DamageReportSectionProps> = ({ damageReport }) => {
  const [activeImage, setActiveImage] = useState(damageReport.mainImage);

  return (
    <div>
      <h2 className={styles.tpr_sectionTitle}>Vehicle Damage Report</h2>
      <div className={styles.tpr_damageCard}>
        <div className={styles.tpr_damageImgCol}>
          <img src={activeImage} alt="Damage Scratch" className={styles.tpr_damageMainImg} />
          <div className={styles.tpr_thumbsContainer}>
            {damageReport.thumbnails.map((thumbUrl, idx) => (
              <img
                key={idx}
                src={thumbUrl}
                alt={`Thumb ${idx}`}
                className={styles.tpr_thumbImg}
                onClick={() => setActiveImage(thumbUrl)}
                style={{ borderColor: activeImage === thumbUrl ? '#2563eb' : '#ffffff' }}
              />
            ))}
          </div>
        </div>

        <div className={styles.tpr_damageDetailsCol}>
          <div className={styles.tpr_damageTitle}>{damageReport.title}</div>
          <div className={styles.tpr_damageMeta}>Damage Place: {damageReport.place}</div>
          <div className={styles.tpr_damageMeta}>Damage Type: {damageReport.type}</div>
          <p className={styles.tpr_damageDesc}>{damageReport.description}</p>
        </div>
      </div>
    </div>
  );
};