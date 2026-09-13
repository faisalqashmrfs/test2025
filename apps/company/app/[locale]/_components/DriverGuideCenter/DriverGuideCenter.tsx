// apps/company/app/[locale]/driver-guide/_components/DriverGuideCenter/DriverGuideCenter.tsx
'use client';

import React, { useState, useMemo } from 'react';
import styles from './DriverGuideCenter.module.css';
import DocumentsTab from './_components/tabs/DocumentsTab';
import RulesTab from './_components/tabs/RulesTab';
import FaqTab from './_components/tabs/FaqTab';
// Import Tab Components
import GetStartTab from './_components/tabs/GetStartTab';
import HowSystemWorkTab from './_components/tabs/HowSystemWorkTab';
import InvoicingTab from './_components/tabs/InvoicingTab';

// Import Shared UI & Data
import { GUIDE_TABS } from './_data/guideTabsConfig';
import HeaderBar from './_components/common/HeaderBar';
import SidebarNav from './_components/common/SidebarNav';

export const DriverGuideCenter: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('get-start');

  // احصل على التبويب النشط وبياناته (بما فيها أقسام القائمة الجانبية)
  const currentTab = useMemo(() => {
    return GUIDE_TABS.find((t) => t.id === activeTabId) || GUIDE_TABS[0];
  }, [activeTabId]);

  const [activeSection, setActiveSection] = useState<string>(
    currentTab.sections[0]?.id || ''
  );

  // عند تغيير التبويب العلوي، افتح أول قسم تلقائياً
  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
    const targetTab = GUIDE_TABS.find((t) => t.id === tabId);
    if (targetTab && targetTab.sections.length > 0) {
      setActiveSection(targetTab.sections[0].id);
    }
  };

  // Smooth Scroll للوصول للقسم الداخلي
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles['xcar-guide-container']}>
      {/* Header العلوي والتبويبات */}
      <HeaderBar
        tabs={GUIDE_TABS}
        activeTab={activeTabId}
        onSelectTab={handleTabChange}
      />

      {/* منطقة المحتوى القابلة للتغيير */}
      <div className={styles['xcar-guide-layout']}>
        {/* القائمة الجانبية تتحدث تلقائياً حسب التبويب النشط */}
        <SidebarNav
          sections={currentTab.sections}
          activeSection={activeSection}
          onSelectSection={handleScrollToSection}
        />

        {/* عرض الصفحة المناسبة للتبويب */}
        <main className={styles['xcar-content-stream']}>
          {activeTabId === 'get-start' && <GetStartTab />}
          {activeTabId === 'how-system-work' && <HowSystemWorkTab />}
          {activeTabId === 'invoicing' && <InvoicingTab />}
          {activeTabId === 'documents' && <DocumentsTab />}
          {activeTabId === 'rules' && <RulesTab />}
          {activeTabId === 'faq' && <FaqTab />}
          
        
          
        </main>
      </div>
    </div>
  );
};

export default DriverGuideCenter;