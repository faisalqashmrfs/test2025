'use client';

import React from 'react';
import styles from '../TripProtocolsReview.module.css';
import { VehicleInfoData } from '../_types/types';

interface VehicleInfoSectionProps {
  vehicleInfo: VehicleInfoData;
}

export const VehicleInfoSection: React.FC<VehicleInfoSectionProps> = ({ vehicleInfo }) => {
  return (
    <div>
      <h2 className={styles.tpr_sectionTitle}>Vehicle Information</h2>
      <div className={styles.tpr_vehicleInfoGrid}>
        <div className={styles.tpr_vehicleLeftCol}>
          <div className={styles.tpr_metricsRow}>
            <div className={styles.tpr_metricCard}>
              <div className={styles.tpr_metricLabel}>Mileage</div>
              <div className={styles.tpr_metricValue}>{vehicleInfo.mileage}</div>
            </div>
            <div className={styles.tpr_metricCard}>
              <div className={styles.tpr_metricLabel}>Fuel Percentage</div>
              <div className={styles.tpr_metricValue}>{vehicleInfo.fuelPercentage}</div>
            </div>
          </div>

          <div className={styles.tpr_itemsCard}>
            <div className={styles.tpr_itemsTitle}>Items in the Car</div>
            <div className={styles.tpr_itemsGrid}>
              {vehicleInfo.items.map((item, idx) => (
                <div key={idx} className={styles.tpr_itemCheck}>
                  <span className={styles.tpr_checkIcon}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.tpr_dashboardImgCard}>
          <img src={vehicleInfo.dashboardImgUrl} alt="Dashboard" />
        </div>
      </div>
    </div>
  );
};