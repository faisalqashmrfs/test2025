// settings/SettingsCenter.tsx
'use client';

import React, { useState } from 'react';
import styles from './SettingsCenter.module.css';

import SettingsHeader from './_components/common/SettingsHeader';
import FormFooterActions from './_components/common/FormFooterActions';

// Import Tabs
import CompanyProfileTab from './_components/tabs/CompanyProfileTab';
import ContactAddressTab from './_components/tabs/ContactAddressTab';
import SecurityTab from './_components/tabs/SecurityTab';
import DocumentsVerificationTab from './_components/tabs/DocumentsVerificationTab';
import PaymentTab from './_components/tabs/PaymentTab';
import NotificationsTab from './_components/tabs/NotificationsTab';

export const SettingsCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('company-profile');

  const handleSave = () => {
    console.log('Saving settings for tab:', activeTab);
  };

  const handleCancel = () => {
    console.log('Cancelled changes');
  };

  return (
    <div className={styles['settings-container']}>
      {/* Header with Nav Tabs */}
      <SettingsHeader activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Dynamic Tab Body */}
      <main className={styles['settings-body']}>
        {activeTab === 'company-profile' && <CompanyProfileTab />}
        {activeTab === 'contact-address' && <ContactAddressTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'documents-verification' && <DocumentsVerificationTab />}
        {activeTab === 'payment' && <PaymentTab />}
        {activeTab === 'notifications' && <NotificationsTab />}
      </main>

      {/* Global Save/Cancel Footer Actions */}
      <FormFooterActions onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default SettingsCenter;