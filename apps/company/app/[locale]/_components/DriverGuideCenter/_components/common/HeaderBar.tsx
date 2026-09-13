// _components/common/HeaderBar.tsx
'use client';

import React from 'react';
import styles from '../../DriverGuideCenter.module.css';
import { TabConfig } from '../../_data/guideTabsConfig';

interface HeaderBarProps {
  tabs: TabConfig[];
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  tabs,
  activeTab,
  onSelectTab,
}) => {
  return (
    <div className={styles['xcar-sticky-header-wrapper']}>
      {/* الجزء العلوي: العنوان والتاريخ وزر التحميل */}
      <div className={styles['xcar-header-top']}>
        <div>
          <span className={styles['xcar-date-subtitle']}>
            Oct 26, 2023 . 08:20AM
          </span>
          <h2 className={styles['xcar-page-title']}>Driver Guide Center</h2>
          <p className={styles['xcar-page-desc']}>
            Manage how you appear to partners and other members of the network.
          </p>
        </div>

        <button 
          className={styles['xcar-download-btn']}
          onClick={() => {
            // يمكن إضافة وظيفة تنزيل الـ PDF هنا مستقبلاً
            console.log('Downloading Full Guide...');
          }}
        >
          Download Full Guide <span>📥</span>
        </button>
      </div>

      {/* شريط التبويبات الأفقية العلوية */}
      <div className={styles['xcar-tabs-nav']}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`${styles['xcar-tab-btn']} ${
                isActive ? styles['xcar-tab-btn--active'] : ''
              }`}
              onClick={() => onSelectTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderBar;