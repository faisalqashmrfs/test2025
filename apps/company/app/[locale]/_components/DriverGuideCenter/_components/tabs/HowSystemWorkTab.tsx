// _components/tabs/HowSystemWorkTab.tsx
'use client';

import React from 'react';
import styles from '../../DriverGuideCenter.module.css';
import InfoCallout from '../common/InfoCallout';

export const HowSystemWorkTab: React.FC = () => {
  return (
    <div className={styles['xcar-tab-page']}>
      {/* Overview Section */}
      <section id="architecture" className={styles['xcar-guide-section']}>
        <h2 className={styles['xcar-section-heading']}>System Architecture & Workflow</h2>
        <p className={styles['xcar-section-p']}>
          Understand how XCARBOX connects business clients, dispatchers, and individual drivers in real time.
        </p>

        <InfoCallout title="Automated Dispatch Engine" type="info">
          <p>
            Our intelligent matching algorithm assigns jobs based on proximity, driver rating, vehicle capacity, and historic route efficiency.
          </p>
        </InfoCallout>
      </section>

      <hr className={styles['xcar-divider']} />

      {/* Dispatch Logic Section */}
      <section id="dispatch-flow" className={styles['xcar-guide-section']}>
        <h2 className={styles['xcar-section-heading']}>Dispatch Flow & Rules</h2>
        <p className={styles['xcar-section-p']}>
          Learn how requests move from creation to assignment and completion.
        </p>
      </section>
    </div>
  );
};

export default HowSystemWorkTab;