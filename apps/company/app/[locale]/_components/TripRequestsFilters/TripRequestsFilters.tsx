// apps/company/app/[locale]/_components/TripRequestsFilters/TripRequestsFilters.tsx

'use client';

import React from 'react';
// @ts-ignore
import styles from './TripRequestsFilters.module.css';

interface TripRequestsFiltersProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  dict?: Record<string, any>;
}

export const TripRequestsFilters = ({ activeTab, onTabChange, dict = {} }: TripRequestsFiltersProps) => {
  const tabs = ['ALL', 'Scheduled', 'Assigned', 'In Transit', 'Delivered', 'Disputed', 'Cancelled'];

  return (
    <div className={styles.filters_container}>
      {/* التبويبات العلوية */}
      <div className={styles.filters_tabsRow}>
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`${styles.filters_tabBtn} ${activeTab === tab ? styles.filters_tabActive : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* حقول الفلترة السريعة */}
      <div className={styles.filters_inputsGrid}>
        <input type="text" placeholder="Pickup City" className={styles.filters_input} />
        <input type="text" placeholder="Delivery City" className={styles.filters_input} />
        <input type="date" placeholder="Pickup Date" className={styles.filters_input} />
        <input type="date" placeholder="Delivery Date" className={styles.filters_input} />
        
        <select className={styles.filters_select}>
          <option value="">Region</option>
          <option value="Bayern">Bayern</option>
          <option value="Hessen">Hessen</option>
        </select>

        <select className={styles.filters_select}>
          <option value="">Transport type</option>
          <option value="Carrier">Carrier</option>
          <option value="Driven">Driven</option>
        </select>

        <select className={styles.filters_select}>
          <option value="">Posted By</option>
        </select>

        <select className={styles.filters_select}>
          <option value="">Sort By</option>
        </select>
      </div>
    </div>
  );
};