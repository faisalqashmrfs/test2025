// apps/driver/app/[locale]/page.tsx
'use client';

import { DraftBanner } from '@xcarbox/ui';
import React from 'react';
import { useRouter } from 'next/navigation';
import { dictionaries, Locale, defaultLocale } from '@xcarbox/i18n';

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
          <DraftBanner
                  statusText={t.draft || 'Draft'}
                  fromLocation="Berlin"
                  toLocation="Munich"
                  vehicleName="Porsche 911 GT3"
                  buttonText={t.completeRequest || 'COMPLETE REQUEST'}
                  onComplete={() => console.log('Complete draft')}
                />
          
        </div>
      </div>
    </div>
  );
}