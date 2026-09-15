// apps/driver/app/[locale]/support/page.tsx

import React from 'react';

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Support</h1>
        <p className="text-sm text-gray-500 mt-1">
          Get in touch with our help desk, view FAQs, and submit reports for any issues.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
        <p className="text-gray-500">No support tickets or inquiries created yet.</p>
      </div>
    </div>
  );
}