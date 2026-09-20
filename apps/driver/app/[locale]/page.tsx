// apps/driver/app/[locale]/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { dictionaries, Locale, defaultLocale } from '@xcarbox/i18n';
import OverviewContent from './_components/OverviewContent';
import EarningsChart from './_components/EarningsChart';
import RecentActivities from './_components/RecentActivities';
import AvailableOffersHeader from './trips/_components/AvailableOffersHeader';

interface TripRequestsHeaderProps {
  locale: string;
}

export default async function DriverDashboardPage({ locale }: TripRequestsHeaderProps) {

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
    <div>
      {/* ترحيب عام أو عنوان الصفحة */}
      <div>
        <div>
          
                < OverviewContent locale={locale}/>
          
          
        </div>
      </div>
    </div>
  );
}