// apps/company/app/[locale]/offers/_components/OffersHeader/OffersHeader.tsx
'use client';
import { DraftBanner } from '@xcarbox/ui';
import React from 'react';
import styles from './OffersHeader.module.css';

interface OffersHeaderProps {
  locale?: string;
}

const translations: Record<string, any> = {
  de: {
    statusDraft: 'Entwurf',
    vehicleLabel: 'Fahrzeug:',
    completeRequest: 'ANFRAGE ABSCHLIESSEN',
    title: 'Angebote',
    subtitle: 'Verwalten und verhandeln Sie Frachtführer-Angebote für Ihre aktiven Transportanfragen.',
    totalOffers: 'Gesamte Angebote',
    awaitingReview: 'Wartet auf Prüfung',
    expiringSoon: 'Läuft bald ab',
    acrossRequests: (count: number) => `Über ${count} Anfragen`,
    expireToday: 'Läuft heute ab',
  },
  en: {
    statusDraft: 'Draft',
    vehicleLabel: 'Vehicle:',
    completeRequest: 'COMPLETE REQUEST',
    title: 'Offers',
    subtitle: 'Manage and negotiate carrier bids for your active transport requests.',
    totalOffers: 'Total Offers',
    awaitingReview: 'Awaiting Review',
    expiringSoon: 'Expiring Soon',
    acrossRequests: (count: number) => `Across ${count} requests`,
    expireToday: 'Expire Today',
  },
  fr: {
    statusDraft: 'Brouillon',
    vehicleLabel: 'Véhicule :',
    completeRequest: 'COMPLÉTER LA DEMANDE',
    title: 'Offres',
    subtitle: 'Gérez et négociez les offres des transporteurs pour vos demandes de transport actives.',
    totalOffers: 'Total des offres',
    awaitingReview: 'En attente d\'examen',
    expiringSoon: 'Expire bientôt',
    acrossRequests: (count: number) => `Sur ${count} demandes`,
    expireToday: 'Expire aujourd\'hui',
  },
};

export const OffersHeader: React.FC<OffersHeaderProps> = ({ locale = 'en' }) => {
  const t = translations[locale] || translations.en;

  return (
    <div className={styles['xcar-offers-header']}>
      {/* Top Banner Status Bar */}
      
      <DraftBanner
              statusText={t.draft || 'Draft'}
              fromLocation="Berlin"
              toLocation="Munich"
              vehicleName="Porsche 911 GT3"
              buttonText={t.completeRequest || 'COMPLETE REQUEST'}
              onComplete={() => console.log('Complete draft')}
            />

      {/* Main Title Section */}
      <div className={styles['xcar-offers-header__main']}>
        <span className={styles['xcar-offers-header__date']}>Oct 26, 2023 . 08:00 AM</span>
        <h1 className={styles['xcar-offers-header__title']}>{t.title}</h1>
        <p className={styles['xcar-offers-header__subtitle']}>{t.subtitle}</p>
      </div>

      {/* Stats Cards */}
      <div className={styles['xcar-offers-header__cards-grid']}>
        {/* Card 1: Total Offers */}
        <div className={styles['xcar-stat-card']}>
          <span className={styles['xcar-stat-card__label']}>{t.totalOffers}</span>
          <div className={styles['xcar-stat-card__value']}>032</div>
          <div className={styles['xcar-stat-card__footer']}>
            {t.acrossRequests(12)}
          </div>
        </div>

        {/* Card 2: Awaiting Review */}
        <div className={styles['xcar-stat-card']}>
          <span className={styles['xcar-stat-card__label']}>{t.awaitingReview}</span>
          <div className={styles['xcar-stat-card__value']}>014</div>
          <div className={styles['xcar-stat-card__footer']}>
            {t.acrossRequests(8)}
          </div>
        </div>

        {/* Card 3: Expiring Soon */}
        <div className={`${styles['xcar-stat-card']} ${styles['xcar-stat-card--danger']}`}>
          <span className={styles['xcar-stat-card__label']}>{t.expiringSoon}</span>
          <div className={styles['xcar-stat-card__value']}>03</div>
          <div className={styles['xcar-stat-card__footer']}>
            {t.expireToday}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersHeader;