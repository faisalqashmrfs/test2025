// apps/driver/app/[locale]/my-team/page.tsx

import React from 'react';

export default function MyTeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Team</h1>
        <p className="text-sm text-gray-500 mt-1">
          View your team members, colleagues, and group connections.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
        <p className="text-gray-500">No team members assigned yet.</p>
      </div>
    </div>
  );
}