import React from 'react';
import StatisticsOverview from './_components/StatisticsOverview';
import NetEarningsAnalysis from './_components/NetEarningsAnalysis';
import PerformanceAndTrips from './_components/PerformanceAndTrips';
import RouteIntelligenceAndHotspots from './_components/RouteIntelligenceAndHotspots';


export default function PerformancePage() {
  return (
    <div>
      <StatisticsOverview />
      <NetEarningsAnalysis />
       <PerformanceAndTrips />
       <RouteIntelligenceAndHotspots/>
  
    </div>
  );
}