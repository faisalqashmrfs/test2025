// apps/company/app/[locale]/invoices/_components/InvoicesTableSection/InvoicesTableSection.tsx
'use client';

import React, { useState } from 'react';
import styles from './InvoicesTableSection.module.css';

interface InvoiceRowData {
  id: string;
  invoiceId: string;
  requestId: string;
  pickupLocation: string;
  pickupDate: string;
  deliveryLocation: string;
  deliveryDate: string;
  vehicleModel: string;
  vehicleType: string;
  paidAmount: string;
  status: 'PAID' | 'PENDING' | 'CANCELLED';
  // Detailed info for expanded view
  details?: {
    postModel: string;
    transportType: string;
    pickupLocationType: string;
    pickupTime: string;
    deliveryLocationType: string;
    deliveryTime: string;
    distance: string;
    maxDistance: string;
    estDriveTime: string;
    carGear: string;
    carFuel: string;
    fixableTime: string;
    roundTrip: string;
    multiTrip: string;
    additionalNotes: string;
    timeline: {
      posted: string;
      escrowStarted: string;
      paidComplete: string;
    };
    driver: {
      name: string;
      email: string;
      phone: string;
      rating: string;
    };
    payment: {
      state: string;
      grossAmount: string;
      additionalFuel: string;
      insurance: string;
      total: string;
    };
  };
}

interface InvoicesTableSectionProps {
  locale?: string;
}

const mockInvoices: InvoiceRowData[] = [
  {
    id: '1',
    invoiceId: 'IN - 123458',
    requestId: 'XCD -88305',
    pickupLocation: 'Alsterdorfer Str, Hamburg',
    pickupDate: 'Oct 26, 08:00',
    deliveryLocation: 'Königstraße, Stuttgart',
    deliveryDate: 'Oct 26, 20:00',
    vehicleModel: 'BMW M4 Competition',
    vehicleType: 'Sport Car',
    paidAmount: '€890.00',
    status: 'PAID',
  },
  {
    id: '2',
    invoiceId: 'IN - 583412',
    requestId: 'XCD -46271',
    pickupLocation: 'Maximilianstrasse, Munich',
    pickupDate: 'Nov 12, 09:30',
    deliveryLocation: 'Friedrichstrasse, Berlin',
    deliveryDate: 'Nov 12, 18:00',
    vehicleModel: 'Audi RS7',
    vehicleType: 'Luxury Sedan',
    paidAmount: '€1,200.00',
    status: 'PENDING',
    details: {
      postModel: 'Marketplace',
      transportType: 'Carrier',
      pickupLocationType: 'Company branch',
      pickupTime: '09:30 AM',
      deliveryLocationType: 'Company branch',
      deliveryTime: '06:00 PM',
      distance: '400 km',
      maxDistance: '400 km',
      estDriveTime: '04 hours',
      carGear: 'Automatic',
      carFuel: 'Petrol',
      fixableTime: 'Enable',
      roundTrip: 'Disable',
      multiTrip: 'Disable',
      additionalNotes: 'No Additional Notes Written',
      timeline: {
        posted: 'Nov, 10, 2026 - 14:30 CET',
        escrowStarted: 'Nov, 12, 2026 - 09:30 CET',
        paidComplete: 'Nov, 12, 2026 - 18:00 CET',
      },
      driver: {
        name: 'Mr. Klaus Schmidt',
        email: 'Klaus Schmidt@email.com',
        phone: '+41 123 456 789',
        rating: '4.5/5',
      },
      payment: {
        state: 'Payment held in escrow',
        grossAmount: '€1,450.00',
        additionalFuel: '—',
        insurance: '€0.00',
        total: '€1,450.00',
      },
    },
  },
  {
    id: '3',
    invoiceId: 'IN - 854321',
    requestId: 'XCD -88305',
    pickupLocation: 'Alsterdorfer Str, Hamburg',
    pickupDate: 'Oct 26, 08:00',
    deliveryLocation: 'Königstraße, Stuttgart',
    deliveryDate: 'Oct 26, 20:00',
    vehicleModel: 'BMW M4 Competition',
    vehicleType: 'Sport Car',
    paidAmount: '€890.00',
    status: 'CANCELLED',
  },
  {
    id: '4',
    invoiceId: 'IN - 584123',
    requestId: 'XCC -77219',
    pickupLocation: 'Kurfürstendamm, Berlin',
    pickupDate: 'Nov 12, 09:30',
    deliveryLocation: 'Mönckebergstraße, Hamburg',
    deliveryDate: 'Nov 12, 18:45',
    vehicleModel: 'Audi RS7',
    vehicleType: 'Luxury Sedan',
    paidAmount: '€1,150.00',
    status: 'PAID',
  },
  {
    id: '5',
    invoiceId: 'IN - 852341',
    requestId: 'XCD -44011',
    pickupLocation: 'Marienplatz, Munich',
    pickupDate: 'Dec 5, 14:00',
    deliveryLocation: 'Zeil, Frankfurt',
    deliveryDate: 'Dec 5, 22:00',
    vehicleModel: 'Tesla Model S',
    vehicleType: 'Electric',
    paidAmount: '€1,300.00',
    status: 'PENDING',
  },
  {
    id: '6',
    invoiceId: 'IN - 451823',
    requestId: 'XCC -55432',
    pickupLocation: 'Hauptbahnhof, Cologne',
    pickupDate: 'Nov 20, 07:15',
    deliveryLocation: 'Alexanderplatz, Berlin',
    deliveryDate: 'Nov 20, 19:00',
    vehicleModel: 'VW Golf GTI',
    vehicleType: 'Hatchback',
    paidAmount: '€650.00',
    status: 'PAID',
  },
];

export const InvoicesTableSection: React.FC<InvoicesTableSectionProps> = () => {
  const [expandedRowId, setExpandedRowId] = useState<string | null>('2');
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const handleRowClick = (id: string) => {
    setExpandedRowId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles['xcar-invoices-page']}>
      {/* Header Stat Cards */}
      <div className={styles['xcar-header-top']}>
        <div>
          <span className={styles['xcar-date-subtitle']}>Oct 26, 2023 . 08:20AM</span>
          <h2 className={styles['xcar-page-title']}>Invoices</h2>
          <p className={styles['xcar-page-desc']}>Manage how you appear to partners and other members of the network.</p>
        </div>
        <button className={styles['xcar-time-filter-btn']}>
          This Month <span>﹀</span>
        </button>
      </div>

      <div className={styles['xcar-stats-grid']}>
        <div className={styles['xcar-stat-card']}>
          <span className={styles['xcar-stat-card__label']}>Total Paid</span>
          <span className={styles['xcar-stat-card__value']}>€42,280.50</span>
        </div>
        <div className={styles['xcar-stat-card']}>
          <span className={styles['xcar-stat-card__label']}>Pending in Escrow</span>
          <span className={styles['xcar-stat-card__value']}>€3,540.00</span>
        </div>
        <div className={styles['xcar-stat-card']}>
          <span className={styles['xcar-stat-card__label']}>Under Negotiation</span>
          <span className={styles['xcar-stat-card__value']}>04</span>
        </div>
        <div className={styles['xcar-stat-card']}>
          <span className={styles['xcar-stat-card__label']}>Paid This Month</span>
          <span className={styles['xcar-stat-card__value']}>€12,450.00</span>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles['xcar-tabs-nav']}>
        {['ALL', 'PAID', 'PENDING', 'UNDER NEGOTIATION', 'CANCELLED', 'OVERDUE'].map((tab) => (
          <button
            key={tab}
            className={`${styles['xcar-tab-btn']} ${activeTab === tab ? styles['xcar-tab-btn--active'] : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters Bar */}
      <div className={styles['xcar-filter-bar']}>
        <div className={styles['xcar-filter-grid']}>
          <div className={styles['xcar-filter-select']}>Pickup City 📍</div>
          <div className={styles['xcar-filter-select']}>Delivery City 🏁</div>
          <div className={styles['xcar-filter-select']}>Pickup Date 📅</div>
          <div className={styles['xcar-filter-select']}>Delivery Date 📅</div>
          <div className={styles['xcar-filter-select']}>Region ﹀</div>
          <div className={styles['xcar-filter-select']}>Transport type ﹀</div>
          <div className={styles['xcar-filter-select']}>Posted By ﹀</div>
          <div className={styles['xcar-filter-select']}>Sort By ﹀</div>
        </div>
        <button className={styles['xcar-export-btn']}>
          Export All <span>⤓</span>
        </button>
      </div>

      {/* Table Area */}
      <div className={styles['xcar-table-wrapper']}>
        <table className={styles['xcar-table']}>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Request ID</th>
              <th>Pickup Location & Date</th>
              <th>Delivery Location & Date</th>
              <th>Vehicle Model & Type</th>
              <th>Paid</th>
              <th>STATUS</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {mockInvoices.map((row) => {
              const isExpanded = expandedRowId === row.id;
              const details = row.details;

              return (
                <React.Fragment key={row.id}>
                  {/* Row Clickable */}
                  <tr
                    onClick={() => handleRowClick(row.id)}
                    className={`${styles['xcar-table__row']} ${isExpanded ? styles['xcar-table__row--expanded'] : ''}`}
                  >
                    <td><strong>{row.invoiceId}</strong></td>
                    <td><strong>{row.requestId}</strong></td>
                    <td>
                      <div className={styles['xcar-table__cell-title']}>{row.pickupLocation}</div>
                      <div className={styles['xcar-table__cell-sub']}>{row.pickupDate}</div>
                    </td>
                    <td>
                      <div className={styles['xcar-table__cell-title']}>{row.deliveryLocation}</div>
                      <div className={styles['xcar-table__cell-sub']}>{row.deliveryDate}</div>
                    </td>
                    <td>
                      <div className={styles['xcar-table__cell-title']}>{row.vehicleModel}</div>
                      <div className={styles['xcar-table__cell-sub']}>{row.vehicleType}</div>
                    </td>
                    <td><strong>{row.paidAmount}</strong></td>
                    <td>
                      <span className={`${styles['xcar-status-badge']} ${styles[`xcar-status-badge--${row.status.toLowerCase()}`]}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={`${styles['xcar-expand-btn']} ${isExpanded ? styles['xcar-expand-btn--close'] : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRowClick(row.id);
                        }}
                      >
                        {isExpanded ? 'Close' : 'Expand'}
                        <span className={`${styles['xcar-chevron']} ${isExpanded ? styles['xcar-chevron--active'] : ''}`}>
                          ﹀
                        </span>
                      </button>
                    </td>
                  </tr>

                  {/* Smooth Expandable Content Drawer */}
                  <tr className={`${styles['xcar-expanded-row']} ${isExpanded ? styles['xcar-expanded-row--open'] : ''}`}>
                    <td colSpan={8}>
                      <div className={styles['xcar-expandable-wrapper']}>
                        <div className={styles['xcar-expanded-content']}>
                          {details ? (
                            <div className={styles['xcar-invoice-drawer-grid']}>
                              {/* Left Column: Request Details */}
                              <div className={styles['xcar-drawer-box']}>
                                <h4 className={styles['xcar-drawer-title']}>Request Details:</h4>
                                
                                <div className={styles['xcar-detail-group']}>
                                  <span className={styles['xcar-detail-subtitle']}>Main Details:</span>
                                  <div className={styles['xcar-detail-row']}><span>Request ID:</span><strong>{row.requestId}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Post Model:</span><strong>{details.postModel}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Transport Type:</span><strong>{details.transportType}</strong></div>
                                </div>

                                <div className={styles['xcar-detail-group']}>
                                  <span className={styles['xcar-detail-subtitle']}>Picked Details:</span>
                                  <div className={styles['xcar-detail-row']}><span>Location:</span><strong>{row.pickupLocation}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Location Type:</span><strong>{details.pickupLocationType}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Date:</span><strong>{row.pickupDate}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Time:</span><strong>{details.pickupTime}</strong></div>
                                </div>

                                <div className={styles['xcar-detail-group']}>
                                  <span className={styles['xcar-detail-subtitle']}>Delivery Details:</span>
                                  <div className={styles['xcar-detail-row']}><span>Location:</span><strong>{row.deliveryLocation}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Location Type:</span><strong>{details.deliveryLocationType}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Date:</span><strong>{row.deliveryDate}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Time:</span><strong>{details.deliveryTime}</strong></div>
                                </div>

                                <div className={styles['xcar-detail-group']}>
                                  <span className={styles['xcar-detail-subtitle']}>Route Details:</span>
                                  <div className={styles['xcar-detail-row']}><span>Distance:</span><strong>{details.distance}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Max Distance:</span><strong>{details.maxDistance}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>EST Drive Time:</span><strong>{details.estDriveTime}</strong></div>
                                </div>

                                <div className={styles['xcar-detail-group']}>
                                  <span className={styles['xcar-detail-subtitle']}>Cars Details:</span>
                                  <div className={styles['xcar-detail-row']}><span>Cars Type:</span><strong>{row.vehicleModel}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Car Modals:</span><strong>{row.vehicleType}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Car Gear:</span><strong>{details.carGear}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Car Fuel:</span><strong>{details.carFuel}</strong></div>
                                </div>

                                <div className={styles['xcar-detail-group']}>
                                  <span className={styles['xcar-detail-subtitle']}>Special instructions:</span>
                                  <div className={styles['xcar-detail-row']}><span>Fixable Time:</span><strong>{details.fixableTime}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Round Trip:</span><strong>{details.roundTrip}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Multi Trip:</span><strong>{details.multiTrip}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Addition Notes:</span></div>
                                  <p className={styles['xcar-notes-text']}>{details.additionalNotes}</p>
                                </div>
                              </div>

                              {/* Right Column: Timeline, Driver, Payment */}
                              <div className={styles['xcar-drawer-right-col']}>
                                {/* Timeline Card */}
                                <div className={styles['xcar-drawer-box']}>
                                  <h4 className={styles['xcar-drawer-title']}>ESCROW & PAYOUT TIMELINE</h4>
                                  <div className={styles['xcar-timeline']}>
                                    <div className={styles['xcar-timeline-item']}>
                                      <div className={`${styles['xcar-timeline-dot']} ${styles['xcar-timeline-dot--green']}`} />
                                      <div>
                                        <strong>Request Posted</strong>
                                        <p>{details.timeline.posted}</p>
                                      </div>
                                    </div>
                                    <div className={styles['xcar-timeline-item']}>
                                      <div className={`${styles['xcar-timeline-dot']} ${styles['xcar-timeline-dot--green']}`} />
                                      <div>
                                        <strong>Escrow Period Started</strong>
                                        <p>{details.timeline.escrowStarted}</p>
                                      </div>
                                    </div>
                                    <div className={styles['xcar-timeline-item']}>
                                      <div className={`${styles['xcar-timeline-dot']} ${styles['xcar-timeline-dot--blue']}`} />
                                      <div>
                                        <strong>Paid Complete</strong>
                                        <p>{details.timeline.paidComplete}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Driver Details Card */}
                                <div className={styles['xcar-drawer-box']}>
                                  <h4 className={styles['xcar-drawer-title']}>Driver Details:</h4>
                                  <div className={styles['xcar-detail-row']}><span>Name:</span><strong>{details.driver.name}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Email:</span><strong>{details.driver.email}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Phone:</span><strong>{details.driver.phone}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Rating:</span><strong>{details.driver.rating}</strong></div>
                                </div>

                                {/* Payment Summary Card */}
                                <div className={styles['xcar-drawer-box']}>
                                  <h4 className={styles['xcar-drawer-title']}>Payment summary:</h4>
                                  <div className={styles['xcar-detail-row']}><span>Payment State:</span><strong className={styles['xcar-orange-text']}>{details.payment.state}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Gross Amount:</span><strong>{details.payment.grossAmount}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Additional Fuel:</span><strong>{details.payment.additionalFuel}</strong></div>
                                  <div className={styles['xcar-detail-row']}><span>Insurance:</span><strong>{details.payment.insurance}</strong></div>
                                  <hr className={styles['xcar-divider']} />
                                  <div className={styles['xcar-detail-row-total']}>
                                    <span>Total</span>
                                    <strong>{details.payment.total}</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={styles['xcar-no-details']}>No detailed information available.</div>
                          )}

                          {/* Footer Actions */}
                          <div className={styles['xcar-drawer-actions']}>
                            <button className={styles['xcar-pdf-btn']}>
                              Download PDF Invoice <span>📥</span>
                            </button>
                            <button className={styles['xcar-support-btn']}>
                              CONTACT SUPPORT <span>💬</span>
                            </button>
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

        {/* Footer Pagination */}
        <div className={styles['xcar-table-footer']}>
          <span>Showing 10 of 42 requests</span>
          <div className={styles['xcar-pagination']}>
            <button className={styles['xcar-page-arrow']}>‹</button>
            <span className={styles['xcar-page-num--active']}>1</span>
            <span className={styles['xcar-page-num']}>2</span>
            <span className={styles['xcar-page-num']}>3</span>
            <span className={styles['xcar-page-num']}>...</span>
            <span className={styles['xcar-page-num']}>5</span>
            <button className={styles['xcar-page-arrow']}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesTableSection;