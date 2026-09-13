// apps/company/app/[locale]/driver-map/_components/DriverMapSection/DriverMapSection.tsx
'use client';

import React, { useState } from 'react';
import styles from './DriverMapSection.module.css';

interface DriverMapSectionProps {
  locale?: string;
}

export const DriverMapSection: React.FC<DriverMapSectionProps> = () => {
  const [pickupCity, setPickupCity] = useState('');
  const [zoneDistance, setZoneDistance] = useState('');
  const [driverState, setDriverState] = useState('');

  return (
    <div className={styles['xcar-driver-map-container']}>
      {/* Top Notification / Context Banner */}
      <div className={styles['xcar-top-banner']}>
        <div className={styles['xcar-banner-left']}>
          <span className={styles['xcar-status-dot']} />
          <span className={styles['xcar-banner-label']}>To Start</span>
          <span className={styles['xcar-banner-time']}>In 2days, 30min</span>
          <span className={styles['xcar-banner-divider']}>|</span>
          <span className={styles['xcar-banner-route']}>
            <strong>Berlin</strong> → <strong>Munich</strong>
          </span>
          <span className={styles['xcar-banner-divider']}>|</span>
          <span className={styles['xcar-banner-vehicle']}>
            Vehicle: <strong>Porsche 911 GT3</strong>
          </span>
        </div>
        <button className={styles['xcar-view-details-btn']}>
          VIEW DETAILS ›
        </button>
      </div>

      {/* Main Header */}
      <div className={styles['xcar-map-header']}>
        <span className={styles['xcar-date-subtitle']}>Oct 26, 2023 . 08:00 AM</span>
        <h2 className={styles['xcar-page-title']}>Driver Map</h2>
        <p className={styles['xcar-page-desc']}>Real-time driver positioning and thermal availability zones</p>

        {/* Filter Inputs Bar */}
        <div className={styles['xcar-filters-grid']}>
          <div className={styles['xcar-input-wrapper']}>
            <input
              type="text"
              placeholder="Pickup City"
              value={pickupCity}
              onChange={(e) => setPickupCity(e.target.value)}
            />
            <span className={styles['xcar-input-icon']}>📍</span>
          </div>

          <div className={styles['xcar-select-wrapper']}>
            <select value={zoneDistance} onChange={(e) => setZoneDistance(e.target.value)}>
              <option value="">Zone Distance</option>
              <option value="5">0-5 KM</option>
              <option value="10">6-10 KM</option>
              <option value="20">11-20 KM</option>
              <option value="50">21-50 KM</option>
            </select>
            <span className={styles['xcar-select-arrow']}>﹀</span>
          </div>

          <div className={styles['xcar-select-wrapper']}>
            <select value={driverState} onChange={(e) => setDriverState(e.target.value)}>
              <option value="">Driver State</option>
              <option value="online">Online</option>
              <option value="active">Active</option>
              <option value="offline">Offline</option>
            </select>
            <span className={styles['xcar-select-arrow']}>﹀</span>
          </div>
        </div>
      </div>

      {/* Map Interactive Viewport */}
      <div className={styles['xcar-map-viewport']}>
        {/* Radar Thermal Concentric Circles */}
        <div className={styles['xcar-radar-background']}>
          <div className={`${styles['xcar-radar-circle']} ${styles['xcar-radar-circle--outer']}`} />
          <div className={`${styles['xcar-radar-circle']} ${styles['xcar-radar-circle--mid-outer']}`} />
          <div className={`${styles['xcar-radar-circle']} ${styles['xcar-radar-circle--mid-inner']}`} />
          <div className={`${styles['xcar-radar-circle']} ${styles['xcar-radar-circle--center']}`} />
        </div>

        {/* Floating Map Controls (Top Right) */}
        <div className={styles['xcar-map-controls']}>
          <button title="Focus Target">🎯</button>
          <button title="Fullscreen">⛶</button>
        </div>

        {/* Top-Left Floating Panel: Drivers Found & Distance Breakdowns */}
        <div className={styles['xcar-drivers-panel']}>
          <div className={styles['xcar-panel-header']}>
            <span className={styles['xcar-drivers-count']}>12</span>
            <span className={styles['xcar-panel-title']}>Drivers Found</span>
          </div>

          <div className={styles['xcar-available-sub']}>
            <span className={styles['xcar-green-dot']} /> 07 Available Now
          </div>

          <div className={styles['xcar-distance-bars']}>
            {/* 0-5 KM Bar */}
            <div className={styles['xcar-bar-row']}>
              <div className={styles['xcar-bar-label']}>
                <span>0-05 KM</span>
                <strong>03</strong>
              </div>
              <div className={styles['xcar-progress-track']}>
                <div className={`${styles['xcar-progress-fill']} ${styles['xcar-fill--green']}`} style={{ width: '75%' }} />
              </div>
            </div>

            {/* 06-10 KM Bar */}
            <div className={styles['xcar-bar-row']}>
              <div className={styles['xcar-bar-label']}>
                <span>06-10 KM</span>
                <strong>05</strong>
              </div>
              <div className={styles['xcar-progress-track']}>
                <div className={`${styles['xcar-progress-fill']} ${styles['xcar-fill--teal']}`} style={{ width: '90%' }} />
              </div>
            </div>

            {/* 11-20 KM Bar */}
            <div className={styles['xcar-bar-row']}>
              <div className={styles['xcar-bar-label']}>
                <span>11-20 KM</span>
                <strong>04</strong>
              </div>
              <div className={styles['xcar-progress-track']}>
                <div className={`${styles['xcar-progress-fill']} ${styles['xcar-fill--orange']}`} style={{ width: '60%' }} />
              </div>
            </div>

            {/* 21-50 KM Bar */}
            <div className={styles['xcar-bar-row']}>
              <div className={styles['xcar-bar-label']}>
                <span>21-50 KM</span>
                <strong>04</strong>
              </div>
              <div className={styles['xcar-progress-track']}>
                <div className={`${styles['xcar-progress-fill']} ${styles['xcar-fill--red']}`} style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Driver Pins Placed precisely on map */}
        {/* Center Target Marker */}
        <div className={`${styles['xcar-map-pin']} ${styles['xcar-pin--center']}`}>
          <div className={styles['xcar-pin-center-icon']}>📍</div>
        </div>

        {/* Pin AR */}
        <div className={`${styles['xcar-map-pin']} ${styles['xcar-pin--ar']}`}>
          <span>AR</span>
          <span className={`${styles['xcar-pin-status']} ${styles['xcar-status--online']}`} />
        </div>

        {/* Pin MK */}
        <div className={`${styles['xcar-map-pin']} ${styles['xcar-pin--mk']}`}>
          <span>MK</span>
          <span className={`${styles['xcar-pin-status']} ${styles['xcar-status--online']}`} />
        </div>

        {/* Pin SL */}
        <div className={`${styles['xcar-map-pin']} ${styles['xcar-pin--sl']}`}>
          <span>SL</span>
          <span className={`${styles['xcar-pin-status']} ${styles['xcar-status--active']}`} />
        </div>

        {/* Pin ID */}
        <div className={`${styles['xcar-map-pin']} ${styles['xcar-pin--id']}`}>
          <span>1D</span>
        </div>

        {/* Bottom-Left Floating Panel: Driver Status Legend */}
        <div className={styles['xcar-status-legend-panel']}>
          <span className={styles['xcar-legend-title']}>Driver STATUS</span>
          <div className={styles['xcar-legend-items']}>
            <div className={styles['xcar-legend-item']}>
              <span className={`${styles['xcar-legend-dot']} ${styles['xcar-dot--online']}`} />
              Online
            </div>
            <div className={styles['xcar-legend-item']}>
              <span className={`${styles['xcar-legend-dot']} ${styles['xcar-dot--active']}`} />
              Active
            </div>
            <div className={styles['xcar-legend-item']}>
              <span className={`${styles['xcar-legend-dot']} ${styles['xcar-dot--offline']}`} />
              Offline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverMapSection;