// apps/company/app/[locale]/_components/TripRequestsTable/TripRequestsTable.tsx

'use client';

import React, { useState } from 'react';
import { DataTable, Column, TableStatus, TableActionBtn, RequestDetailsPanel, RequestDetailsData } from '@xcarbox/ui';
import { TripRequestsFilters } from '../TripRequestsFilters/TripRequestsFilters';

export const TripRequestsTable = ({ locale }: { locale: string }) => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);

  // دالة موحدة للتوسيع/الإغلاق عند النقر على أي سطر أو زر
  const handleToggleRow = (id: string) => {
    setExpandedRowId((prevId) => (prevId === id ? null : id));
  };

  // مثال لبيانات مرجعية جاهزة مع التفاصيل لكل عنصر
  const createMockDetails = (id: string, pickup: string, delivery: string): RequestDetailsData => ({
    id,
    postModel: 'Marketplace',
    transportType: 'Carrier',
    pickupLocation: pickup,
    pickupType: 'Company branch',
    pickupDate: 'Dec 12, 2026',
    pickupTime: '07:15 AM',
    deliveryLocation: delivery,
    deliveryType: 'Company branch',
    deliveryDate: 'Dec 12, 2026',
    deliveryTime: '03:00 PM',
    distance: '400 km',
    estDriveTime: '04 hours',
    carsType: 'SUV | Sedan | Sport',
    carModels: 'BMW M4, Audi Q7, Tesla Model S',
    carsAmount: 3,
    carsWeight: '5,650 kg',
    fixableTime: true,
    roundTrip: false,
    multiTrip: false,
    notes: 'No Additional Notes Written',
    driverName: 'Mr. Klaus Schmidt',
    driverEmail: 'Klaus.Schmidt@email.com',
    driverPhone: '+41 123 456 789',
    driverRating: '4.5/5',
    paymentState: 'Payment held in escrow',
    grossAmount: '€1,450.00',
    insurance: '€0.00',
    total: '€1,450.00',
    timeline: [
      { title: 'Start New Request', date: 'Oct 24, 2026 - 14:30 CET', completed: true },
      { title: 'Posted', date: 'Oct 24, 2026 - 48h Inspection Window', completed: true },
      { title: 'Assigned', date: 'Expected arrival: Oct 27, 2026', completed: true },
      { title: 'Start Transit', date: 'Expected arrival: Oct 27, 2026', completed: false },
      { title: 'Delivered', date: 'Expected arrival: Oct 27, 2026', completed: false },
    ],
  });

  const mockRequests = [
    {
      id: '1',
      offerId: 'XCD -88305',
      pickupLocation: 'Alsterdorfer Str, Hamburg',
      pickupDate: 'Oct 26, 08:00',
      deliveryLocation: 'Königstraße, Stuttgart',
      deliveryDate: 'Oct 26, 20:00',
      vehicleModel: 'BMW M4 Competition',
      vehicleType: 'Sport Car',
      transportType: 'Carrier',
      region: 'Bayern',
      state: 'Delivered',
      detailsData: createMockDetails('XCD -88305', 'Alsterdorfer Str, Hamburg', 'Königstraße, Stuttgart'),
    },
    {
      id: '2',
      offerId: 'XCC -45521',
      pickupLocation: 'Beverly Blvd, Los Angeles',
      pickupDate: 'Nov 5, 09:30',
      deliveryLocation: "King's Cross, London",
      deliveryDate: 'Nov 5, 18:45',
      vehicleModel: 'Tesla Model S Plaid',
      vehicleType: 'Electric Sedan',
      transportType: 'Driven',
      region: 'Nordrhein-Westfalen',
      state: 'In Transit',
      detailsData: createMockDetails('XCC -45521', 'Beverly Blvd, Los Angeles', "King's Cross, London"),
    },
    {
      id: '3',
      offerId: 'XCC -67243',
      pickupLocation: 'Via Roma, Milan',
      pickupDate: 'Dec 12, 07:15',
      deliveryLocation: 'Rue de Rivoli, Paris',
      deliveryDate: 'Dec 12, 15:00',
      vehicleModel: 'Audi Q7',
      vehicleType: 'SUV',
      transportType: 'Carrier',
      region: 'Baden-Württemberg',
      state: 'Assigned',
      detailsData: createMockDetails('XCC -67243', 'Via Roma, Milan', 'Rue de Rivoli, Paris'),
    },
  ];

  const columns: Column<(typeof mockRequests)[0]>[] = [
    {
      header: 'Request ID',
      cell: (row) => <span style={{ fontWeight: 700, color: '#ffffff' }}>{row.offerId}</span>,
    },
    {
      header: 'Pickup Location & Date',
      cell: (row) => (
        <div>
          <div style={{ fontWeight: 600, color: '#ffffff' }}>{row.pickupLocation}</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{row.pickupDate}</div>
        </div>
      ),
    },
    {
      header: 'Delivery Location & Date',
      cell: (row) => (
        <div>
          <div style={{ fontWeight: 600, color: '#ffffff' }}>{row.deliveryLocation}</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{row.deliveryDate}</div>
        </div>
      ),
    },
    {
      header: 'Vehicle Model & Type',
      cell: (row) => (
        <div>
          <div style={{ fontWeight: 600, color: '#ffffff' }}>{row.vehicleModel}</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{row.vehicleType}</div>
        </div>
      ),
    },
    { header: 'Transport Type', accessorKey: 'transportType' },
    { header: 'Region', accessorKey: 'region' },
    {
      header: 'State',
      cell: (row) => <TableStatus status={row.state} />,
    },
    {
      header: 'Action',
      cell: (row) => (
        <TableActionBtn
          active={expandedRowId === row.id}
          onClick={(e) => {
            e.stopPropagation(); // منع النقر المزدوج عند الضغط على الزر تحديداً
            handleToggleRow(row.id);
          }}
        >
          {expandedRowId === row.id ? 'CLOSE' : row.state === 'In Transit' ? 'TRACK' : 'VIEW'}
        </TableActionBtn>
      ),
    },
  ];

  return (
    <div style={{ width: '100%', marginTop: '1.5rem' }}>
      <TripRequestsFilters activeTab={activeTab} onTabChange={setActiveTab} />

      <DataTable
        columns={columns}
        data={mockRequests}
        expandedRowId={expandedRowId}
        onRowClick={(row) => handleToggleRow(row.id)} // <--- النقر على السطر بالكامل
        expandedRowRender={(row) => <RequestDetailsPanel data={row.detailsData} />}
      />
    </div>
  );
};