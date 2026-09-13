'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../TripProtocolsReview.module.css';

interface HeaderOverviewProps {
  headerDate: string;
  tripId: string;
  pickupLocation: string;
  pickupDate: string;
  deliveryLocation: string;
  deliveryDate: string;
  distance: string;
  duration: string;
}

export const HeaderOverview: React.FC<HeaderOverviewProps> = ({
  headerDate,
  tripId,
  pickupLocation,
  pickupDate,
  deliveryLocation,
  deliveryDate,
  distance,
  duration,
}) => {
  return (
    <>
      <div>
        <a href="/trip-requests" className={styles.tpr_backLink}>
          ← Back to Trip
        </a>
        <div className={styles.tpr_headerDate}>{headerDate}</div>
        <h1 className={styles.tpr_pageTitle}>Trip Protocols Review</h1>
        <p className={styles.tpr_pageSub}>
          See and recap the done trip's protocol, and take the confirm action or tell us if there is any problem
        </p>
      </div>

      <div>
        <h2 className={styles.tpr_sectionTitle}>Trip Overview</h2>
        <div className={styles.tpr_overviewCard}>
          <div className={styles.tpr_overviewCol}>
            <span className={styles.tpr_overviewLabel}>Trip ID</span>
            <span className={styles.tpr_overviewValue}>{tripId}</span>
          </div>
          <div className={styles.tpr_overviewCol}>
            <span className={styles.tpr_overviewLabel}>Pick up</span>
            <span className={styles.tpr_overviewValue}>{pickupLocation}</span>
            <span className={styles.tpr_overviewSubText}>{pickupDate}</span>
          </div>
          <div className={styles.tpr_overviewCol}>
            <span className={styles.tpr_overviewLabel}>Delivery</span>
            <span className={styles.tpr_overviewValue}>{deliveryLocation}</span>
            <span className={styles.tpr_overviewSubText}>{deliveryDate}</span>
          </div>
          <div className={styles.tpr_overviewCol}>
            <span className={styles.tpr_overviewLabel}>Distance</span>
            <span className={styles.tpr_overviewValue}>{distance}</span>
          </div>
          <div className={styles.tpr_overviewCol}>
            <span className={styles.tpr_overviewLabel}>Duration</span>
            <span className={styles.tpr_overviewValue}>{duration}</span>
          </div>
        </div>
      </div>
    </>
  );
};