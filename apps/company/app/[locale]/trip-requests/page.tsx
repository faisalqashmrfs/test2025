// apps/company/app/[locale]/trip-requests/page.tsx

import React from 'react';
import { TripRequestsHeader } from '../_components/TripRequestsHeader/TripRequestsHeader';
import { TripRequestsTable } from '../_components/TripRequestsTable/TripRequestsTable';

interface TripRequestsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function TripRequestsPage({ params }: TripRequestsPageProps) {
  const { locale } = await params;

  return (
    <div style={{ padding: '1.5rem' }}>
      <TripRequestsHeader locale={locale} />
      <TripRequestsTable locale={locale} />
    </div>
  );
}