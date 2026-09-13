'use client';

import React from 'react';
import styles from '../TripProtocolsReview.module.css';
import { SignatureInfo } from '../_types/types';

interface SignaturesSectionProps {
  activeTab: 'pickup' | 'delivery';
  onTabChange: (tab: 'pickup' | 'delivery') => void;
  driverSignature: SignatureInfo;
  clientSignature: SignatureInfo;
}

export const SignaturesSection: React.FC<SignaturesSectionProps> = ({
  activeTab,
  onTabChange,
  driverSignature,
  clientSignature,
}) => {
  const sampleSignatureSvg = (
    <svg viewBox="0 0 400 100" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round">
      <path d="M 30 50 Q 80 10 130 50 T 230 50 T 330 50 C 360 20 370 80 310 70 C 250 60 180 30 100 80" />
    </svg>
  );

  return (
    <>
      <div className={styles.tpr_tabsContainer}>
        <button
          className={`${styles.tpr_tabBtn} ${activeTab === 'pickup' ? styles.tpr_tabActive : ''}`}
          onClick={() => onTabChange('pickup')}
          type="button"
        >
          Pickup Protocol
        </button>
        <button
          className={`${styles.tpr_tabBtn} ${activeTab === 'delivery' ? styles.tpr_tabActive : ''}`}
          onClick={() => onTabChange('delivery')}
          type="button"
        >
          Delivery Protocol
        </button>
      </div>

      <div className={styles.tpr_signaturesGrid}>
        <div className={styles.tpr_sigBox}>
          <h3 className={styles.tpr_sigTitle}>Driver Signature</h3>
          <div className={styles.tpr_infoRow}>
            <span className={styles.tpr_infoLabel}>Name:</span>
            <span className={styles.tpr_infoVal}>{driverSignature.name}</span>
          </div>
          <div className={styles.tpr_infoRow}>
            <span className={styles.tpr_infoLabel}>Driving Licence:</span>
            <span className={styles.tpr_infoVal}>{driverSignature.licenseOrPhone}</span>
          </div>
          <div className={styles.tpr_infoRow}>
            <span className={styles.tpr_infoLabel}>Location:</span>
            <span className={styles.tpr_infoVal}>{driverSignature.locationOrEmail}</span>
          </div>
          <div className={styles.tpr_canvasPreview}>{sampleSignatureSvg}</div>
        </div>

        <div className={styles.tpr_sigBox}>
          <h3 className={styles.tpr_sigTitle}>Client Signature</h3>
          <div className={styles.tpr_infoRow}>
            <span className={styles.tpr_infoLabel}>Name:</span>
            <span className={styles.tpr_infoVal}>{clientSignature.name}</span>
          </div>
          <div className={styles.tpr_infoRow}>
            <span className={styles.tpr_infoLabel}>Phone Number:</span>
            <span className={styles.tpr_infoVal}>{clientSignature.licenseOrPhone}</span>
          </div>
          <div className={styles.tpr_infoRow}>
            <span className={styles.tpr_infoLabel}>Email:</span>
            <span className={styles.tpr_infoVal}>{clientSignature.locationOrEmail}</span>
          </div>
          <div className={styles.tpr_canvasPreview}>{sampleSignatureSvg}</div>
        </div>
      </div>
    </>
  );
};