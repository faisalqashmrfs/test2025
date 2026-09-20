'use client';

import React from 'react';
import { 
  MapPin, 
  Flag, 
  Calendar, 
  ChevronDown, 
  RotateCw 
} from 'lucide-react';
import styles from './AvailableOffersHeader.module.css';
import ActiveTripBar from './ActiveTripBar';

const SafeMapPin = MapPin as unknown as React.FC<any>;
const SafeFlag = Flag as unknown as React.FC<any>;
const SafeCalendar = Calendar as unknown as React.FC<any>;
const SafeChevronDown = ChevronDown as unknown as React.FC<any>;
const SafeRotateCw = RotateCw as unknown as React.FC<any>;

interface AvailableOffersHeaderProps {
  locale: string;
  onOpenSidebar?: () => void;
  currentViewMode: 'cards' | 'table' | 'map';
  onViewModeChange: (mode: 'cards' | 'table' | 'map') => void;
}

export default function AvailableOffersHeader({ 
  locale, 
  onOpenSidebar, 
  currentViewMode, 
  onViewModeChange 
}: AvailableOffersHeaderProps) {
  return (
    <div className={styles.offersHeaderRoot}>
      
      {/* 0. شريط الرحلة النشطة الثابت في أعلى الترويسة لجميع صفحات الـ Trips */}
      <ActiveTripBar onViewDetails={onOpenSidebar} />

      {/* 1. معلومات الوقت والزر العلوي وتبديل العرض */}
      <div className={styles.topInfoBar}>
        <div className={styles.dateAndBadge}>
          <span>Oct 26, 2023, 08:20AM</span>
          <span className={styles.newOffersBadge}>12 New Offers</span>
        </div>
        <div className={styles.viewModeToggleGroup}>
          <button 
            onClick={() => onViewModeChange('map')}
            className={currentViewMode === 'map' ? styles.viewModeBtnActive : styles.viewModeBtnInactive}
          >
            Map
          </button>
          <button 
            onClick={() => onViewModeChange('table')}
            className={currentViewMode === 'table' ? styles.viewModeBtnActive : styles.viewModeBtnInactive}
          >
            Table
          </button>
          <button 
            onClick={() => onViewModeChange('cards')}
            className={currentViewMode === 'cards' ? styles.viewModeBtnActive : styles.viewModeBtnInactive}
          >
            Cards
          </button>
        </div>
      </div>

      {/* 2. عنوان الصفحة الرئيسي */}
      <h1 className={styles.pageMainTitle}>Available Offers</h1>

      {/* 3. شبكة حقول الفلترة المتقدمة (الصف الأول) */}
      <div className={styles.filtersGrid}>
        <div className={styles.filterInputBox}>
          <span>Pickup City</span>
          <SafeMapPin className="w-4 h-4 text-gray-400" />
        </div>
        <div className={styles.filterInputBox}>
          <span>Delivery City</span>
          <SafeFlag className="w-4 h-4 text-gray-400" />
        </div>
        <div className={styles.filterInputBox}>
          <span>Pickup Date</span>
          <SafeCalendar className="w-4 h-4 text-gray-400" />
        </div>
        <div className={styles.filterInputBox}>
          <span>Delivery Date</span>
          <SafeCalendar className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* 3. شبكة حقول الفلترة المتقدمة (الصف الثاني) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className={styles.filterSelectBox}>
          <span>Company</span>
          <SafeChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        <div className={styles.filterSelectBox}>
          <span>Transport type</span>
          <SafeChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        <div className={styles.filterSelectBox}>
          <span>Sort By</span>
          <SafeChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* 4. شريط التنبيه بالتحديثات */}
      <div className={styles.updateBannerBox}>
        <SafeRotateCw className="w-4 h-4" />
        <span>3 new offers available — tap to load</span>
      </div>

      {/* 5. تبويبات الحالة السفلية */}
      <div className={styles.tabsContainerRow}>
        <button className={styles.tabItemActive}>Market Place</button>
        <button className={styles.tabItemInactive}>Assigned</button>
        <button className={styles.tabItemInactive}>Completed</button>
      </div>

    </div>
  );
}