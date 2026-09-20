import React from 'react';
import { Download, Headphones } from 'lucide-react';
import styles from './OfferDetailsCard.module.css';

const SafeDownload = Download as unknown as React.FC<any>;
const SafeHeadphones = Headphones as unknown as React.FC<any>;

export default function OfferDetailsCard() {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.topGrid}>
        {/* القسم الأيسر: تفاصيل عرض النقل وتفاصيل العميل */}
        <div className={styles.leftColumn}>
          <div className={styles.cardBox}>
            <div className={styles.cardTitle}>Offer Donning Details:</div>
            
            {/* خط التقدم */}
            <div className={styles.progressBarWrapper}>
              <div style={{ width: '100%', height: '4px', backgroundColor: '#2e3d55', borderRadius: '2px', position: 'relative' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#10b981', borderRadius: '2px' }}></div>
              </div>
            </div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Picked Details:</span>
                <span style={{ fontWeight: 600 }}>From: Ingolstädter Str. 122, 80807 München</span>
                <span>Date: May, 12, 2026</span>
                <span>Time: 08:24 AM</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Delivery Details:</span>
                <span style={{ fontWeight: 600 }}>To: Franklinstraße 26, 10587 Berlin</span>
                <span>Date: May, 12, 2026</span>
                <span>Time: 08:24 AM</span>
              </div>
            </div>

            <div className={styles.detailsGrid} style={{ marginTop: '1rem', borderTop: '1px solid #2e3d55', paddingTop: '1rem' }}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Route Details:</span>
                <span>Distance: 443 km</span>
                <span>Taken Time: 08:24 AM</span>
                <span>Fuel Usage & Coast: No Use for Extra Fuel</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Car Details:</span>
                <span>Car Type: Sport</span>
                <span>Car Model: 08:24 AM</span>
                <span>Weight: No Use for Extra Fuel</span>
              </div>
            </div>
          </div>

          {/* تفاصيل العميل */}
          <div className={styles.cardBox}>
            <div className={styles.cardTitle}>Client Details:</div>
            <div className={styles.clientDetailsContent}>
              <div className={styles.clientInfo}>
                <div><strong>Name:</strong> Mr, Klaus Schmidt</div>
                <div><strong>Email:</strong> KlausSchmidt@email.com</div>
                <div><strong>Phone:</strong> +41 123 456 789</div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                  alt="Client" 
                  className={styles.clientAvatar} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* القسم الأيمن: التقرير المالي والخط الزمني */}
        <div className={styles.rightColumn}>
          <div className={styles.cardBox}>
            <div className={styles.cardTitle}>FINANCIAL BREAKDOWN</div>
            <div className={styles.financialRow}>
              <span>Gross Amount</span>
              <span style={{ fontWeight: 600 }}>€1,450.00</span>
            </div>
            <div className={styles.financialRow}>
              <span>Platform Fee (10%)</span>
              <span style={{ color: '#f87171' }}>-€145.00</span>
            </div>
            <div className={styles.financialRow}>
              <span>Insurance Deductible</span>
              <span>€0.00</span>
            </div>
            <div className={styles.financialRowTotal}>
              <span>Net Payout</span>
              <span style={{ color: '#4ade80' }}>€1,305.00</span>
            </div>
          </div>

          <div className={styles.cardBox}>
            <div className={styles.cardTitle}>ESCROW & PAYOUT TIMELINE</div>
            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <span className={styles.timelineTitle} style={{ color: '#4ade80' }}>● Transport Completed</span>
                <span className={styles.timelineDate}>Oct 24, 2026 - 14:30 CET</span>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineTitle} style={{ color: '#4ade80' }}>● Escrow Period Started</span>
                <span className={styles.timelineDate}>Oct 24, 2026 - 48h Inspection Window</span>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineTitle} style={{ color: '#60a5fa' }}>● Payout Initiated</span>
                <span className={styles.timelineDate}>Expected arrival: Oct 27, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الأزرار بالأسفل */}
      <div className={styles.actionsRow}>
        <button className={styles.pdfBtn}>
          <SafeDownload size={16} /> Download PDF Invoice
        </button>
        <button className={styles.supportBtn}>
          <SafeHeadphones size={16} /> CONTACT SUPPORT
        </button>
      </div>
    </div>
  );
}