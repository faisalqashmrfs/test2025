'use client';

import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import styles from './MyTeamTable.module.css';
import DriverDetailsCard from './DriverDetailsCard'; // استيراد المكون المنفصل

const SafeSearch = Search as unknown as React.FC<any>;
const SafeSlidersHorizontal = SlidersHorizontal as unknown as React.FC<any>;

// ===== التبويبات =====
const TABS = ['ALL', 'Verified Drivers', 'Unverified Drivers', 'Pending Verification'];

// ===== البيانات =====
interface Driver {
  name: string;
  email: string;
  joinedDate: string;
  joinedTime: string;
  state: 'VERIFIED' | 'PENDING VERIFICATION' | 'UNVERIFIED';
  avatar?: string;
  initials?: string;
  phone?: string;
  address?: string;
  joinedAtAccount?: string;
  metrics?: {
    completion: string;
    cancellation: string;
    pickupOnTime: string;
    deliveryOnTime: string;
    rating: string;
  };
  documents?: {
    identity: boolean;
    license: boolean;
    insurance: boolean;
    conduct: boolean;
  };
}

const DRIVERS: Driver[] = [
  {
    name: 'Marcus Vane',
    email: 'm.vane@lux-logistics.com',
    joinedDate: 'Oct 12, 2023',
    joinedTime: '08:00 AM',
    state: 'VERIFIED',
    avatar: 'https://i.pravatar.cc/100?img=12',
    phone: '+47 12-345-6789',
    address: 'Lorem Ipsum',
    joinedAtAccount: 'OCT, 12, 2020',
  },
  {
    name: 'Sarah Lund',
    email: 's.lund@lux-logistics.com',
    joinedDate: 'Jan 04, 2024',
    joinedTime: '09:00 PM',
    state: 'PENDING VERIFICATION',
    initials: 'SL',
    phone: '+47 98-765-4321',
    address: 'Berlin Strasse 12',
    joinedAtAccount: 'JAN, 04, 2021',
  },
  {
    name: 'David Chen',
    email: 'd.chen@lux-logistics.com',
    joinedDate: 'Feb 15, 2024',
    joinedTime: '12:00 PM',
    state: 'UNVERIFIED',
    avatar: 'https://i.pravatar.cc/100?img=15',
    phone: '+47 55-443-3221',
    address: 'Munich Center',
    joinedAtAccount: 'FEB, 15, 2022',
  },
];

export default function MyTeamTable() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchValue, setSearchValue] = useState('');
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(0); // مفتوح أول صف افتراضياً كمعاينة

  const getStateClass = (state: Driver['state']) => {
    switch (state) {
      case 'VERIFIED':
        return styles.stateVerified;
      case 'PENDING VERIFICATION':
        return styles.statePending;
      case 'UNVERIFIED':
        return styles.stateUnverified;
      default:
        return '';
    }
  };

  const toggleDetails = (idx: number) => {
    setExpandedRowIndex(expandedRowIndex === idx ? null : idx);
  };

  return (
    <div className={styles.container}>
      {/* ===== التبويبات ===== */}
      <div className={styles.tabsRow}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ===== شريط البحث والترتيب ===== */}
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search for driver name"
            className={styles.searchInput}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SafeSearch className={styles.searchIcon} size={18} />
        </div>

        <div className={styles.sortText}>
          Sort by: Date <SafeSlidersHorizontal size={16} />
        </div>
      </div>

      {/* ===== الجدول ===== */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Driver</th>
              <th>Email</th>
              <th>Joined Date &amp; Time</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {DRIVERS.map((driver, idx) => {
              const isExpanded = expandedRowIndex === idx;
              return (
                <React.Fragment key={idx}>
                  <tr>
                    {/* Driver */}
                    <td>
                      <div className={styles.driverCell}>
                        {driver.avatar ? (
                          <img
                            src={driver.avatar}
                            alt={driver.name}
                            className={styles.avatar}
                          />
                        ) : (
                          <div className={styles.avatarInitials}>
                            {driver.initials}
                          </div>
                        )}
                        <span className={styles.driverName}>{driver.name}</span>
                      </div>
                    </td>

                    {/* Email */}
                    <td className={styles.emailCell}>{driver.email}</td>

                    {/* Joined Date */}
                    <td>
                      <div className={styles.dateCell}>
                        <span className={styles.dateMain}>{driver.joinedDate}</span>
                        <span className={styles.dateTime}>{driver.joinedTime}</span>
                      </div>
                    </td>

                    {/* State */}
                    <td>
                      <span
                        className={`${styles.stateBadge} ${getStateClass(driver.state)}`}
                      >
                        {driver.state}
                      </span>
                    </td>

                    {/* Action */}
                    <td>
                      <button
                        className={styles.viewDetailsLink}
                        onClick={() => toggleDetails(idx)}
                      >
                        {isExpanded ? 'Close' : 'View Details'}
                      </button>
                    </td>
                  </tr>

                  {/* ===== الصف المنسدل الذي يعرض المكون المنفصل ===== */}
                  {isExpanded && (
                    <tr>
                      <td colSpan={5} style={{ padding: '1rem', backgroundColor: '#0f172a' }}>
                        <DriverDetailsCard
                          driver={driver}
                          onClose={() => setExpandedRowIndex(null)}
                          onExport={() => alert(`Exporting details for ${driver.name}`)}
                          onSuspense={() => alert(`Suspending ${driver.name}`)}
                          onDelete={() => alert(`Deleting ${driver.name}`)}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}