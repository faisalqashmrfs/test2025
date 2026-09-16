'use client';

import React, { useState } from 'react';
import AvailableOffersHeader from './_components/AvailableOffersHeader';
import OfferCardsGrid from './OfferCardsGrid';
import TripSidebarHeader from './_components/TripSidebarHeader';

interface PageProps {
  params: {
    locale: string;
  };
}

export default function TripsPage({ params }: PageProps) {
  const { locale } = params;

  // حالة التحكم بإظهار وإخفاء السايدبار
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="">
      <div className="">
        {/* استدعاء القسم الأول (الترويسة والفلاتر) */}
        <AvailableOffersHeader locale={locale} />

        {/* استدعاء القسم الثاني (الكاردات) مع تمرير دالة فتح السايدبار */}
        <OfferCardsGrid 
          locale={locale} 
          onViewDetails={() => setIsSidebarOpen(true)} 
        />
      </div>

      {/* إظهار القسم الأول من السايدبار عند النقر على زر View Details */}
      {isSidebarOpen && (
        <TripSidebarHeader onClose={() => setIsSidebarOpen(false)} />
      )}
    </main>
  );
}