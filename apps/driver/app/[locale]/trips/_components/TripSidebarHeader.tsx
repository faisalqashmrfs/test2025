import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Car, 
  Map,
  Navigation
} from 'lucide-react';
import styles from './TripSidebarHeader.module.css';

const SafeX = X as unknown as React.FC<any>;
const SafeCalendar = Calendar as unknown as React.FC<any>;
const SafeClock = Clock as unknown as React.FC<any>;
const SafeCar = Car as unknown as React.FC<any>;
const SafeMap = Map as unknown as React.FC<any>;
const SafeNavigation = Navigation as unknown as React.FC<any>;

interface TripSidebarHeaderProps {
  onClose: () => void;
}

export default function TripSidebarHeader({ onClose }: TripSidebarHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  return (
    <div className={`${styles.sidebarOverlay} ${isOpen ? styles.sidebarOverlayOpen : ''}`}>
      <div className={`${styles.sidebarContainer} ${isOpen ? styles.sidebarContainerOpen : ''}`}>
        
        {/* الترويسة العلوية وزر الإغلاق */}
        <div className={styles.headerTopRow}>
          <div className={styles.badgeDriven}>
            <SafeNavigation className="w-3 h-3 text-sky-400" />
            <span>Driven Transport</span>
          </div>
          <button className={styles.closeBtn} onClick={handleClose}>
            <span>Close</span>
            <SafeX className="w-3.5 h-3.5" />
          </button>
        </div>

        <h2 className={styles.routeTitle}>Hamburg → Stuttgart</h2>
        <p className={styles.offerIdText}>Offer ID: XCD-88291</p>

        {/* اسم الشركة المنشئة للعرض */}
        <div className={styles.companyRowBox}>
          <span className="text-xs text-gray-400">Offer From</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Mercedes</span>
            <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-xs font-bold text-white bg-gray-800">
              M
            </div>
          </div>
        </div>

        {/* القسم الأول: الاستلام والتسليم (Pickup & Delivery) */}
        <div className={styles.sectionBoxCard}>
          
          {/* Pickup Block */}
          <div className={styles.locationBlock}>
            <span className={styles.locationTitleTag}>PICKUP</span>
            <span className={styles.locationMainName}>München Autohof Süd</span>
            <span className={styles.locationAddress}>Ingolstädter Str. 122, 80507 München</span>
            
            <div className={styles.dateTimePillRow}>
              <div className={styles.pillItem}>
                <SafeCalendar className="w-3.5 h-3.5 text-gray-400" />
                <span>May 12 · 08:00AM - May 13 · 06:00PM</span>
              </div>
            </div>

            <div className={styles.dateTimePillRow}>
              <div className={styles.pillItem}>
                <SafeCar className="w-3.5 h-3.5 text-gray-400" />
                <span>Car Center</span>
              </div>
              <div className={styles.pillItem}>
                <SafeClock className="w-3.5 h-3.5 text-gray-400" />
                <span>Open: 09:00 AM - 09:00 PM</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 my-1" />

          {/* Delivery Block */}
          <div className={styles.locationBlock}>
            <span className={styles.locationTitleTag}>DELIVERY</span>
            <span className={styles.locationMainName}>Berlin Porsche Center</span>
            <span className={styles.locationAddress}>Franklinstraße 26, 10587 Berlin</span>
            
            <div className={styles.dateTimePillRow}>
              <div className={styles.pillItem}>
                <SafeCalendar className="w-3.5 h-3.5 text-gray-400" />
                <span>May 14 · 08:00PM - May 14 · 10:00AM</span>
              </div>
            </div>

            <div className={styles.dateTimePillRow}>
              <div className={styles.pillItem}>
                <SafeCar className="w-3.5 h-3.5 text-gray-400" />
                <span>Car Center</span>
              </div>
              <div className={styles.pillItem}>
                <SafeClock className="w-3.5 h-3.5 text-gray-400" />
                <span>Open: 09:00 AM - 09:00 PM</span>
              </div>
            </div>
          </div>

          <button className={styles.viewOnMapBtn}>
            <SafeMap className="w-4 h-4" />
            <span>View On Map</span>
          </button>

        </div>

        {/* تفاصيل مسار الرحلة (Route Details) */}
        <div>
          <h3 className={styles.sectionTitleHeading}>Route Details</h3>
          <div className={styles.routeDetailsCardBox}>
            <div className={styles.routeDetailsGrid}>
              
              <div className={styles.routeDetailItem}>
                <span className={styles.routeDetailLabel}>Distance</span>
                <span className={styles.routeDetailValue}>360 KM</span>
              </div>

              <div className={styles.routeDetailItem}>
                <span className={styles.routeDetailLabel}>EST Time</span>
                <span className={styles.routeDetailValue}>04:30 hour</span>
              </div>

              <div className={styles.routeDetailItem}>
                <span className={styles.routeDetailLabel}>Max Distance</span>
                <span className={styles.routeDetailValue}>400 KM</span>
              </div>

              <div className={styles.routeDetailItem}>
                <span className={styles.routeDetailLabel}>FLEXIBILITY</span>
                <span className={styles.routeDetailValue}>+/- 2 hours</span>
              </div>

            </div>
          </div>
        </div>

        {/* القسم الثاني: تفاصيل المركبة (Vehicle Details) */}
        <div>
          <div className={styles.vehicleCardBox}>
            <h3 className={styles.sectionTitleHeading} style={{ margin: 0 }}>VEHICLE DETAILS</h3>
            
            <div className={styles.vehicleImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600&auto=format&fit=crop" 
                alt="Mercedes-Benz EQS 580" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className={styles.vehicleSpecsGrid}>
              <div className={styles.specItemBox}>
                <span className={styles.specLabelText}>Type</span>
                <span className={styles.specValueText}>4 X 4</span>
              </div>
              <div className={styles.specItemBox}>
                <span className={styles.specLabelText}>Gear</span>
                <span className={styles.specValueText}>Automatic</span>
              </div>
              <div className={styles.specItemBox}>
                <span className={styles.specLabelText}>Fuel</span>
                <span className={styles.specValueText}>Electrical</span>
              </div>
              <div className={styles.specItemBox}>
                <span className={styles.specLabelText}>Weight</span>
                <span className={styles.specValueText}>1,900 kg</span>
              </div>
              <div className={styles.specItemBox}>
                <span className={styles.specLabelText}>Plate</span>
                <span className={styles.specValueText}>S - AM 2023</span>
              </div>
              <div className={styles.specItemBox}>
                <span className={styles.specLabelText}>Model</span>
                <span className={styles.specValueText}>Mercedes-Benz EQS 580</span>
              </div>
            </div>
          </div>
        </div>

        {/* قسم التأمين والشروط (Insurance & Conditions) */}
        <div>
          <div className={styles.insuranceCardBox}>
            <span className={styles.insuranceTitle}>Insurance & Conditions</span>
            <span className={styles.insuranceSubTitle}>Insurance Terms (VHV Insurance)</span>
            <p className={styles.insuranceDesc}>
              A condition report must be completed via the XCARBOX app at both departure and arrival. Follow the instructions in the app.
            </p>
          </div>
        </div>

        {/* القسم الثالث: العقوبات (Penalties) */}
        <div>
          <div className={styles.penaltiesCardBox}>
            <span className={styles.penaltiesMainTitle}>Penalties:</span>
            
            <div className={styles.penaltyItem}>
              <span className={styles.penaltyLabel}>Kilometer Coast:</span>
              <span className={styles.penaltyValue}>€0.50 per kilometer</span>
            </div>

            <div className={styles.penaltyItem}>
              <span className={styles.penaltyLabel}>Late return:</span>
              <span className={styles.penaltyValue}>€10.00 per hour (starting after 1 hour delay)</span>
            </div>

            <div className={styles.penaltyItem}>
              <span className={styles.penaltyLabel}>Return at wrong location:</span>
              <span className={styles.penaltyValue}>€1.00 per kilometer</span>
            </div>

            <div className={styles.penaltyItem}>
              <span className={styles.penaltyLabel}>Booking cancellation:</span>
              <span className={styles.penaltyValue}>€25.00 (doubles if less than 48 hours)</span>
            </div>

            <div className={styles.penaltyItem}>
              <span className={styles.penaltyLabel}>No-show:</span>
              <span className={styles.penaltyValue}>€100.00</span>
            </div>

            <div className={styles.penaltyItem}>
              <span className={styles.penaltyLabel}>Missing pickup report:</span>
              <span className={styles.penaltyValue}>50% of your compensation</span>
            </div>

            <div className={styles.penaltyItem}>
              <span className={styles.penaltyLabel}>Missing return report:</span>
              <span className={styles.penaltyValue}>50% of your compensation</span>
            </div>
          </div>
        </div>

        {/* معلومات إضافية (Additional Information) */}
        <div>
          <div className={styles.penaltiesCardBox}>
            <span className={styles.penaltiesMainTitle}>Additional Information</span>
            <div className={styles.penaltyItem}>
              <span className={styles.penaltyLabel}>Notes:</span>
              <span className={styles.penaltyValue}>Mercedes-Benz EQS 580</span>
            </div>
          </div>
        </div>

        {/* قسم الأسعار وتقديم العرض (Your Price) */}
        <div>
          <div className={styles.priceSectionBox}>
            <span className={styles.penaltiesMainTitle}>Your PRICE</span>
            
            <div className={styles.priceInputRow}>
              <input 
                type="text" 
                placeholder="enter your price here" 
                className={styles.customPriceInput}
              />
              <select className={styles.customSelectInput}>
                <option>Offer Duration</option>
              </select>
            </div>

            <button className={styles.submitOfferBtn}>
              SUBMIT PRICE OFFER
            </button>

            <span className={styles.avgMarketText}>Avg. market quote: €290,00</span>

            <div className={styles.totalPriceRow}>
              <span className={styles.totalPriceLabel}>Total Price</span>
              <span className={styles.totalPriceValue}>€426,80</span>
            </div>
          </div>
        </div>

        {/* زر قبول العرض النهائي (Accept Offer) */}
        <div style={{ marginBottom: '1.5rem' }}>
          <button className={styles.acceptOfferBtn}>
            ACCEPT OFFER
          </button>
        </div>

      </div>
    </div>
  );
}