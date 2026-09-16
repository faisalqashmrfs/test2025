// apps/driver/app/[locale]/trips/page.tsx

import React from 'react';

export default function TripsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Trips</h1>
        <p className="text-sm text-gray-500 mt-1">
          View and manage your past and upcoming driving trips.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
        <p className="text-gray-500">No trips recorded yet.</p>
      </div>
    </div>
  );
}