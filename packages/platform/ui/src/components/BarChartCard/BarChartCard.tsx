// packages/ui/src/components/BarChartCard/BarChartCard.tsx

'use client';

import React from 'react';
// @ts-ignore
import styles from '../../styles/style.module.css';

export interface ChartDataPoint {
  id: string;
  label: string;
  value: number; // النسبة المئوية للارتفاع 0-100
  isActive?: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
}

interface BarChartCardProps {
  data: ChartDataPoint[];
  regionOptions: FilterOption[];
  timeOptions: FilterOption[];
  selectedRegion?: string;
  selectedTime?: string;
  onRegionChange?: (val: string) => void;
  onTimeChange?: (val: string) => void;
}

export const BarChartCard = ({
  data,
  regionOptions,
  timeOptions,
  selectedRegion,
  selectedTime,
  onRegionChange,
  onTimeChange,
}: BarChartCardProps) => {
  return (
    <div className={styles.analytics_card}>
      <div className={styles.analytics_bgMesh} />

      {/* القوائم المنسدلة للتصفية */}
      <div className={styles.analytics_controls}>
        <select
          className={styles.analytics_select}
          value={selectedRegion}
          onChange={(e) => onRegionChange?.(e.target.value)}
        >
          {regionOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <select
          className={styles.analytics_select}
          value={selectedTime}
          onChange={(e) => onTimeChange?.(e.target.value)}
        >
          {timeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* رسم الأعمدة البيانية */}
      <div className={styles.analytics_barsContainer}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`${styles.analytics_barItem} ${
              item.isActive ? styles.analytics_barActive : ''
            }`}
            style={{ height: `${item.value}%` }}
          >
            {item.isActive && (
              <div className={styles.analytics_tooltip}>{item.label}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};