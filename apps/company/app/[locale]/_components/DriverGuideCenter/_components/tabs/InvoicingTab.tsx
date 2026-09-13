// _components/tabs/InvoicingTab.tsx
'use client';

import React from 'react';
import styles from '../../DriverGuideCenter.module.css';
import InfoCallout from '../common/InfoCallout';

export const InvoicingTab: React.FC = () => {
  return (
    <div className={styles['xcar-tab-page']}>
      {/* Billing Overview Section */}
      <section id="billing-overview" className={styles['xcar-guide-section']}>
        <h2 className={styles['xcar-section-heading']}>Billing & Invoicing Overview</h2>
        <p className={styles['xcar-section-p']}>
          Manage corporate billing, VAT breakdowns, and automated monthly payment statements.
        </p>

        <InfoCallout title="Escrow Payment Protection" type="success">
          <p>
            All payments are held securely in escrow upon job confirmation and are released only when transport proof is submitted and approved.
          </p>
        </InfoCallout>
      </section>

      <hr className={styles['xcar-divider']} />

      {/* Payment Methods Section */}
      <section id="payment-methods" className={styles['xcar-guide-section']}>
        <h2 className={styles['xcar-section-heading']}>Supported Payment Methods</h2>
        <p className={styles['xcar-section-p']}>
          Configure company credit cards, SEPA direct debit, or corporate bank transfers.
        </p>
      </section>
    </div>
  );
};

export default InvoicingTab;