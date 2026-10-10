import React from 'react';
import styles from './RouteIntelligenceAndHotspots.module.css';

// ===== بيانات Route Intelligence =====
const ROUTES = [
  { from: 'Hamburg', to: 'Stuttgart', trips: 12, revenue: '€1,420' },
  { from: 'Hamburg', to: 'Stuttgart', trips: 12, revenue: '€1,420' },
  { from: 'Hamburg', to: 'Stuttgart', trips: 12, revenue: '€1,420' },
  { from: 'Hamburg', to: 'Stuttgart', trips: 12, revenue: '€1,420' },
  { from: 'Hamburg', to: 'Stuttgart', trips: 12, revenue: '€1,420' },
];

// ===== بيانات City Hotspots =====
const PICKUP_CITIES = [
  { city: 'Hamburg', trips: 12 },
  { city: 'Hamburg', trips: 12 },
  { city: 'Hamburg', trips: 12 },
  { city: 'Hamburg', trips: 12 },
  { city: 'Hamburg', trips: 12 },
];

const DELIVERY_CITIES = [
  { city: 'Hamburg', trips: 12 },
  { city: 'Hamburg', trips: 12 },
  { city: 'Hamburg', trips: 12 },
  { city: 'Hamburg', trips: 12 },
  { city: 'Hamburg', trips: 12 },
];

export default function RouteIntelligenceAndHotspots() {
  return (
    <div className={styles.container}>
      {/* ===================== Route Intelligence ===================== */}
      <div className={styles.cardBox}>
        <div className={styles.cardTitle}>Route Intelligence</div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>From</th>
              <th>To</th>
              <th>Trips</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {ROUTES.map((route, idx) => (
              <tr key={idx}>
                <td>{String(idx + 1).padStart(2, '0')}</td>
                <td>{route.from}</td>
                <td>{route.to}</td>
                <td>{route.trips}</td>
                <td className={styles.revenueCell}>{route.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===================== City Hotspots ===================== */}
      <div className={styles.cardBox}>
        <div className={styles.cardTitle}>City Hotspots:</div>

        <div className={styles.hotspotsGrid}>
          {/* عمود Pickup Cities */}
          <div className={styles.hotspotsColumn}>
            <div className={styles.hotspotsColumnTitle}>Pickup Cites:</div>

            {PICKUP_CITIES.map((item, idx) => (
              <div key={idx} className={styles.hotspotRow}>
                <span className={styles.hotspotNumber}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className={styles.hotspotCity}>{item.city}</span>
                <span className={styles.hotspotTrips}>{item.trips} Trips</span>
              </div>
            ))}
          </div>

          {/* عمود Delivery Cities */}
          <div className={styles.hotspotsColumn}>
            <div className={styles.hotspotsColumnTitle}>Delivery Cites:</div>

            {DELIVERY_CITIES.map((item, idx) => (
              <div key={idx} className={styles.hotspotRow}>
                <span className={styles.hotspotNumber}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className={styles.hotspotCity}>{item.city}</span>
                <span className={styles.hotspotTrips}>{item.trips} Trips</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}