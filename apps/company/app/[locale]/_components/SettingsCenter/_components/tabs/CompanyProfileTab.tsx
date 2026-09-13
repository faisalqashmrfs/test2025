// settings/_components/tabs/CompanyProfileTab.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../SettingsCenter.module.css';

export const CompanyProfileTab: React.FC = () => {
  const [formData, setFormData] = useState({
    legalName: '',
    businessType: '',
    registrationNumber: '',
    vatNumber: '',
    description: '',
  });

  return (
    <div className={styles['settings-tab-content']}>
      <div className={styles['company-profile-grid']}>
        
        {/* Left Column: Company Logo Box */}
        <div className={styles['settings-card']}>
          <h3 className={styles['card-title']}>Company Logo</h3>
          <div className={styles['logo-upload-container']}>
            <div className={styles['logo-preview-box']}>
              {/* استبدل المظلة أو الصورة المبدئية */}
              <div className={styles['logo-placeholder-img']}>
                <span>NeuroSpark AI</span>
              </div>
            </div>
            <span className={styles['upload-hint']}>JPG, GIF or PNG. Max size of 800K</span>
            <div className={styles['logo-actions']}>
              <button type="button" className={styles['action-link']}>
                Upload <span>📥</span>
              </button>
              <button type="button" className={`${styles['action-link']} ${styles['action-link--danger']}`}>
                Remove <span>🗑️</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Main Information Form */}
        <div className={styles['settings-card']}>
          <h3 className={styles['card-title']}>Main Information Form</h3>
          
          <div className={styles['form-grid']}>
            {/* Legal Business Name */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>Legal Business Name</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <input 
                type="text" 
                placeholder="eg... Business Name"
                value={formData.legalName}
                onChange={(e) => setFormData({...formData, legalName: e.target.value})}
              />
            </div>

            {/* Business Type */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>Business Type</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <select 
                value={formData.businessType}
                onChange={(e) => setFormData({...formData, businessType: e.target.value})}
              >
                <option value="">select your from Options</option>
                <option value="llc">LLC</option>
                <option value="corporation">Corporation</option>
              </select>
            </div>

            {/* Registration Number */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>Registration Number</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <input 
                type="text" 
                placeholder="eg.. 123456789"
                value={formData.registrationNumber}
                onChange={(e) => setFormData({...formData, registrationNumber: e.target.value})}
              />
            </div>

            {/* VAT Number */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>VAT Number</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <input 
                type="text" 
                placeholder="eg.. 123456789"
                value={formData.vatNumber}
                onChange={(e) => setFormData({...formData, vatNumber: e.target.value})}
              />
            </div>

            {/* Company Description (Full Row) */}
            <div className={`${styles['input-group']} ${styles['full-width']}`}>
              <div className={styles['label-row']}>
                <label>Company Description</label>
              </div>
              <textarea 
                rows={3}
                placeholder="a short description about the company"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyProfileTab;