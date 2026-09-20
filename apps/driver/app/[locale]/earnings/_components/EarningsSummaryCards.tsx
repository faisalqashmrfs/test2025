'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './EarningsSummaryCards.module.css';

const SafeChevronDown = ChevronDown as unknown as React.FC<any>;

export default function EarningsSummaryCards() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.titleSection}>
          <h1>Earnings &amp; Invoicing</h1>
          <p>Manage how you appear to partners and other members of the network.</p>
        </div>
        <button className={styles.dateFilterButton}>
          This Month <SafeChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <div className={styles.cardLabel}>TOTAL EARNED</div>
          <div className={styles.cardValue}>€42,280.50</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardLabel}>PENDING IN ESCROW</div>
          <div className={styles.cardValue}>€3,540.00</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardLabel}>UNDER NEGOTIATION</div>
          <div className={styles.cardValue}>04</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardLabel}>PAID OUT THIS MONTH</div>
          <div className={styles.cardValue}>€12,450.00</div>
        </div>
      </div>
    </div>
  );
}