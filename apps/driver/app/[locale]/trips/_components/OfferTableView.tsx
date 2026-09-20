'use client';

import React from 'react';
import styles from './OfferTableView.module.css';

interface OfferTableViewProps {
  locale: string;
  onViewDetails?: () => void;
}

const tableData = [
  {
    id: 'XCD -88305',
    company: 'Mercedes',
    pickupLocation: 'Alsterdorfer Str, Hamburg',
    pickupDate: 'Oct 26, 08:00',
    deliveryLocation: 'Königstraße, Stuttgart',
    deliveryDate: 'Oct 26, 20:00',
    vehicleModel: 'BMW M4 Competition',
    vehicleType: 'Sport Car',
    distance: '400 Km',
    maxDistance: 'Max: 440 km',
    price: '€890.00',
    status: 'OPEN BID',
  },
  {
    id: 'XCD -46271',
    company: 'Audi',
    pickupLocation: 'Maximilianstrasse, Munich',
    pickupDate: 'Nov 12, 09:30',
    deliveryLocation: 'Friedrichstrasse, Berlin',
    deliveryDate: 'Nov 12, 18:00',
    vehicleModel: 'Audi RS7',
    vehicleType: 'Luxury Sedan',
    distance: '350 Km',
    maxDistance: 'Max: 360 km',
    price: '€1,200.00',
    status: 'BID CLOSED',
  },
  {
    id: 'XCD -55420',
    company: 'Tesla',
    pickupLocation: 'Pike Street, Seattle',
    pickupDate: 'Dec 03, 07:00',
    deliveryLocation: 'Market Street, San Francisco',
    deliveryDate: 'Dec 03, 19:00',
    vehicleModel: 'Tesla Model S Plaid',
    vehicleType: 'Electric',
    distance: '500 Km',
    maxDistance: 'Max: 520 km',
    price: '€1,100.00',
    status: 'OPEN BID',
  },
  {
    id: 'XCC -88305',
    company: 'Mercedes',
    pickupLocation: 'Alsterdorfer Str, Hamburg',
    pickupDate: 'Oct 26, 08:00',
    deliveryLocation: 'Königstraße, Stuttgart',
    deliveryDate: 'Oct 26, 20:00',
    vehicleModel: 'BMW M4 Competition',
    vehicleType: 'Sport Car',
    distance: '400 Km',
    maxDistance: 'Max: 420 km',
    price: '€890.00',
    status: 'OPEN BID',
  },
  {
    id: 'XCD -46271',
    company: 'Audi',
    pickupLocation: 'Maximilianstrasse, Munich',
    pickupDate: 'Nov 12, 09:30',
    deliveryLocation: 'Friedrichstrasse, Berlin',
    deliveryDate: 'Nov 12, 18:00',
    vehicleModel: 'Audi RS7',
    vehicleType: 'Luxury Sedan',
    distance: '350 Km',
    maxDistance: 'Max: 374 km',
    price: '€1,200.00',
    status: 'BID CLOSED',
  },
];

export default function OfferTableView({ onViewDetails }: OfferTableViewProps) {
  return (
    <div className={styles.tableRoot}>
      <div className={styles.tableWrapper}>
        <table className={styles.tableElement}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th className={styles.tableHeaderCell}>Offer ID</th>
              <th className={styles.tableHeaderCell}>Company</th>
              <th className={styles.tableHeaderCell}>Pickup Location & Date</th>
              <th className={styles.tableHeaderCell}>Delivery Location & Date</th>
              <th className={styles.tableHeaderCell}>Vehicle Model & Type</th>
              <th className={styles.tableHeaderCell}>Distance</th>
              <th className={styles.tableHeaderCell}>Price</th>
              <th className={styles.tableHeaderCellRight}>More Info</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className={styles.tableBodyRow}>
                <td className={styles.tableCell}>
                  <div className={styles.cellFlexPrimary}>
                    <span className={styles.cellIcon}>⚡</span>
                    <span>{item.id}</span>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <span className={styles.cellCompany}>{item.company}</span>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.mainText}>{item.pickupLocation}</div>
                  <div className={styles.subText}>{item.pickupDate}</div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.mainText}>{item.deliveryLocation}</div>
                  <div className={styles.subText}>{item.deliveryDate}</div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.mainText}>{item.vehicleModel}</div>
                  <div className={styles.subText}>{item.vehicleType}</div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.mainText}>{item.distance}</div>
                  <div className={styles.subText}>{item.maxDistance}</div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.mainText}>{item.price}</div>
                  <div className={item.status === 'OPEN BID' ? styles.statusOpen : styles.statusClosed}>
                    {item.status}
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <button onClick={onViewDetails} className={styles.viewButton}>
                    <span>VIEW</span>
                    <span>↗</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}