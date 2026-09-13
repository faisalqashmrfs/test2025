'use client';

import React from 'react';
import styles from '../../DriverGuideCenter.module.css';

export const FaqTab: React.FC = () => {
  return (
    <div className={styles['xcar-tab-page']}>
      <section id="required-docs" className={styles['xcar-guide-section']}>
        <h2 className={styles['xcar-section-heading']}>Frequently Asked Questions</h2>
        <p className={styles['xcar-section-p']}>قيد الإنشاء...</p>
      </section>
    </div>
  );
};

export default FaqTab;