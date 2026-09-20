'use client';

import React from 'react';

interface ActiveTripBarProps {
  status?: string;
  timeRemaining?: string;
  route?: string;
  vehicle?: string;
  onViewDetails?: () => void;
}

export default function ActiveTripBar({
  status = "To Start",
  timeRemaining = "In 2days, 30min",
  route = "Berlin → Munich",
  vehicle = "Porsche 911 GT3",
  onViewDetails
}: ActiveTripBarProps) {
  return (
    <div className="w-full bg-[#131c36] text-white px-4 py-3 rounded-xl mb-4 flex flex-wrap items-center justify-between gap-4 border border-[#1e293b] shadow-md">
      <div className="flex items-center gap-3 text-sm flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span>
          <span className="font-bold">{status}</span>
          <span className="text-gray-400">{timeRemaining}</span>
        </div>
        <span className="text-gray-600 hidden sm:inline">|</span>
        <span className="font-semibold">{route}</span>
        <span className="text-gray-600 hidden sm:inline">|</span>
        <span className="text-gray-300">Vehicle: <span className="text-white font-medium">{vehicle}</span></span>
      </div>

      <button 
        onClick={onViewDetails}
        className="px-4 py-1.5 bg-white text-gray-900 hover:bg-gray-100 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shadow-sm"
      >
        <span>VEIW DETAILS</span>
        <span>&gt;</span>
      </button>
    </div>
  );
}