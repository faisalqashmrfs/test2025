// apps/company/app/[locale]/trip-requests/new/_components/TripTypeSection/TripTypeSection.tsx
'use client';

import React, { useState } from 'react';
import styles from './TripTypeSection.module.css';

interface TripTypeSectionProps {
  locale?: string;
}

const translations: Record<string, any> = {
  de: {
    transportTypeTitle: 'Transportart',
    tripTypeTitle: 'Fahrttyp',
    required: 'erforderlich',
    driven: 'Eigenfahrt',
    carrier: 'Transporter / LKW',
    oneWay: 'Einfache Fahrt',
    roundTrip: 'Hin- und Rückfahrt',
    multiTrip: 'Mehrfachfahrt',
  },
  en: {
    transportTypeTitle: 'Transport Type',
    tripTypeTitle: 'Trip Type',
    required: 'required',
    driven: 'Driven',
    carrier: 'Carrier / LKW',
    oneWay: 'One Way',
    roundTrip: 'Round Trip',
    multiTrip: 'Multi Trip',
  },
  fr: {
    transportTypeTitle: 'Type de Transport',
    tripTypeTitle: 'Type de Trajet',
    required: 'requis',
    driven: 'Conduit',
    carrier: 'Transporteur / LKW',
    oneWay: 'Aller simple',
    roundTrip: 'Aller-retour',
    multiTrip: 'Trajets multiples',
  },
};

export const TripTypeSection: React.FC<TripTypeSectionProps> = ({ locale = 'en' }) => {
  const [transportType, setTransportType] = useState<'driven' | 'carrier'>('driven');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-trip'>('one-way');

  const t = translations[locale] || translations.en;

  return (
    <section className={styles['xcar-trip-type-section']}>
      {/* Transport Type Group */}
      <div className={styles['xcar-trip-type-section__group']}>
        <div className={styles['xcar-trip-type-section__header']}>
          <h2 className={styles['xcar-trip-type-section__title']}>{t.transportTypeTitle}</h2>
          <span className={styles['xcar-trip-type-section__required']}>{t.required}</span>
        </div>
        <div className={styles['xcar-trip-type-section__options-two']}>
          <button
            type="button"
            className={`${styles['xcar-trip-type-section__btn']} ${
              transportType === 'driven' ? styles['xcar-trip-type-section__btn--active'] : ''
            }`}
            onClick={() => setTransportType('driven')}
          >
            {t.driven}
          </button>
          <button
            type="button"
            className={`${styles['xcar-trip-type-section__btn']} ${
              transportType === 'carrier' ? styles['xcar-trip-type-section__btn--active'] : ''
            }`}
            onClick={() => setTransportType('carrier')}
          >
            {t.carrier}
          </button>
        </div>
      </div>

      {/* Trip Type Group */}
      <div className={styles['xcar-trip-type-section__group']}>
        <div className={styles['xcar-trip-type-section__header']}>
          <h2 className={styles['xcar-trip-type-section__title']}>{t.tripTypeTitle}</h2>
          <span className={styles['xcar-trip-type-section__required']}>{t.required}</span>
        </div>
        <div className={styles['xcar-trip-type-section__options-three']}>
          <button
            type="button"
            className={`${styles['xcar-trip-type-section__btn']} ${
              tripType === 'one-way' ? styles['xcar-trip-type-section__btn--active'] : ''
            }`}
            onClick={() => setTripType('one-way')}
          >
            {t.oneWay}
          </button>
          <button
            type="button"
            className={`${styles['xcar-trip-type-section__btn']} ${
              tripType === 'round-trip' ? styles['xcar-trip-type-section__btn--active'] : ''
            }`}
            onClick={() => setTripType('round-trip')}
          >
            {t.roundTrip}
          </button>
          <button
            type="button"
            className={`${styles['xcar-trip-type-section__btn']} ${
              tripType === 'multi-trip' ? styles['xcar-trip-type-section__btn--active'] : ''
            }`}
            onClick={() => setTripType('multi-trip')}
          >
            {t.multiTrip}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TripTypeSection;