'use client';

import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import styles from './EarningsTableSection.module.css';
import OfferDetailsCard from './OfferDetailsCard';

const SafeSlidersHorizontal = SlidersHorizontal as unknown as React.FC<any>;

const MOCK_EARNINGS_DATA = [
  { id: 'XCD -88305', company: 'Mercedes', pickup: 'Alsdorfer Str, Hamburg\nOct 26, 08:00', delivery: 'Königstraße, Stuttgart\nOct 26, 20:00', vehicle: 'BMW M4 Competition\nSport Car', price: '€890.00', status: 'PAID' },
  { id: 'XCD -46271', company: 'Audi', pickup: 'Maximilianstrasse, Munich\nNov 12, 09:30', delivery: 'Friedrichstrasse, Berlin\nNov 12, 18:00', vehicle: 'Audi RS7\nLuxury Sedan', price: '€1,200.00', status: 'PENDING' },
  { id: 'XCD -88305', company: 'Mercedes', pickup: 'Alsdorfer Str, Hamburg\nOct 26, 08:00', delivery: 'Königstraße, Stuttgart\nOct 26, 20:00', vehicle: 'BMW M4 Competition\nSport Car', price: '€890.00', status: 'CANCELLED' },
  { id: 'XCC -77219', company: 'Audi', pickup: 'Kurfürstendamm, Berlin', delivery: 'Mönckebergstraße, Hamburg', vehicle: 'Audi RS7\nLuxury Sedan', price: '€1,150.00', status: 'PAID' },
];

export default function EarningsTableSection() {
  const [activeTab, setActiveTab] = useState('ALL');
  // حالة لتخزين رقم السطر المفتوح حالياً (null يعني لا يوجد سطر مفتوح)
  const [expandedRowIdx, setExpandedRowIdx] = useState<number | null>(null);

  const toggleRow = (idx: number) => {
    if (expandedRowIdx === idx) {
      setExpandedRowIdx(null); // إذا كان مفتوحاً نقوم بإغلاقه
    } else {
      setExpandedRowIdx(idx); // فتحه للسطر المحدد
    }
  };

  return (
    <div className={styles.container}>
      {/* التبويبات العلوية */}
      <div className={styles.tabsRow}>
        {['ALL', 'PAID', 'PENDING', 'UNDER NEGOTIATION', 'CANCELLED', 'OVERDUE'].map((tab) => (
          <button
            key={tab}
            className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* حقول الفلترة والبحث */}
      <div className={styles.filtersSection}>
        <div className={styles.filtersRowTop}>
          <input type="text" placeholder="Pickup City 📍" className={styles.filterInput} />
          <input type="text" placeholder="Delivery City 🏳️" className={styles.filterInput} />
          <input type="text" placeholder="Pickup Date 📅" className={styles.filterInput} />
          <input type="text" placeholder="Delivery Date 📅" className={styles.filterInput} />
        </div>
        <div className={styles.filtersRowBottom}>
          <div className={styles.selectGroup}>
            <select className={styles.selectInput}>
              <option>Company</option>
            </select>
            <select className={styles.selectInput}>
              <option>Transport type</option>
            </select>
          </div>
          <div className={styles.sortClearWrapper}>
            <span className={styles.sortText}>
              <SafeSlidersHorizontal className="w-4 h-4" /> Sort by: Date
            </span>
            <button className={styles.clearAllBtn}>Clear all</button>
          </div>
        </div>
      </div>

      {/* جدول البيانات الرئيسي */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Offer ID</th>
            <th>Company</th>
            <th>Pickup Location & Date</th>
            <th>Delivery Location & Date</th>
            <th>Vehicle Model & Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_EARNINGS_DATA.map((row, idx) => {
            const isExpanded = expandedRowIdx === idx;
            return (
              <React.Fragment key={idx}>
                <tr>
                  <td style={{ fontWeight: 700 }}>{row.id}</td>
                  <td>{row.company}</td>
                  <td style={{ whiteSpace: 'pre-line' }}>{row.pickup}</td>
                  <td style={{ whiteSpace: 'pre-line' }}>{row.delivery}</td>
                  <td style={{ whiteSpace: 'pre-line' }}>{row.vehicle}</td>
                  <td style={{ fontWeight: 700 }}>{row.price}</td>
                  <td>
                    <span className={
                      row.status === 'PAID' ? styles.badgePaid :
                      row.status === 'PENDING' ? styles.badgePending : styles.badgeCancelled
                    }>
                      {row.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      className={styles.viewDetailsLink} 
                      onClick={() => toggleRow(idx)}
                      style={isExpanded ? { color: '#f87171' } : {}}
                    >
                      {isExpanded ? 'Close' : 'View Details'}
                    </button>
                  </td>
                </tr>

                {/* إظهار مكون التفاصيل أسفل السطر عند الضغط عليه */}
                {isExpanded && (
                  <tr>
                    <td colSpan={8} style={{ padding: '0 1rem 1rem 1rem', backgroundColor: '#2b384e' }}>
                      <OfferDetailsCard />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}