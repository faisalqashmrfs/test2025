// settings/_components/tabs/PaymentTab.tsx
'use client';

import React, { useState } from 'react';
import styles from '../../SettingsCenter.module.css';

export const PaymentTab: React.FC = () => {
  const [formData, setFormData] = useState({
    accountName: '',
    bankName: '',
    iban: '',
    swiftCode: '',
    billingCurrency: '',
    invoiceLanguage: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles['settings-tab-content']}>
      <div className={styles['settings-card']}>
        <h3 className={styles['card-title']}>Bank & Billing Information</h3>

        <div className={styles['form-grid-2']}>
          {/* Account Name */}
          <div className={styles['input-group']}>
            <div className={styles['label-row']}>
              <label>Account Name</label>
              <span className={styles['required-tag']}>required</span>
            </div>
            <input
              type="text"
              placeholder="e.g... Name"
              value={formData.accountName}
              onChange={(e) => handleChange('accountName', e.target.value)}
            />
          </div>

          {/* Bank Name */}
          <div className={styles['input-group']}>
            <div className={styles['label-row']}>
              <label>Bank Name</label>
              <span className={styles['required-tag']}>required</span>
            </div>
            <select
              value={formData.bankName}
              onChange={(e) => handleChange('bankName', e.target.value)}
            >
              <option value="">select state</option>
              <option value="db">Deutsche Bank</option>
              <option value="cb">Commerzbank</option>
              <option value="n26">N26</option>
            </select>
          </div>

          {/* IBAN */}
          <div className={styles['input-group']}>
            <div className={styles['label-row']}>
              <label>IBAN</label>
              <span className={styles['required-tag']}>required</span>
            </div>
            <input
              type="text"
              placeholder="e.g... name@email.com"
              value={formData.iban}
              onChange={(e) => handleChange('iban', e.target.value)}
            />
          </div>

          {/* BIC / SWIFT Code */}
          <div className={styles['input-group']}>
            <div className={styles['label-row']}>
              <label>BIC / SWIFT Code</label>
              <span className={styles['required-tag']}>required</span>
            </div>
            <input
              type="text"
              placeholder="e.g... name@email.com"
              value={formData.swiftCode}
              onChange={(e) => handleChange('swiftCode', e.target.value)}
            />
          </div>

          {/* Billing Currency */}
          <div className={styles['input-group']}>
            <div className={styles['label-row']}>
              <label>Billing Currency</label>
            </div>
            <select
              value={formData.billingCurrency}
              onChange={(e) => handleChange('billingCurrency', e.target.value)}
            >
              <option value="">select Currency</option>
              <option value="EUR">EUR (€)</option>
              <option value="USD">USD ($)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>

          {/* Invoice Language */}
          <div className={styles['input-group']}>
            <div className={styles['label-row']}>
              <label>Invoice Language</label>
            </div>
            <select
              value={formData.invoiceLanguage}
              onChange={(e) => handleChange('invoiceLanguage', e.target.value)}
            >
              <option value="">select Language</option>
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTab;