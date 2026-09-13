// settings/_components/common/SettingsHeader.tsx
'use client';

import React from 'react';
import styles from '../../SettingsCenter.module.css';
import { SETTINGS_TABS, SettingsTabItem } from '../../_data/settingsTabsConfig';

interface SettingsHeaderProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  isVerified?: boolean;
}

export const SettingsHeader: React.FC<SettingsHeaderProps> = ({
  activeTab,
  onSelectTab,
  isVerified = true,
}) => {
  return (
    <div className={styles['settings-header-wrapper']}>
      {/* Top Header */}
      <div className={styles['settings-header-top']}>
        <div>
          <span className={styles['settings-date-subtitle']}>Oct 26, 2023 . 08:20AM</span>
          <h2 className={styles['settings-page-title']}>Settings</h2>
          <p className={styles['settings-page-desc']}>
            Manage how you appear to partners and other members of the network.
          </p>
        </div>

        {/* Account Verified Badge */}
        {isVerified && (
          <div className={styles['settings-verified-badge']}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>ACCOUNT VERIFIED</span>
          </div>
        )}
      </div>

      {/* Tabs Navigation Bar */}
      <div className={styles['settings-tabs-nav']}>
        {SETTINGS_TABS.map((tab: SettingsTabItem) => (
          <button
            key={tab.id}
            className={`${styles['settings-tab-btn']} ${
              activeTab === tab.id ? styles['settings-tab-btn--active'] : ''
            }`}
            onClick={() => onSelectTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsHeader;