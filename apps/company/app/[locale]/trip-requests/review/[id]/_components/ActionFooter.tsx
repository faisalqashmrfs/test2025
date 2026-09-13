'use client';

import React from 'react';
import styles from '../TripProtocolsReview.module.css';

interface ActionFooterProps {
  driverNote: string;
  onConfirm?: () => void;
  onExport?: () => void;
  onComplaint?: () => void;
}

export const ActionFooter: React.FC<ActionFooterProps> = ({
  driverNote,
  onConfirm,
  onExport,
  onComplaint,
}) => {
  return (
    <>
      <div>
        <h2 className={styles.tpr_sectionTitle}>Driver Pickup Note</h2>
        <div className={styles.tpr_noteBox}>{driverNote}</div>
      </div>

      <div className={styles.tpr_actionFooter}>
        <button type="button" className={styles.tpr_btnConfirm} onClick={onConfirm}>
          CONFIRM PROTOCOLS
        </button>
        <button type="button" className={styles.tpr_btnExport} onClick={onExport}>
          EXPORT PROTOCOLS
        </button>
        <button type="button" className={styles.tpr_btnComplaint} onClick={onComplaint}>
          SUBMIT A COMPLAINT
        </button>
      </div>
    </>
  );
};