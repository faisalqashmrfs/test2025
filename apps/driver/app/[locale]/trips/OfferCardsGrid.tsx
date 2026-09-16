import React from 'react';
import { 
  Info, 
  Zap, 
  Fuel, 
  Car, 
  ArrowRight, 
  ChevronDown, 
  ExternalLink,
  Weight
} from 'lucide-react';
import styles from './OfferCardsGrid.module.css';

const SafeInfo = Info as unknown as React.FC<any>;
const SafeZap = Zap as unknown as React.FC<any>;
const SafeFuel = Fuel as unknown as React.FC<any>;
const SafeCar = Car as unknown as React.FC<any>;
const SafeArrowRight = ArrowRight as unknown as React.FC<any>;
const SafeChevronDown = ChevronDown as unknown as React.FC<any>;
const SafeExternalLink = ExternalLink as unknown as React.FC<any>;
const SafeWeight = Weight as unknown as React.FC<any>;

interface OfferCardsGridProps {
  locale: string;
  onViewDetails: () => void; // إضافة هذه الخاصية لاستقبال دالة الفتح
}

export default function OfferCardsGrid({ locale, onViewDetails }: OfferCardsGridProps) {
  return (
    <div className={styles.gridContainer}>
      
      {/* ================= كارد 1 (العادي - أزرق داكن) ================= */}
      <div className={styles.offerCard}>
        <div className={styles.cardBorderNormal}></div>
        <div className={styles.cardBody}>
          
          {/* رأس الكارد (الرقم والأيقونات) */}
          <div className={styles.cardHeaderRow}>
            <span className={styles.cardIdText}>XCD-88291</span>
            <div className={styles.cardIconsGroup}>
              <SafeInfo className="w-4 h-4" />
              <SafeZap className="w-4 h-4" />
              <SafeFuel className="w-4 h-4" />
              <SafeCar className="w-4 h-4" />
            </div>
          </div>

          {/* مواقع الاستلام والتسليم */}
          <div className={styles.locationsRow}>
            <div className={styles.locationCol}>
              <span className={styles.locationLabel}>Pickup Location</span>
              <span className={styles.locationCity}>Alstdorfer Str, Hamburg</span>
              <span className={styles.locationDate}>May 12 · 08:00AM - May 13 · 10:00AM</span>
            </div>
            <div className={styles.arrowIconWrapper}>
              <SafeArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className={styles.locationCol}>
              <span className={styles.locationLabel}>Delivery Location</span>
              <span className={styles.locationCity}>Königstraße, Stuttgart</span>
              <span className={styles.locationDate}>May 14 · 08:00AM - May 14 · 10:00AM</span>
            </div>
          </div>

          {/* تفاصيل الشركة والمسافة */}
          <div className={styles.metaInfoRow}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Company</span>
              <span className={styles.metaValue}>Mercedes</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Distance</span>
              <span className={styles.metaValue}>440 km</span>
            </div>
            <div className={styles.companyLogoBox}>
              <span className="font-bold">M</span>
            </div>
          </div>

          {/* قسم إدخال السعر الخاص بك */}
          <div className={styles.yourPriceSection}>
            <span className={styles.yourPriceTitle}>Your PRICE</span>
            <div className={styles.yourPriceInputsRow}>
              <input 
                type="text" 
                placeholder="enter your price here" 
                className={styles.priceInputBox} 
              />
              <div className={styles.priceSelectBox}>
                <span>Offer Duration</span>
                <SafeChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </div>
              <button className={styles.submitBtnBlue}>SUBMIT</button>
            </div>
            <span className={styles.marketQuoteText}>Avg. market quote: €290,00</span>
          </div>

          {/* السعر الثابت وزر القبول */}
          <div className={styles.bottomActionRow}>
            <div className={styles.priceDisplayBlock}>
              <span className={styles.priceLabelSmall}>Price</span>
              <span className={styles.priceNumberBig}>€200,00</span>
            </div>
            <button className={styles.acceptOfferBtnDark}>ACCEPT OFFER</button>
          </div>

          {/* زر عرض التفاصيل */}
          <button className={styles.viewDetailsBtnBlue} onClick={onViewDetails}>
            <span>VIEW DETAILS</span>
            <SafeExternalLink className="w-4 h-4" />
          </button>

        </div>
      </div>

      {/* ================= كارد 2 (المميز - برتقالي) ================= */}
      <div className={styles.offerCard}>
        <div className={styles.cardBorderOrange}></div>
        <div className={styles.cardBody}>
          
          {/* رأس الكارد (الرقم والأيقونات) */}
          <div className={styles.cardHeaderRow}>
            <span className={styles.cardIdTextOrange}>XCC-88291</span>
            <div className={styles.cardIconsGroup}>
              <SafeInfo className="w-4 h-4" />
              <SafeZap className="w-4 h-4" />
              <SafeFuel className="w-4 h-4" />
            </div>
          </div>

          {/* مواقع الاستلام والتسليم */}
          <div className={styles.locationsRow}>
            <div className={styles.locationCol}>
              <span className={styles.locationLabel}>Pickup Location</span>
              <span className={styles.locationCityOrange}>Alstdorfer Str, Hamburg</span>
              <span className={styles.locationDate}>May 12 · 08:00AM - May 13 · 10:00AM</span>
            </div>
            <div className={styles.arrowIconWrapper}>
              <SafeArrowRight className="w-5 h-5 text-amber-600" />
            </div>
            <div className={styles.locationCol}>
              <span className={styles.locationLabel}>Delivery Location</span>
              <span className={styles.locationCityOrange}>Königstraße, Stuttgart</span>
              <span className={styles.locationDate}>May 14 · 08:00AM - May 14 · 10:00AM</span>
            </div>
          </div>

          {/* تفاصيل الشركة، المسافة، الوزن وعدد السيارات */}
          <div className={styles.metaInfoRow}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Company</span>
              <span className={styles.metaValueOrange}>Mercedes</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Distance</span>
              <span className={styles.metaValueOrange}>440 km</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Weight</span>
              <span className={styles.metaValueOrange}>3,500 kg</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Number of Cars</span>
              <span className={styles.metaValueOrange}>3 Cars</span>
            </div>
            <div className={styles.companyLogoBoxOrange}>
              <span className="font-bold">M</span>
            </div>
          </div>

          {/* قسم إدخال السعر الخاص بك */}
          <div className={styles.yourPriceSection}>
            <span className={styles.yourPriceTitle}>Your PRICE</span>
            <div className={styles.yourPriceInputsRow}>
              <input 
                type="text" 
                placeholder="enter your price here" 
                className={styles.priceInputBox} 
              />
              <div className={styles.priceSelectBox}>
                <span>Offer Duration</span>
                <SafeChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </div>
              <button className={styles.submitBtnOrange}>SUBMIT</button>
            </div>
            <span className={styles.marketQuoteText}>Avg. market quote: €290,00</span>
          </div>

          {/* السعر الثابت وزر القبول */}
          <div className={styles.bottomActionRow}>
            <div className={styles.priceDisplayBlock}>
              <span className={styles.priceLabelSmall}>Price</span>
              <span className={styles.priceNumberBigOrange}>€200,00</span>
            </div>
            <button className={styles.acceptOfferBtnOrange}>ACCEPT OFFER</button>
          </div>

          {/* زر عرض التفاصيل */}
          <button className={styles.viewDetailsBtnOrange} onClick={onViewDetails}>
            <span>VIEW DETAILS</span>
            <SafeExternalLink className="w-4 h-4" />
          </button>

        </div>
      </div>

    </div>
  );
}