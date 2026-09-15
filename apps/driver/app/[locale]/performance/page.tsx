// apps/driver/app/[locale]/performance/page.tsx

import React from 'react';

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Performance</h1>
        <p className="text-sm text-gray-500 mt-1">
          Monitor your rating, acceptance rate, and overall driving metrics.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
        <p className="text-gray-500">No performance metrics available yet.</p>
      </div>
    </div>
  );
}