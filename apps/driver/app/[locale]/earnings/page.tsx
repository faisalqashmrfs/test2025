// apps/driver/app/[locale]/earnings/page.tsx

import React from 'react';

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
        <p className="text-sm text-gray-500 mt-1">
          Track your daily, weekly, and monthly revenues and financial summaries.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
        <p className="text-gray-500">No earnings data available for this period.</p>
      </div>
    </div>
  );
}