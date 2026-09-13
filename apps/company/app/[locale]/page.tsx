// apps/company/app/[locale]/page.tsx

import React from 'react';
import { OverviewHeader } from './_components/OverviewHeader/OverviewHeader';
import { RecentOffers } from './_components/RecentOffers/RecentOffers';
import { QuickActions } from './_components/QuickActions/QuickActions';
import { RecentActiveTrips } from './_components/RecentActiveTrips/RecentActiveTrips';
import { TripsAnalytics } from './_components/TripsAnalytics/TripsAnalytics';


export default async function OverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // قراءة اللغة من الـ params
  const { locale } = await params;

  return (
    <>
      <OverviewHeader locale={locale} />
      <RecentOffers locale={locale} />
      <QuickActions locale={locale} />
      <RecentActiveTrips locale={locale} />
      <TripsAnalytics locale={locale} />
      
    </>
  );
}