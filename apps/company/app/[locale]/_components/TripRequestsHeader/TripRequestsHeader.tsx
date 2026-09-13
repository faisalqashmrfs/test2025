// apps/company/app/[locale]/_components/TripRequestsHeader/TripRequestsHeader.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ActionButton, DraftBanner, StatCard } from '@xcarbox/ui';
import { dictionaries, Locale, defaultLocale } from '@xcarbox/i18n';
import { Icon } from '../Icon';
// @ts-ignore
import styles from './TripRequestsHeader.module.css';

interface TripRequestsHeaderProps {
  locale: string;
}

export const TripRequestsHeader = ({ locale }: TripRequestsHeaderProps) => {
  const router = useRouter();

  const validLocale: Locale = (dictionaries as Record<string, unknown>)[locale]
    ? (locale as Locale)
    : defaultLocale;
  const dict = dictionaries[validLocale] as Record<string, any>;
  const t = dict.tripRequests || {};

  const handleNewRequest = () => {
    router.push(`/${locale}/trip-requests/new`);
  };

  return (
    <div className={styles.header_container}>
      {/* الشريط العلوي للمسودة الحالية */}
      <DraftBanner
        statusText={t.draft || 'Draft'}
        fromLocation="Berlin"
        toLocation="Munich"
        vehicleName="Porsche 911 GT3"
        buttonText={t.completeRequest || 'COMPLETE REQUEST'}
        onComplete={() => console.log('Complete draft')}
      />

      <div className={styles.header_date}>Oct 26, 2023 . 08:00 AM</div>

      <div className={styles.header_topRow}>
        <div>
          <h1 className={styles.header_title}>{t.myRequests || 'My Requests'}</h1>
          <p className={styles.header_subtitle}>
            {t.subtitle || 'Manage active and pending high-value vehicle shipments.'}
          </p>
        </div>

        <div>
          <ActionButton
            icon={<Icon name="PlusSquare" className="w-4 h-4" />}
            onClick={handleNewRequest}
          >
            {t.newRequest || 'NEW REQUEST'}
          </ActionButton>
        </div>
      </div>

      {/* بطاقات الإحصائيات الأربع */}
      <div className={styles.header_grid}>
        <StatCard
          title={t.totalRequests || 'Total Requests'}
          value="0142"
          subtext={t.totalRequestsSub || 'The All Trips In All States'}
        />
        <StatCard
          title={t.pending || 'Pending'}
          value="032"
          subtext={t.pendingSub || 'This Trips Waiting For Drivers'}
        />
        <StatCard
          title={t.inTransit || 'In Transit'}
          value="012"
          highlightValue="2"
          subtext={t.arrivingToday || 'Arriving Today'}
        />
        <StatCard
          title={t.delivered || 'Delivered'}
          value="044"
          highlightValue="8"
          subtext={t.thisMonth || 'This Month'}
        />
      </div>
    </div>
  );
};