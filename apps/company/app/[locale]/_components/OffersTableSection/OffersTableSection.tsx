// apps/company/app/[locale]/offers/_components/OffersTableSection/OffersTableSection.tsx
'use client';

import React, { useState } from 'react';
import styles from './OffersTableSection.module.css';

interface OfferCardData {
  id: string;
  isNew: boolean;
  expireText: string;
  driverName: string;
  rate: string;
  pickupAt: string;
  deliveryAt: string;
  price: string;
}

interface RequestRowData {
  id: string;
  pickupLocation: string;
  pickupDate: string;
  deliveryLocation: string;
  deliveryDate: string;
  transportType: string;
  offersCount: string;
  postedBy: string;
  region: string;
  offers: OfferCardData[];
}

interface OffersTableSectionProps {
  locale?: string;
}

const translations: Record<string, any> = {
  de: {
    requestFiltration: 'Anfragen-Filter',
    offersFiltration: 'Angebote-Filter',
    pickupCity: 'Abholort',
    deliveryCity: 'Lieferort',
    pickupDate: 'Abholdatum',
    deliveryDate: 'Lieferdatum',
    region: 'Region',
    transportType: 'Transportart',
    postedBy: 'Erstellt von',
    sortBy: 'Sortieren nach',
    headers: {
      requestId: 'Anfrage-ID',
      pickup: 'Abholort & Datum',
      delivery: 'Lieferort & Datum',
      transportType: 'Transportart',
      offers: 'Anzahl Angebote',
      postedBy: 'Erstellt von',
      region: 'Region',
      action: 'Aktion',
    },
    expand: 'ERWEITERN',
    close: 'SCHLIESSEN',
    newBadge: 'Neu',
    driverName: 'Fahrer/Firma:',
    rate: 'Bewertung:',
    pickupAt: 'Abholung am:',
    deliveryAt: 'Lieferung am:',
    priceOffer: 'Angebotspreis:',
    accept: 'AKZEPTIEREN',
    reject: 'ABLEHNEN',
    showingText: (count: number, total: number) => `Zeige ${count} von ${total} Anfragen`,
  },
  en: {
    requestFiltration: 'Request Filtration',
    offersFiltration: 'Offers Filtration',
    pickupCity: 'Pickup City',
    deliveryCity: 'Delivery City',
    pickupDate: 'Pickup Date',
    deliveryDate: 'Delivery Date',
    region: 'Region',
    transportType: 'Transport type',
    postedBy: 'Posted By',
    sortBy: 'Sort By',
    headers: {
      requestId: 'Request ID',
      pickup: 'Pickup Location & Date',
      delivery: 'Delivery Location & Date',
      transportType: 'Transport Type',
      offers: 'Number of Offers',
      postedBy: 'Posted By',
      region: 'Region',
      action: 'Action',
    },
    expand: 'EXPAND',
    close: 'CLOSE',
    newBadge: 'New',
    driverName: 'Driver Name:',
    rate: 'Rate:',
    pickupAt: 'Pickup at:',
    deliveryAt: 'Delivery at:',
    priceOffer: 'Price Offer:',
    accept: 'ACCEPT',
    reject: 'REJECT',
    showingText: (count: number, total: number) => `Showing ${count} of ${total} requests`,
  },
  fr: {
    requestFiltration: 'Filtrage des demandes',
    offersFiltration: 'Filtrage des offres',
    pickupCity: 'Ville de retrait',
    deliveryCity: 'Ville de livraison',
    pickupDate: 'Date de retrait',
    deliveryDate: 'Date de livraison',
    region: 'Région',
    transportType: 'Type de transport',
    postedBy: 'Publié par',
    sortBy: 'Trier par',
    headers: {
      requestId: 'ID Demande',
      pickup: 'Lieu & Date de retrait',
      delivery: 'Lieu & Date de livraison',
      transportType: 'Type de transport',
      offers: "Nombre d'offres",
      postedBy: 'Publié par',
      region: 'Région',
      action: 'Action',
    },
    expand: 'AFFICHER',
    close: 'FERMER',
    newBadge: 'Nouveau',
    driverName: 'Nom du chauffeur :',
    rate: 'Évaluation :',
    pickupAt: 'Retrait le :',
    deliveryAt: 'Livraison le :',
    priceOffer: 'Prix proposé :',
    accept: 'ACCEPTER',
    reject: 'REFUSER',
    showingText: (count: number, total: number) => `Affichage de ${count} sur ${total} demandes`,
  },
};

const mockRequests: RequestRowData[] = [
  {
    id: 'XCD -88305',
    pickupLocation: 'Alsterdorfer Str, Hamburg',
    pickupDate: 'Oct 26, 08:00',
    deliveryLocation: 'Königstraße, Stuttgart',
    deliveryDate: 'Oct 26, 20:00',
    transportType: 'Carrier',
    offersCount: '03',
    postedBy: 'Alex Johnson',
    region: 'Bayern',
    offers: [
      {
        id: 'off-1',
        isNew: true,
        expireText: 'Expire in 2 hour',
        driverName: 'Spedition Meyer',
        rate: '4.9/5',
        pickupAt: 'Oct 26, 08:00',
        deliveryAt: 'Oct 26, 12:00',
        price: '€920',
      },
      {
        id: 'off-2',
        isNew: true,
        expireText: 'Expire in 1 hour',
        driverName: 'LogiTrans GmbH',
        rate: '4.7/5',
        pickupAt: 'Oct 26, 08:00',
        deliveryAt: 'Oct 26, 10:00',
        price: '€1100',
      },
    ],
  },
  {
    id: 'XCC -45521',
    pickupLocation: 'Beverly Blvd, Los Angeles',
    pickupDate: 'Nov 5, 09:30',
    deliveryLocation: "King's Cross, London",
    deliveryDate: 'Nov 5, 18:45',
    transportType: 'Driven',
    offersCount: '02',
    postedBy: 'Maria Smith',
    region: 'Nordrhein-Westfalen',
    offers: [
      {
        id: 'off-3',
        isNew: true,
        expireText: 'Expire in 2 hour',
        driverName: 'Spedition Meyer',
        rate: '4.9/5',
        pickupAt: 'Oct 26, 08:00',
        deliveryAt: 'Oct 26, 12:00',
        price: '€920',
      },
      {
        id: 'off-4',
        isNew: true,
        expireText: 'Expire in 1 hour',
        driverName: 'LogiTrans GmbH',
        rate: '4.7/5',
        pickupAt: 'Oct 26, 08:00',
        deliveryAt: 'Oct 26, 10:00',
        price: '€1100',
      },
    ],
  },
  {
    id: 'XCC -67243',
    pickupLocation: 'Via Roma, Milan',
    pickupDate: 'Dec 12, 07:15',
    deliveryLocation: 'Rue de Rivoli, Paris',
    deliveryDate: 'Dec 12, 15:00',
    transportType: 'Carrier',
    offersCount: '05',
    postedBy: 'David Lee',
    region: 'Baden-Württemberg',
    offers: [],
  },
  {
    id: 'XCD -99412',
    pickupLocation: 'Queen St, Auckland',
    pickupDate: 'Jan 15, 06:00',
    deliveryLocation: 'George St, Sydney',
    deliveryDate: 'Jan 15, 16:00',
    transportType: 'Driven',
    offersCount: '08',
    postedBy: 'Sophia Brown',
    region: 'Sachsen',
    offers: [],
  },
  {
    id: 'XCC -39087',
    pickupLocation: 'Potsdamer Platz, Berlin',
    pickupDate: 'Feb 20, 10:00',
    deliveryLocation: 'Grand Canal, Venice',
    deliveryDate: 'Feb 20, 19:30',
    transportType: 'Carrier',
    offersCount: '012',
    postedBy: 'Michael Davis',
    region: 'Hessen',
    offers: [],
  },
  {
    id: 'XCE -11234',
    pickupLocation: 'Gran Via, Madrid',
    pickupDate: 'Mar 10, 08:45',
    deliveryLocation: 'Champs-Élysées, Paris',
    deliveryDate: 'Mar 10, 18:30',
    transportType: 'Driven',
    offersCount: '02',
    postedBy: 'Emily Wilson',
    region: 'Rheinland-Pfalz',
    offers: [],
  },
];

export const OffersTableSection: React.FC<OffersTableSectionProps> = ({ locale = 'en' }) => {
  const t = translations[locale] || translations.en;
  const [expandedRowId, setExpandedRowId] = useState<string | null>('XCC -45521');
  const [priceRange, setPriceRange] = useState<number>(850);

  const handleRowClick = (id: string) => {
    setExpandedRowId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles['xcar-offers-section']}>
      {/* Request Filtration */}
      <div className={styles['xcar-filter-group']}>
        <h4 className={styles['xcar-filter-group__title']}>{t.requestFiltration}</h4>
        <div className={styles['xcar-filter-grid-4']}>
          <div className={styles['xcar-filter-input']}>
            <input type="text" placeholder={t.pickupCity} />
            <span className={styles['xcar-filter-icon']}>📍</span>
          </div>
          <div className={styles['xcar-filter-input']}>
            <input type="text" placeholder={t.deliveryCity} />
            <span className={styles['xcar-filter-icon']}>🏁</span>
          </div>
          <div className={styles['xcar-filter-input']}>
            <input type="text" placeholder={t.pickupDate} />
            <span className={styles['xcar-filter-icon']}>📅</span>
          </div>
          <div className={styles['xcar-filter-input']}>
            <input type="text" placeholder={t.deliveryDate} />
            <span className={styles['xcar-filter-icon']}>📅</span>
          </div>
        </div>

        <div className={styles['xcar-filter-grid-4']}>
          <select className={styles['xcar-filter-select']}>
            <option value="">{t.region}</option>
          </select>
          <select className={styles['xcar-filter-select']}>
            <option value="">{t.transportType}</option>
          </select>
          <select className={styles['xcar-filter-select']}>
            <option value="">{t.postedBy}</option>
          </select>
          <select className={styles['xcar-filter-select']}>
            <option value="">{t.sortBy}</option>
          </select>
        </div>
      </div>

      {/* Offers Filtration */}
      <div className={styles['xcar-filter-group']}>
        <h4 className={styles['xcar-filter-group__title']}>{t.offersFiltration}</h4>
        <div className={styles['xcar-filter-grid-3']}>
          <div className={styles['xcar-filter-input']}>
            <input type="text" placeholder={t.pickupDate} />
            <span className={styles['xcar-filter-icon']}>📅</span>
          </div>
          <div className={styles['xcar-filter-input']}>
            <input type="text" placeholder={t.deliveryDate} />
            <span className={styles['xcar-filter-icon']}>📅</span>
          </div>
          <select className={styles['xcar-filter-select']}>
            <option value="">{t.deliveryDate}</option>
          </select>
        </div>

        {/* Range Slider */}
        <div className={styles['xcar-slider-container']}>
          <span className={styles['xcar-slider-badge']}>200 €</span>
          <input
            type="range"
            min="200"
            max="1500"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className={styles['xcar-slider-input']}
          />
          <span className={styles['xcar-slider-badge']}>1,500 €</span>
        </div>
      </div>

      {/* Table Component */}
      <div className={styles['xcar-table-wrapper']}>
        <table className={styles['xcar-table']}>
          <thead>
            <tr>
              <th>{t.headers.requestId}</th>
              <th>{t.headers.pickup}</th>
              <th>{t.headers.delivery}</th>
              <th>{t.headers.transportType}</th>
              <th>{t.headers.offers}</th>
              <th>{t.headers.postedBy}</th>
              <th>{t.headers.region}</th>
              <th>{t.headers.action}</th>
            </tr>
          </thead>
          <tbody>
            {mockRequests.map((row) => {
              const isExpanded = expandedRowId === row.id;

              return (
                <React.Fragment key={row.id}>
                  {/* Main Clickable Row */}
                  <tr
                    onClick={() => handleRowClick(row.id)}
                    className={`${styles['xcar-table__row']} ${isExpanded ? styles['xcar-table__row--expanded'] : ''}`}
                  >
                    <td className={styles['xcar-table__id-cell']}>
                      <span className={styles['xcar-table__icons']}>🕒 ⚡</span>
                      <strong>{row.id}</strong>
                    </td>
                    <td>
                      <div className={styles['xcar-table__cell-title']}>{row.pickupLocation}</div>
                      <div className={styles['xcar-table__cell-sub']}>{row.pickupDate}</div>
                    </td>
                    <td>
                      <div className={styles['xcar-table__cell-title']}>{row.deliveryLocation}</div>
                      <div className={styles['xcar-table__cell-sub']}>{row.deliveryDate}</div>
                    </td>
                    <td>{row.transportType}</td>
                    <td><strong>{row.offersCount}</strong></td>
                    <td>{row.postedBy}</td>
                    <td>{row.region}</td>
                    <td>
                      <button
                        type="button"
                        className={`${styles['xcar-expand-btn']} ${isExpanded ? styles['xcar-expand-btn--close'] : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRowClick(row.id);
                        }}
                      >
                        {isExpanded ? t.close : t.expand}
                        <span className={`${styles['xcar-chevron']} ${isExpanded ? styles['xcar-chevron--active'] : ''}`}>
                          ﹀
                        </span>
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Row - Renders always to support CSS smooth transition */}
                  <tr className={`${styles['xcar-expanded-row']} ${isExpanded ? styles['xcar-expanded-row--open'] : ''}`}>
                    <td colSpan={8}>
                      <div className={styles['xcar-expandable-wrapper']}>
                        <div className={styles['xcar-expanded-content']}>
                          <div className={styles['xcar-offers-grid']}>
                            {row.offers.length > 0 ? (
                              row.offers.map((offer) => (
                                <div key={offer.id} className={styles['xcar-offer-card']}>
                                  <div className={styles['xcar-offer-card__header']}>
                                    <span className={styles['xcar-offer-card__new-badge']}>{t.newBadge}</span>
                                    <span className={styles['xcar-offer-card__expire']}>{offer.expireText}</span>
                                  </div>

                                  <div className={styles['xcar-offer-card__body']}>
                                    <div className={styles['xcar-offer-card__row']}>
                                      <span>{t.driverName}</span>
                                      <strong>{offer.driverName}</strong>
                                    </div>
                                    <div className={styles['xcar-offer-card__row']}>
                                      <span>{t.rate}</span>
                                      <strong>{offer.rate}</strong>
                                    </div>

                                    <div className={styles['xcar-offer-card__row']}>
                                      <span>{t.pickupAt}</span>
                                      <span>{offer.pickupAt}</span>
                                    </div>
                                    <div className={styles['xcar-offer-card__row']}>
                                      <span>{t.deliveryAt}</span>
                                      <span>{offer.deliveryAt}</span>
                                    </div>

                                    <div className={styles['xcar-offer-card__price-row']}>
                                      <span>{t.priceOffer}</span>
                                      <span className={styles['xcar-offer-card__price']}>{offer.price}</span>
                                    </div>
                                  </div>

                                  <div className={styles['xcar-offer-card__actions']}>
                                    <button
                                      type="button"
                                      className={styles['xcar-offer-card__accept-btn']}
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {t.accept}
                                    </button>
                                    <button
                                      type="button"
                                      className={styles['xcar-offer-card__reject-btn']}
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {t.reject}
                                    </button>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className={styles['xcar-no-offers']}>No offers available for this request.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>

        {/* Table Footer / Pagination */}
        <div className={styles['xcar-table-footer']}>
          <span>{t.showingText(mockRequests.length, mockRequests.length)}</span>
          <div className={styles['xcar-pagination']}>
            <button type="button" disabled className={styles['xcar-pagination__arrow']}>‹</button>
            <span className={styles['xcar-pagination__page--active']}>1</span>
            <button type="button" disabled className={styles['xcar-pagination__arrow']}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersTableSection;