// apps/company/app/[locale]/trip-requests/new/page.tsx

import React from 'react';
import { NewTripHeader } from './_components/NewTripHeader';
import { LocationDetailsSection } from './_components/LocationDetailsSection/LocationDetailsSection';
import { RouteAndVerificationSection } from './_components/RouteAndVerificationSection/RouteAndVerificationSection';
import { VehicleSection } from './_components/VehicleSection/VehicleSection';
import { PhotoAndDriverSection } from './_components/PhotoAndDriverSection/PhotoAndDriverSection';
import TripTypeSection from './_components/TripTypeSection/TripTypeSection';



export default async function NewTripRequestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  
  const { locale } = await params;

  return (
    <main>
      <NewTripHeader locale={locale} />
      <TripTypeSection locale={locale} />
      <LocationDetailsSection locale={locale} />
      <RouteAndVerificationSection locale={locale} />
      <VehicleSection locale={locale} />
      <PhotoAndDriverSection locale={locale} />
    </main>
  );
}