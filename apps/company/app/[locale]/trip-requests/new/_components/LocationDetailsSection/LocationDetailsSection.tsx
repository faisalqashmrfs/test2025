// apps/company/app/[locale]/trip-requests/new/_components/LocationDetailsSection/LocationDetailsSection.tsx
'use client';

import React, { useState } from 'react';
import styles from './LocationDetailsSection.module.css';

interface LocationFormState {
  location: string;
  locationType: string;
  date: string;
  time: string;
  flexibleTiming: boolean;
}

interface LocationDetailsSectionProps {
  locale?: string;
}

interface LocationCardProps {
  title: string;
  values: LocationFormState;
  onChange: (updated: Partial<LocationFormState>) => void;
  locale: string;
}

const translations: Record<string, any> = {
  de: {
    pickupTitle: 'Abholdetails:',
    deliveryTitle: 'Lieferdetails:',
    locationLabel: 'Standort',
    locationPlaceholder: 'Geben Sie hier den Standort ein',
    selectTypeLabel: 'Wählen Sie den Standorttyp',
    dateTimeLabel: 'Datum & Uhrzeit',
    flexibleTiming: 'Flexible Zeitplanung',
    required: 'erforderlich',
    types: {
      private_home: 'Privathaushalt',
      company_branch: 'Firma / Filiale',
      warehouse: 'Lagerhaus / Import-Export',
      workshop: 'Werkstatt / Servicezentrum',
      other: 'Sonstige',
    },
  },
  en: {
    pickupTitle: 'Pickup Details:',
    deliveryTitle: 'Delivery Details:',
    locationLabel: 'Location',
    locationPlaceholder: 'Write here the location',
    selectTypeLabel: 'Select One of Location Type',
    dateTimeLabel: 'Date & Time',
    flexibleTiming: 'Flexible Timing',
    required: 'required',
    types: {
      private_home: 'Private Home',
      company_branch: 'Company / Company Branch',
      warehouse: 'Warehouse / Import or Export',
      workshop: 'Workshop / Service Center',
      other: 'Other',
    },
  },
  fr: {
    pickupTitle: 'Détails du retrait :',
    deliveryTitle: 'Détails de la livraison :',
    locationLabel: 'Emplacement',
    locationPlaceholder: "Écrivez l'emplacement ici",
    selectTypeLabel: "Sélectionnez un type d'emplacement",
    dateTimeLabel: 'Date et heure',
    flexibleTiming: 'Horaires flexibles',
    required: 'requis',
    types: {
      private_home: 'Domicile privé',
      company_branch: 'Entreprise / Filiale',
      warehouse: 'Entrepôt / Importation ou Exportation',
      workshop: 'Atelier / Centre de service',
      other: 'Autre',
    },
  },
};

const LocationCard: React.FC<LocationCardProps> = ({ title, values, onChange, locale }) => {
  const t = translations[locale] || translations.en;

  const locationTypes = [
    { id: 'private_home', label: t.types.private_home },
    { id: 'company_branch', label: t.types.company_branch },
    { id: 'warehouse', label: t.types.warehouse },
    { id: 'workshop', label: t.types.workshop },
    { id: 'other', label: t.types.other },
  ];

  return (
    <div className={styles['xcar-location-card']}>
      <h3 className={styles['xcar-location-card__title']}>{title}</h3>

      {/* Location Input */}
      <div className={styles['xcar-location-card__field']}>
        <div className={styles['xcar-location-card__label-row']}>
          <label className={styles['xcar-location-card__label']}>{t.locationLabel}</label>
          <span className={styles['xcar-location-card__required']}>{t.required}</span>
        </div>
        <div className={styles['xcar-location-card__input-wrapper']}>
          <input
            type="text"
            className={styles['xcar-location-card__input']}
            placeholder={t.locationPlaceholder}
            value={values.location}
            onChange={(e) => onChange({ location: e.target.value })}
          />
          <span className={styles['xcar-location-card__icon']}>📍</span>
        </div>
      </div>

      {/* Location Type Options */}
      <div className={styles['xcar-location-card__field']}>
        <div className={styles['xcar-location-card__label-row']}>
          <label className={styles['xcar-location-card__label']}>{t.selectTypeLabel}</label>
          <span className={styles['xcar-location-card__required']}>{t.required}</span>
        </div>
        <div className={styles['xcar-location-card__type-grid']}>
          {locationTypes.slice(0, 4).map((type) => (
            <button
              key={type.id}
              type="button"
              className={`${styles['xcar-location-card__type-btn']} ${
                values.locationType === type.id ? styles['xcar-location-card__type-btn--active'] : ''
              }`}
              onClick={() => onChange({ locationType: type.id })}
            >
              {type.label}
            </button>
          ))}
          <button
            type="button"
            className={`${styles['xcar-location-card__type-btn']} ${styles['xcar-location-card__type-btn--full']} ${
              values.locationType === 'other' ? styles['xcar-location-card__type-btn--active'] : ''
            }`}
            onClick={() => onChange({ locationType: 'other' })}
          >
            {t.types.other}
          </button>
        </div>
      </div>

      {/* Date & Time */}
      <div className={styles['xcar-location-card__field']}>
        <div className={styles['xcar-location-card__label-row']}>
          <label className={styles['xcar-location-card__label']}>{t.dateTimeLabel}</label>
          <span className={styles['xcar-location-card__required']}>{t.required}</span>
        </div>
        <div className={styles['xcar-location-card__datetime-row']}>
          <div className={styles['xcar-location-card__input-wrapper']}>
            <input
              type="text"
              className={styles['xcar-location-card__input']}
              placeholder="mm / dd / yyyy"
              value={values.date}
              onChange={(e) => onChange({ date: e.target.value })}
            />
            <span className={styles['xcar-location-card__icon']}>📅</span>
          </div>
          <div className={styles['xcar-location-card__input-wrapper']}>
            <input
              type="text"
              className={styles['xcar-location-card__input']}
              placeholder="-- : --"
              value={values.time}
              onChange={(e) => onChange({ time: e.target.value })}
            />
            <span className={styles['xcar-location-card__icon']}>🕒</span>
          </div>
        </div>
      </div>

      {/* Flexible Timing Switch */}
      <div className={styles['xcar-location-card__flexible-box']}>
        <span className={styles['xcar-location-card__flexible-label']}>{t.flexibleTiming}</span>
        <label className={styles['xcar-location-card__switch']}>
          <input
            type="checkbox"
            checked={values.flexibleTiming}
            onChange={(e) => onChange({ flexibleTiming: e.target.checked })}
          />
          <span className={styles['xcar-location-card__slider']} />
        </label>
      </div>
    </div>
  );
};

export const LocationDetailsSection: React.FC<LocationDetailsSectionProps> = ({ locale = 'en' }) => {
  const t = translations[locale] || translations.en;

  const [pickup, setPickup] = useState<LocationFormState>({
    location: '',
    locationType: 'company_branch',
    date: '',
    time: '',
    flexibleTiming: false,
  });

  const [delivery, setDelivery] = useState<LocationFormState>({
    location: '',
    locationType: 'company_branch',
    date: '',
    time: '',
    flexibleTiming: false,
  });

  return (
    <section className={styles['xcar-location-section']}>
      <LocationCard
        locale={locale}
        title={t.pickupTitle}
        values={pickup}
        onChange={(updated) => setPickup((prev) => ({ ...prev, ...updated }))}
      />
      <LocationCard
        locale={locale}
        title={t.deliveryTitle}
        values={delivery}
        onChange={(updated) => setDelivery((prev) => ({ ...prev, ...updated }))}
      />
    </section>
  );
};

export default LocationDetailsSection;