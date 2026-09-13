// apps/company/app/[locale]/_components/TripsAnalytics/TripsAnalytics.tsx

'use client';

import React, { useState } from 'react';
import { BarChartCard, ChartDataPoint, FilterOption } from '@xcarbox/ui';
import { dictionaries, Locale, defaultLocale } from '@xcarbox/i18n';
import { Icon } from '../Icon';
// @ts-ignore
import styles from './TripsAnalytics.module.css';

interface TripsAnalyticsProps {
  locale: string;
}

export const TripsAnalytics = ({ locale }: TripsAnalyticsProps) => {
  const validLocale: Locale = (dictionaries as Record<string, unknown>)[locale]
    ? (locale as Locale)
    : defaultLocale;
  const dict = dictionaries[validLocale] as Record<string, any>;
  const t = dict.overview || {};

  const [region, setRegion] = useState('all');
  const [time, setTime] = useState('thisMonth');

  const chartData: ChartDataPoint[] = [
    { id: '1', label: 'Mon', value: 45 },
    { id: '2', label: 'Tue', value: 48 },
    { id: '3', label: 'Wed', value: 35 },
    { id: '4', label: 'Thu', value: 70 },
    { id: '5', label: t.todayLabel || 'Friday (Today)', value: 85, isActive: true },
    { id: '6', label: 'Sat', value: 15 },
    { id: '7', label: 'Sun', value: 12 },
  ];

  const regionOptions: FilterOption[] = [
    { label: t.allRegions || 'All Regions', value: 'all' },
    { label: t.europe || 'Europe', value: 'eu' },
    { label: t.america || 'North America', value: 'na' },
  ];

  const timeOptions: FilterOption[] = [
    { label: t.thisMonth || 'This Month', value: 'thisMonth' },
    { label: t.thisWeek || 'This Week', value: 'thisWeek' },
    { label: t.thisYear || 'This Year', value: 'thisYear' },
  ];

  return (
    <section className={styles.tripsAnalytics_section}>
      <div className={styles.tripsAnalytics_header}>
        <h2 className={styles.tripsAnalytics_title}>{t.tripsAnalytics || 'Trips Analytics'}</h2>
        <a href={`/${locale}/analytics`} className={styles.tripsAnalytics_viewAll}>
          {t.viewAll || 'View All'} <Icon name="ExternalLink" className="w-3.5 h-3.5" />
        </a>
      </div>

      <BarChartCard
        data={chartData}
        regionOptions={regionOptions}
        timeOptions={timeOptions}
        selectedRegion={region}
        selectedTime={time}
        onRegionChange={setRegion}
        onTimeChange={setTime}
      />
    </section>
  );
};