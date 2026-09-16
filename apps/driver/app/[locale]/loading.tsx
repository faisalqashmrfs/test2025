// apps/driver/app/[locale]/loading.tsx

import React from 'react';

export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* شريط التحميل العلوي (Active Job Banner Skeleton) */}
      <div className="h-14 bg-gray-200 rounded-xl w-full"></div>

      {/* الترحيب وعنوان الصفحة */}
      <div className="space-y-2">
        <div className="h-8 bg-gray-200 rounded-md w-72"></div>
        <div className="h-4 bg-gray-200 rounded-md w-96"></div>
      </div>

      {/* شبكة الإحصائيات الأربعة (Trips, Wallet, Performance, Account) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 h-44 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 h-44 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 h-44 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 h-44 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>

      {/* قسم الرسم البياني للأرباح (Earnings Chart Skeleton) */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 h-64 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-32"></div>
        <div className="h-40 bg-gray-200 rounded-lg w-full"></div>
      </div>
    </div>
  );
}