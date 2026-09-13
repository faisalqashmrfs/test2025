'use client';

import React, { useState } from 'react';
import styles from './TripProtocolsReview.module.css';
import { HeaderOverview } from './_components/HeaderOverview';
import { SignaturesSection } from './_components/SignaturesSection';
import { VehicleInfoSection } from './_components/VehicleInfoSection';
import { VehicleGallerySection } from './_components/VehicleGallerySection';
import { DamageReportSection } from './_components/DamageReportSection';
import { ActionFooter } from './_components/ActionFooter';
import { TripProtocolData } from './_types/types';

// بيانات افتراضية تعاكي ما تم استلامه من التصميم
const mockData: TripProtocolData = {
  id: 'XM-88421',
  headerDate: 'Oct 26, 2023 . 08:00 AM',
  tripId: '#XM-88421',
  pickupLocation: 'Alsterdorfer Str, Hamburg',
  pickupDate: 'Oct 28, 09:00 PM',
  deliveryLocation: 'Königstraße, Stuttgart',
  deliveryDate: 'May 14, 10:00 AM',
  distance: '580 km',
  duration: '6h 15m',
  driverSignature: {
    name: 'Mr, Klaus Schmidt',
    licenseOrPhone: 'XXXXX - 123',
    locationOrEmail: 'Alsterdorfer Str, Hamburg',
  },
  clientSignature: {
    name: 'sabri othman',
    licenseOrPhone: '+41 123456879',
    locationOrEmail: 'example@email.com',
  },
  vehicleInfo: {
    mileage: '12,450km',
    fuelPercentage: '85%',
    items: [
      'Warning Triangle',
      'Manuals Present',
      'First Aid Kit',
      'Fire Extinguisher',
      'Emergency Blanket',
      'Flashlight',
    ],
    dashboardImgUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  },
  gallery: [
    {
      id: '1',
      title: 'Front Left',
      subtitle: 'Main identification angle, highlights bumper and headlamp integrity.',
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      title: 'Front Left',
      subtitle: 'Main identification angle, highlights bumper and headlamp integrity.',
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      title: 'Front Left',
      subtitle: 'Main identification angle, highlights bumper and headlamp integrity.',
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '4',
      title: 'Front Left',
      subtitle: 'Main identification angle, highlights bumper and headlamp integrity.',
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    },
  ],
  damageReport: {
    title: 'Rear Bumper Scratch',
    place: 'Exterior',
    type: 'Scratch',
    description:
      'Minor surface scratch approximately 5cm in length on the lower right panel. The paint has not been fully penetrated, but the clear coat is compromised. Verified during initial inspection.',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=200&q=80',
    ],
  },
  driverNote:
    'Vehicle was released with 1/4 tank less than reported in initial dispatch. Adjusted mileage verified with hub manager. Rear bumper scratch noted prior to loading.',
};

export default function TripProtocolsReviewPage() {
  const [activeTab, setActiveTab] = useState<'pickup' | 'delivery'>('pickup');

  return (
    <div className={styles.tpr_container}>
      <HeaderOverview
        headerDate={mockData.headerDate}
        tripId={mockData.tripId}
        pickupLocation={mockData.pickupLocation}
        pickupDate={mockData.pickupDate}
        deliveryLocation={mockData.deliveryLocation}
        deliveryDate={mockData.deliveryDate}
        distance={mockData.distance}
        duration={mockData.duration}
      />

      <SignaturesSection
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        driverSignature={mockData.driverSignature}
        clientSignature={mockData.clientSignature}
      />

      <VehicleInfoSection vehicleInfo={mockData.vehicleInfo} />

      <VehicleGallerySection galleryItems={mockData.gallery} />

      <DamageReportSection damageReport={mockData.damageReport} />

      <ActionFooter
        driverNote={mockData.driverNote}
        onConfirm={() => console.log('Confirm Protocols clicked')}
        onExport={() => console.log('Export Protocols clicked')}
        onComplaint={() => console.log('Submit Complaint clicked')}
      />
    </div>
  );
}