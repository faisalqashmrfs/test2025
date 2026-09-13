// apps/company/app/[locale]/_components/RecentActiveTrips/RecentActiveTrips.tsx

'use client';

import React, { useState } from 'react';
import { DataTable, Column, TableStatus, TableActionBtn } from '@xcarbox/ui';
import { dictionaries, Locale, defaultLocale } from '@xcarbox/i18n';
import { Icon } from '../Icon';
// @ts-ignore
import styles from './RecentActiveTrips.module.css';

export interface TripRecord {
  id: string;
  offerId: string;
  driverName: string;
  pickupLocation: string;
  pickupDate: string;
  deliveryLocation: string;
  deliveryDate: string;
  vehicleModel: string;
  vehicleType: string;
  transportType: string;
  state: 'Delivered' | 'In Transit' | 'Assigned' | 'Pending';
  actionType: 'VIEW' | 'TRACK';
}

interface RecentActiveTripsProps {
  locale: string;
}

export const RecentActiveTrips = ({ locale }: RecentActiveTripsProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const validLocale: Locale = (dictionaries as Record<string, unknown>)[locale]
    ? (locale as Locale)
    : defaultLocale;
  const dict = dictionaries[validLocale] as Record<string, any>;
  const t = dict.overview || {};

  // بيانات وهمية تجريبية
  const mockTrips: TripRecord[] = [
    {
      id: '1',
      offerId: 'XCD -88305',
      driverName: 'Spedition Meyer',
      pickupLocation: 'Alsterdorfer Str, Hamburg',
      pickupDate: 'Oct 26, 08:00',
      deliveryLocation: 'Königstraße, Stuttgart',
      deliveryDate: 'Oct 26, 20:00',
      vehicleModel: 'BMW M4 Competition',
      vehicleType: 'Sport Car',
      transportType: 'Carrier',
      state: 'Delivered',
      actionType: 'VIEW',
    },
    {
      id: '2',
      offerId: 'XCC -45521',
      driverName: 'Spedition Meyer',
      pickupLocation: 'Beverly Blvd, Los Angeles',
      pickupDate: 'Nov 5, 09:30',
      deliveryLocation: "King's Cross, London",
      deliveryDate: 'Nov 5, 18:45',
      vehicleModel: 'Tesla Model S Plaid',
      vehicleType: 'Electric Sedan',
      transportType: 'Driven',
      state: 'In Transit',
      actionType: 'TRACK',
    },
    {
      id: '3',
      offerId: 'XCC -67243',
      driverName: 'Spedition Meyer',
      pickupLocation: 'Via Roma, Milan',
      pickupDate: 'Dec 12, 07:15',
      deliveryLocation: 'Rue de Rivoli, Paris',
      deliveryDate: 'Dec 12, 16:00',
      vehicleModel: 'Audi Q7',
      vehicleType: 'SUV',
      transportType: 'Carrier',
      state: 'Assigned',
      actionType: 'VIEW',
    },
    {
      id: '4',
      offerId: 'XCD -99412',
      driverName: 'Spedition Meyer',
      pickupLocation: 'Queen St, Auckland',
      pickupDate: 'Jan 15, 06:00',
      deliveryLocation: 'George St, Sydney',
      deliveryDate: 'Jan 15, 16:00',
      vehicleModel: 'Ford Mustang Mach-E',
      vehicleType: 'Electric SUV',
      transportType: 'Driven',
      state: 'In Transit',
      actionType: 'TRACK',
    },
    {
      id: '5',
      offerId: 'XCC -39087',
      driverName: 'Spedition Meyer',
      pickupLocation: 'Potsdamer Platz, Berlin',
      pickupDate: 'Feb 20, 10:00',
      deliveryLocation: 'Grand Canal, Venice',
      deliveryDate: 'Feb 20, 19:30',
      vehicleModel: 'Lamborghini Huracán EVO',
      vehicleType: 'Luxury Sport Car',
      transportType: 'Carrier',
      state: 'Pending',
      actionType: 'VIEW',
    },
  ];

  const columns: Column<TripRecord>[] = [
    {
      header: t.offerId || 'Offer ID',
      cell: (row) => (
        <div>
          <div className={styles.recentTrips_offerIdMeta}>
            <Icon name="Info" className="w-3 h-3" />
            <Icon name="Zap" className="w-3 h-3" />
          </div>
          <span className={styles.recentTrips_primaryText}>{row.offerId}</span>
        </div>
      ),
    },
    {
      header: t.driverName || 'Driver Name',
      cell: (row) => <span className={styles.recentTrips_primaryText}>{row.driverName}</span>,
    },
    {
      header: t.pickupLocation || 'Pickup Location & Date',
      cell: (row) => (
        <div>
          <span className={styles.recentTrips_primaryText}>{row.pickupLocation}</span>
          <span className={styles.recentTrips_subText}>{row.pickupDate}</span>
        </div>
      ),
    },
    {
      header: t.deliveryLocation || 'Delivery Location & Date',
      cell: (row) => (
        <div>
          <span className={styles.recentTrips_primaryText}>{row.deliveryLocation}</span>
          <span className={styles.recentTrips_subText}>{row.deliveryDate}</span>
        </div>
      ),
    },
    {
      header: t.vehicleModel || 'Vehicle Model & Type',
      cell: (row) => (
        <div>
          <span className={styles.recentTrips_primaryText}>{row.vehicleModel}</span>
          <span className={styles.recentTrips_subText}>{row.vehicleType}</span>
        </div>
      ),
    },
    {
      header: t.transportType || 'Transport Type',
      accessorKey: 'transportType',
    },
    {
      header: t.state || 'State',
      cell: (row) => <TableStatus status={row.state} />,
    },
    {
      header: t.action || 'Action',
      cell: (row) => (
        <TableActionBtn onClick={() => console.log('Action for trip:', row.id)}>
          {row.actionType}
        </TableActionBtn>
      ),
    },
  ];

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // يمكنك استدعاء API هنا لجلب بيانات الصفحة newPage
  };

  return (
    <section className={styles.recentTrips_section}>
      <div className={styles.recentTrips_header}>
        <h2 className={styles.recentTrips_title}>{t.recentActiveTrips || 'Recent ACTIVE Trips'}</h2>
        <a href={`/${locale}/trips`} className={styles.recentTrips_viewAll}>
          {t.viewAll || 'View All'} <Icon name="ExternalLink" className="w-3.5 h-3.5" />
        </a>
      </div>

      <DataTable
        columns={columns}
        data={mockTrips}
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
        totalRecordsText={t.showingTripsText || 'Showing 10 of 42 requests'}
      />
    </section>
  );
};