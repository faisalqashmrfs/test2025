'use client';

import React, { useState } from 'react';
import AvailableOffersHeader from './_components/AvailableOffersHeader';
import OfferCardsGrid from './OfferCardsGrid';
import OfferTableView from './_components/OfferTableView';
import TripSidebarHeader from './_components/TripSidebarHeader';
import MapView from './_components/MapView';

interface PageProps {
  params: {
    locale: string;
  };
}

export default function TripsPage({ params }: PageProps) {
  const { locale } = params;

  // حالة التحكم بإظهار وإخفاء السايدبار
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // حالة التحكم بنمط العرض: 'cards' أو 'table' أو 'map'
  const [viewMode, setViewMode] = useState<'cards' | 'table' | 'map'>('cards');

  return (
    <main>
      <div>
        {/* ترويسة العروض مع تمرير حالة العرض ودالة التغيير */}
        <AvailableOffersHeader 
          locale={locale} 
          onOpenSidebar={() => setIsSidebarOpen(true)}
          currentViewMode={viewMode}
          onViewModeChange={(mode) => setViewMode(mode)}
        />

        {/* عرض القسم المناسب بناءً على اختيار المستخدم */}
        {viewMode === 'cards' && (
          <OfferCardsGrid 
            locale={locale} 
            onViewDetails={() => setIsSidebarOpen(true)} 
          />
        )}

        {viewMode === 'table' && (
          <OfferTableView 
            locale={locale} 
            onViewDetails={() => setIsSidebarOpen(true)} 
          />
        )}

        {viewMode === 'map' && (
          <MapView />
        )}
      </div>

      {/* السايدبار الجانبي */}
      {isSidebarOpen && (
        <TripSidebarHeader 
          onClose={() => setIsSidebarOpen(false)} 
          onViewMap={() => {
            setViewMode('map');      
            setIsSidebarOpen(false);  
          }}
        />
      )}
    </main>
  );
}