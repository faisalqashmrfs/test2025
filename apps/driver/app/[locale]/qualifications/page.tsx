// apps/driver/app/[locale]/qualifications/page.tsx

import React from 'react';

export default function QualificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Qualifications</h1>
        <p className="text-sm text-gray-500 mt-1">
          Review your required documents, licenses, and certification statuses.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
        <p className="text-gray-500">No qualification documents uploaded yet.</p>
      </div>
    </div>
  );
}