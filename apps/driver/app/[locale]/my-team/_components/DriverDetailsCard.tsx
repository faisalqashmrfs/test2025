'use client';

import React from 'react';
import { Check, X, Download } from 'lucide-react';
import styles from './DriverDetailsCard.module.css';

const SafeCheck = Check as unknown as React.FC<any>;
const SafeX = X as unknown as React.FC<any>;
const SafeDownload = Download as unknown as React.FC<any>;

interface Trip {
  id: string;
  pickupLocation: string;
  pickupDateTime: string;
  deliveryLocation: string;
  deliveryDateTime: string;
  distance: string;
  state: 'Completed' | 'In Progress' | 'Scheduled' | 'Cancelled';
}

interface DriverDetailsProps {
  driver: {
    name: string;
    email: string;
    joinedDate: string;
    joinedTime: string;
    state: string;
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
    trips?: Trip[];
  };
  onClose?: () => void;
  onExport?: () => void;
  onSuspense?: () => void;
  onDelete?: () => void;
}

export default function DriverDetailsCard({
  driver,
  onClose,
  onExport,
  onSuspense,
  onDelete,
}: DriverDetailsProps) {
  const getTripStateColor = (state: Trip['state']) => {
    switch (state) {
      case 'Completed':
        return '#34d399';
      case 'In Progress':
        return '#60a5fa';
      case 'Scheduled':
        return '#fbbf24';
      case 'Cancelled':
        return '#f87171';
      default:
        return '#ffffff';
    }
  };

  return (
    <div className={styles.container}>
      {/* رأس البطاقة */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {driver.avatar ? (
            <img src={driver.avatar} alt={driver.name} className={styles.avatar} />
          ) : (
            <div className={styles.avatarInitials}>{driver.initials || 'DV'}</div>
          )}
          <div>
            <div className={styles.headerName}>{driver.name}</div>
            <div className={styles.headerEmail}>{driver.email}</div>
          </div>
        </div>
        <div className={styles.headerDate}>
          <span>{driver.joinedDate}</span>
          <span className={styles.headerDateMain}>{driver.joinedTime}</span>
        </div>
        <span className={`${styles.stateBadge} ${styles.stateVerified}`}>{driver.state}</span>
        {onClose && (
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        )}
      </div>

      {/* شبكة المحتوى (قسمين) */}
      <div className={styles.grid}>
        {/* العمود الأيسر: البيانات الشخصية والرحلات السابقة */}
        <div className={styles.leftColumn}>
          <div className={styles.cardBox}>
            <div className={styles.cardTitle}>Personal Details:</div>
            <div className={styles.personalInfoList}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Name:</span>
                <span className={styles.infoValue}>{driver.name}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Email:</span>
                <span className={styles.infoValue}>{driver.email}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Phone Number:</span>
                <span className={styles.infoValue}>{driver.phone || '+47 12-345-6789'}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Address:</span>
                <span className={styles.infoValue}>{driver.address || 'Lorem Ipsum'}</span>
              </div>
            </div>
          </div>

          <div className={styles.cardBox}>
            <div className={styles.cardTitle}>Last Trips:</div>
            <table className={styles.tripsTable}>
              <thead>
                <tr>
                  <th>Trip ID</th>
                  <th>Pickup Location & Date</th>
                  <th>Delivery Location & Date</th>
                  <th>Distance</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {driver.trips && driver.trips.length > 0 ? (
                  driver.trips.map((trip, idx) => (
                    <tr key={idx}>
                      <td>{trip.id}</td>
                      <td>
                        {trip.pickupLocation}
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>
                          {trip.pickupDateTime}
                        </span>
                      </td>
                      <td>
                        {trip.deliveryLocation}
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>
                          {trip.deliveryDateTime}
                        </span>
                      </td>
                      <td>{trip.distance}</td>
                      <td style={{ color: getTripStateColor(trip.state), fontWeight: 700 }}>
                        {trip.state}
                      </td>
                    </tr>
                  ))
                ) : (
                  <>
                    <tr>
                      <td>XCD -88305</td>
                      <td>
                        Alsterdorfer Str, Hamburg
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>OCT, 12, 2026 . 08:12 AM</span>
                      </td>
                      <td>
                        Königstraße, Stuttgart
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>OCT, 14, 2026 . 10:24 AM</span>
                      </td>
                      <td>420 KM</td>
                      <td style={{ color: '#34d399', fontWeight: 700 }}>Completed</td>
                    </tr>
                    <tr>
                      <td>XCC -99214</td>
                      <td>
                        Bahnhofstraße, Berlin
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>NOV, 03, 2026 . 09:45 AM</span>
                      </td>
                      <td>
                        Marienplatz, Munich
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>NOV, 05, 2026 . 01:30 PM</span>
                      </td>
                      <td>350 KM</td>
                      <td style={{ color: '#60a5fa', fontWeight: 700 }}>In Progress</td>
                    </tr>
                    <tr>
                      <td>XCD -10765</td>
                      <td>
                        Kurfürstendamm, Berlin
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>DEC, 01, 2026 . 07:15 AM</span>
                      </td>
                      <td>
                        Neumarkt, Dresden
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>DEC, 03, 2026 . 11:50 AM</span>
                      </td>
                      <td>280 KM</td>
                      <td style={{ color: '#fbbf24', fontWeight: 700 }}>Scheduled</td>
                    </tr>
                    <tr>
                      <td>XCD -45789</td>
                      <td>
                        Hauptstraße, Frankfurt
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>JAN, 10, 2027 . 06:00 AM</span>
                      </td>
                      <td>
                        Altstadt, Cologne
                        <br />
                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>JAN, 12, 2027 . 02:10 PM</span>
                      </td>
                      <td>310 KM</td>
                      <td style={{ color: '#f87171', fontWeight: 700 }}>Cancelled</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* العمود الأيمن: مقاييس الأداء وحالة الحساب */}
        <div className={styles.rightColumn}>
          <div className={styles.cardBox}>
            <div className={styles.cardTitle}>Performance Metrics:</div>
            <div className={styles.metricsList}>
              <div className={styles.metricRow}>
                <span className={styles.infoLabel}>COMPLETION RATE</span>
                <span className={styles.metricValueVerified}>
                  {driver.metrics?.completion || '98%'}
                </span>
              </div>
              <div className={styles.metricRow}>
                <span className={styles.infoLabel}>CANCELLATION RATE</span>
                <span className={styles.metricValueWarning}>
                  {driver.metrics?.cancellation || '2%'}
                </span>
              </div>
              <div className={styles.metricRow}>
                <span className={styles.infoLabel}>PICKUP ON-TIME</span>
                <span className={styles.metricValueVerified}>
                  {driver.metrics?.pickupOnTime || '95%'}
                </span>
              </div>
              <div className={styles.metricRow}>
                <span className={styles.infoLabel}>DELIVERY ON-TIME</span>
                <span className={styles.metricValueVerified}>
                  {driver.metrics?.deliveryOnTime || '97%'}
                </span>
              </div>
              <div className={styles.metricRow}>
                <span className={styles.infoLabel}>RATING</span>
                <span className={styles.infoValue}>{driver.metrics?.rating || '4.5/5'}</span>
              </div>
            </div>
          </div>

          <div className={styles.cardBox}>
            <div
              className={styles.cardTitle}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Account State</span>
              <span
                style={{
                  backgroundColor: '#064e3b',
                  color: '#34d399',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '10px',
                }}
              >
                VERIFIED
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '1rem' }}>
              Joined at: {driver.joinedAtAccount || 'OCT, 12, 2020'}
            </div>
            <div className={styles.docList}>
              <div className={styles.docRow}>
                <span>Identity Document</span>
                {driver.documents?.identity !== false ? (
                  <SafeCheck size={16} className={styles.docValid} />
                ) : (
                  <SafeX size={16} className={styles.docInvalid} />
                )}
              </div>
              <div className={styles.docRow}>
                <span>Driving License</span>
                {driver.documents?.license !== false ? (
                  <SafeCheck size={16} className={styles.docValid} />
                ) : (
                  <SafeX size={16} className={styles.docInvalid} />
                )}
              </div>
              <div className={styles.docRow}>
                <span>Vehicle Insurance</span>
                {driver.documents?.insurance ? (
                  <SafeCheck size={16} className={styles.docValid} />
                ) : (
                  <SafeX size={16} className={styles.docInvalid} />
                )}
              </div>
              <div className={styles.docRow}>
                <span>Conduct Document</span>
                {driver.documents?.conduct !== false ? (
                  <SafeCheck size={16} className={styles.docValid} />
                ) : (
                  <SafeX size={16} className={styles.docInvalid} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الأزرار السفلية */}
      <div className={styles.actionsFooter}>
        <button className={styles.exportBtn} onClick={onExport}>
          <SafeDownload size={14} /> Export Details
        </button>
        <div className={styles.actionButtonsRight}>
          <button className={styles.suspenseBtn} onClick={onSuspense}>
            SUSPENSE
          </button>
          <button className={styles.deleteBtn} onClick={onDelete}>
            DELETE DRIVER
          </button>
        </div>
      </div>
    </div>
  );
}