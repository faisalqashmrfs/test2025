// apps/driver/app/[locale]/preferences/page.tsx

import React from 'react';

export default function PreferencesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Preferences</h1>
        <p className="text-sm text-gray-500 mt-1">
          Customize your application settings, notification channels, and working preferences.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
        <p className="text-gray-500">No custom preferences configured yet.</p>
      </div>
    </div>
  );
}