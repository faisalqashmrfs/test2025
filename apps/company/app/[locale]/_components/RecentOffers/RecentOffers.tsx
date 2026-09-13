// apps/company/app/[locale]/_components/RecentOffers/RecentOffers.tsx

'use client';

import React from 'react';
import { OfferCard, OfferData } from '@xcarbox/ui';
import { dictionaries, Locale, defaultLocale } from '@xcarbox/i18n';
import { Icon } from '../Icon';
// @ts-ignore
import styles from './RecentOffers.module.css';

interface RecentOffersProps {
  locale: string;
}

export const RecentOffers = ({ locale }: RecentOffersProps) => {
  const validLocale: Locale = (dictionaries as Record<string, unknown>)[locale]
    ? (locale as Locale)
    : defaultLocale;
  const dict = dictionaries[validLocale] as Record<string, any>;
  const t = dict.overview || {};

  const mockOffers: OfferData[] = [
    {
      id: '1',
      from: 'Hamburg',
      to: 'Stuttgart',
      badgeText: 'Drivern',
      companyName: 'Spedition Meyer',
      rating: '4.9/5',
      avatarUrl: 'https://i.pravatar.cc/100?img=11',
      pickupAt: 'Oct 26, 08:00',
      deliveryAt: 'Oct 26, 12:00',
      expireIn: '2 Hours',
      price: '€920',
    },
    {
      id: '2',
      from: 'Berlin',
      to: 'Munich',
      badgeText: 'Drivern',
      companyName: 'LogiTrans GmbH',
      rating: '4.7/5',
      avatarUrl: 'https://i.pravatar.cc/100?img=12',
      pickupAt: 'Oct 26, 08:00',
      deliveryAt: 'Oct 26, 12:00',
      expireIn: '2 Hours',
      price: '€1100',
    },
    {
      id: '3',
      from: 'Cologne',
      to: 'Frankfurt',
      badgeText: '',
      companyName: 'Express Cargo AG',
      rating: '4.8/5',
      pickupAt: 'Oct 26, 08:00',
      deliveryAt: 'Oct 26, 12:00',
      expireIn: '2 Hours',
      price: '€850',
    },
  ];

  const labels = {
    pickupAt: t.pickupAt || 'Pickup at:',
    deliveryAt: t.deliveryAt || 'Delivery at:',
    offerExpireIn: t.offerExpireIn || 'Offer Expire in:',
    priceOffer: t.priceOffer || 'Price Offer:',
    accept: t.accept || 'ACCEPT',
    reject: t.reject || 'REJECT',
  };

  return (
    <section className={styles.recentOffers_section}>
      <div className={styles.recentOffers_header}>
        <h2 className={styles.recentOffers_title}>{t.recentOffers || 'Recent Offers'}</h2>
        <a href={`/${locale}/offers`} className={styles.recentOffers_viewAll}>
          {t.viewAll || 'View All'} <Icon name="ExternalLink" className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className={styles.recentOffers_flexList}>
        {mockOffers.map((offer) => (
          <OfferCard key={offer.id} data={offer} labels={labels} />
        ))}
      </div>
    </section>
  );
};