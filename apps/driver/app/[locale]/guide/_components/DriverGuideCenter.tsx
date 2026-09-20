// guide/_components/DriverGuideCenter.tsx
'use client';

import React, { useState } from 'react';
import styles from './DriverGuide.module.css';

// استيراد التبويبات
import GetStartTab from './taps/GetStartTab';
import HowSystemWorkTab from './taps/HowSystemWorkTab';
import ProtocolsTab from './taps/ProtocolsTab';
import InvoicingTab from './taps/InvoicingTab';
import DocumentsTab from './taps/DocumentsTab';
import RulesTab from './taps/RulesTab';
import FaqTab from './taps/FaqTab';

export const DriverGuideCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('protocols');

  const tabs = [
    { id: 'get-start', label: 'Get Start' },
    { id: 'how-system-work', label: 'How System Work' },
    { id: 'protocols', label: 'Protocols' },
    { id: 'invoicing', label: 'Invoicing' },
    { id: 'documents', label: 'Documents' },
    { id: 'rules', label: 'Rules' },
    { id: 'faq', label: 'FAQ' },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'get-start':
        return <GetStartTab />;
      case 'how-system-work':
        return <HowSystemWorkTab />;
      case 'protocols':
        return <ProtocolsTab />;
      case 'invoicing':
        return <InvoicingTab />;
      case 'documents':
        return <DocumentsTab />;
      case 'rules':
        return <RulesTab />;
      case 'faq':
        return <FaqTab />;
      default:
        return <GetStartTab />;
    }
  };

  return (
    <div className={styles['guide-container']}>
      {/* Top Timestamp & Header */}
      <div className={styles['guide-header-row']}>
        <div>
          <div className={styles['date-badge']}>Oct 26, 2023 . 08:20AM</div>
          <h1 className={styles['page-title']}>Driver Guide Center</h1>
          <p className={styles['page-subtitle']}>
            Manage how you appear to partners and other members of the network.
          </p>
        </div>
        <div>
          <button type="button" className={styles['btn-download-top']}>
            Download Full Guide <span>📥</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className={styles['tabs-bar']}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles['tab-btn']} ${
              activeTab === tab.id ? styles['tab-btn--active'] : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Body Area */}
      <div className={styles['tab-content-area']}>{renderActiveTab()}</div>
    </div>
  );
};

export default DriverGuideCenter;