// apps/company/app/[locale]/_components/OverviewHeader/OverviewHeader.tsx

'use client';

import React from 'react';
import { dictionaries, Locale, defaultLocale } from '@xcarbox/i18n';
import { Icon } from '../Icon'; // استدعاء مكون الأيقونة الوسيط لحل مشكلة Typescript
// @ts-ignore
import styles from './OverviewHeader.module.css';

interface OverviewHeaderProps {
  locale: string;
}

interface StatCardProps {
  title: string;
  value: string;
  footerHighlight?: string;
  footerText: string;
}

const StatCard = ({ title, value, footerHighlight, footerText }: StatCardProps) => (
  <div className={styles.overviewHeader_statCard}>
    <div>
      <div className={styles.overviewHeader_cardTop}>
        <span className={styles.overviewHeader_cardTitle}>{title}</span>
        <span className={styles.overviewHeader_externalIcon}>
          <Icon name="ExternalLink" className="w-4 h-4" />
        </span>
      </div>
      <div className={styles.overviewHeader_cardValue}>{value}</div>
    </div>
    <div>
      <hr className={styles.overviewHeader_divider} />
      <div className={styles.overviewHeader_cardFooter}>
        {footerHighlight && (
          <span className={styles.overviewHeader_footerHighlight}>{footerHighlight}</span>
        )}
        {footerText}
      </div>
    </div>
  </div>
);

export const OverviewHeader = ({ locale }: OverviewHeaderProps) => {
  const validLocale: Locale = (dictionaries as Record<string, unknown>)[locale]
    ? (locale as Locale)
    : defaultLocale;
  
  const dict = dictionaries[validLocale] as Record<string, any>;
  // قراءة قسم overview مع حماية افتراضية في حال لم تضفه للقاموس بعد
  const t = dict.overview || {};

  const stats: StatCardProps[] = [
    {
      title: t.activeRequests || 'ACTIVE REQUESTS',
      value: '08',
      footerHighlight: '2 of 8',
      footerText: t.awaitingAssignment || 'Awaiting Assignment',
    },
    {
      title: t.pendingOffers || 'PENDING OFFERS',
      value: '012',
      footerHighlight: '+3',
      footerText: t.newSinceYesterday || 'New Since Yesterday',
    },
    {
      title: t.totalSpent || 'TOTAL SPENT',
      value: '€42,850',
      footerHighlight: '€12,450',
      footerText: t.thisMonth || 'This Month',
    },
    {
      title: t.completedTrips || 'COMPLETED TRIPS',
      value: '0142',
      footerHighlight: '4,320',
      footerText: 'Km',
    },
  ];

  return (
    <section className={styles.overviewHeader_container}>
      <div>
        <div className={styles.overviewHeader_topMeta}>
          <span>Oct 26, 2023 . 08:00 AM</span>
          <span className={styles.overviewHeader_verifiedBadge}>
            {t.verified || 'VERIFIED'} <Icon name="BadgeCheck" className="w-3.5 h-3.5" />
          </span>
        </div>

        <h1 className={styles.overviewHeader_mainTitle}>{t.greeting || 'Guten Morgen'}</h1>

        <p className={styles.overviewHeader_subtitle}>
          {t.youHave || 'You have'}{' '}
          <span className={styles.overviewHeader_highlightActive}>
            8 {t.active || 'active'}
          </span>{' '}
          {t.requestsAnd || 'requests and'}{' '}
          <span className={styles.overviewHeader_highlightOffers}>
            12 {t.offers || 'offers'}
          </span>{' '}
          {t.awaitingReview || 'awaiting your review'}
        </p>
      </div>

      <div className={styles.overviewHeader_statsFlexWrapper}>
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};