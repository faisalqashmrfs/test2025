'use client';

import React, { useState } from 'react';
import ActiveTripBar from '../trips/_components/ActiveTripBar';
import EarningsSummaryCards from './_components/EarningsSummaryCards';
import EarningsTableSection from './_components/EarningsTableSection';

interface PageProps {
  params: {
    locale: string;
  };
}

export default function EarningsPage({ params }: PageProps) {
  const { locale } = params;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main style={{ paddingBottom: '3rem' }}>
      {/* الشريط العلوي الخاص بالرحلة الحالية فقط */}
      <div >
        <ActiveTripBar />
      </div>

      {/* محتوى قسم الأرباح والفواتير */}
      <div >
        <EarningsSummaryCards />
        
        {/* جدول الأرباح والفلترة المطابق للفيجما */}
        <EarningsTableSection />
      </div>
    </main>
  );
}