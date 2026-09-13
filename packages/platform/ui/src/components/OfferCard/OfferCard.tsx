// packages/ui/src/components/OfferCard/OfferCard.tsx

'use client';

import React from 'react';
import { ArrowRight, Percent } from 'lucide-react';
// @ts-ignore
import styles from './../../styles/style.module.css';

export interface OfferData {
  id: string;
  from: string;
  to: string;
  badgeText?: string;
  companyName: string;
  rating: string;
  avatarUrl?: string;
  pickupAt: string;
  deliveryAt: string;
  expireIn: string;
  price: string;
}

interface OfferCardProps {
  data: OfferData;
  labels: {
    pickupAt: string;
    deliveryAt: string;
    offerExpireIn: string;
    priceOffer: string;
    accept: string;
    reject: string;
  };
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
}

export const OfferCard = ({ data, labels, onAccept, onReject }: OfferCardProps) => {
  return (
    <div className={styles.offerCard_card}>
      <div>
        <div className={styles.offerCard_header}>
          <div className={styles.offerCard_route}>
            <Percent size={16} />
            <span>{data.from}</span>
            <ArrowRight size={16} />
            <span>{data.to}</span>
          </div>
          {data.badgeText && <span className={styles.offerCard_badge}>{data.badgeText}</span>}
        </div>

        <div className={styles.offerCard_companySection}>
          <div>
            <p className={styles.offerCard_companyName}>{data.companyName}</p>
            <p className={styles.offerCard_rating}>{data.rating}</p>
          </div>
          {data.avatarUrl && (
            <img src={data.avatarUrl} alt={data.companyName} className={styles.offerCard_avatar} />
          )}
        </div>

        <hr className={styles.offerCard_divider} />

        <div className={styles.offerCard_detailsList}>
          <div className={styles.offerCard_detailRow}>
            <span className={styles.offerCard_label}>{labels.pickupAt}</span>
            <span className={styles.offerCard_value}>{data.pickupAt}</span>
          </div>
          <div className={styles.offerCard_detailRow}>
            <span className={styles.offerCard_label}>{labels.deliveryAt}</span>
            <span className={styles.offerCard_value}>{data.deliveryAt}</span>
          </div>
          <div className={styles.offerCard_detailRow}>
            <span className={styles.offerCard_label}>{labels.offerExpireIn}</span>
            <span className={styles.offerCard_value}>{data.expireIn}</span>
          </div>
        </div>

        <hr className={styles.offerCard_divider} />

        <div className={styles.offerCard_priceRow}>
          <span className={styles.offerCard_priceLabel}>{labels.priceOffer}</span>
          <span className={styles.offerCard_priceValue}>{data.price}</span>
        </div>
      </div>

      <div className={styles.offerCard_actions}>
        <button
          type="button"
          className={styles.offerCard_btnAccept}
          onClick={() => onAccept?.(data.id)}
        >
          {labels.accept}
        </button>
        <button
          type="button"
          className={styles.offerCard_btnReject}
          onClick={() => onReject?.(data.id)}
        >
          {labels.reject}
        </button>
      </div>
    </div>
  );
};