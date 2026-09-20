// guide/_components/tabs/GetStartTab.tsx
'use client';

import React, { useState, useRef } from 'react';
import styles from '../DriverGuide.module.css';

export const GetStartTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const overviewRef = useRef<HTMLElement>(null);
  const setupRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLElement>(null);
  const tipsRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string, ref: React.RefObject<HTMLElement | null>) => {
    setActiveSection(sectionId);
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={styles['get-start-grid']}>
      {/* 1. Side Anchor Navigation */}
      <aside className={styles['side-nav']}>
        <div className={styles['side-nav-title']}>On this page</div>
        <ul className={styles['side-nav-list']}>
          <li
            className={`${styles['side-nav-item']} ${
              activeSection === 'overview' ? styles['side-nav-item--active'] : ''
            }`}
            onClick={() => scrollToSection('overview', overviewRef)}
          >
            Platform Overview
          </li>
          <li
            className={`${styles['side-nav-item']} ${
              activeSection === 'setup' ? styles['side-nav-item--active'] : ''
            }`}
            onClick={() => scrollToSection('setup', setupRef)}
          >
            Account Setup
          </li>
          <li
            className={`${styles['side-nav-item']} ${
              activeSection === 'video' ? styles['side-nav-item--active'] : ''
            }`}
            onClick={() => scrollToSection('video', videoRef)}
          >
            Your First Trip
          </li>
          <li
            className={`${styles['side-nav-item']} ${
              activeSection === 'tips' ? styles['side-nav-item--active'] : ''
            }`}
            onClick={() => scrollToSection('tips', tipsRef)}
          >
            Success Tips
          </li>
        </ul>
      </aside>

      {/* 2. Main Content Body */}
      <main className={styles['main-content']}>
        {/* Section 1: Platform Overview */}
        <section ref={overviewRef} className={styles['scroll-section']}>
          <div className={styles['hero-section']}>
            <h2 className={styles['hero-title']}>Welcome to XCARBOX Guide</h2>
            <p className={styles['hero-desc']}>
              The definitive manual for elite transport logistics and vehicle management within the XCARBOX ecosystem.
            </p>
            
            <div className={styles['logo-illustration-box']}>
              <div className={styles['xcarbox-logo-symbol']}>
                <span>XCB</span>
              </div>
            </div>
          </div>

          <div className={styles['info-banner']}>
            <div className={styles['info-banner-icon']}>ℹ️</div>
            <div>
              <h4 className={styles['info-banner-title']}>European Expansion Protocol</h4>
              <p className={styles['info-banner-text']}>
                XCARBOX is now fully operational across 12 major European hubs. Ensure your vehicle diagnostics meet Euro 6 emissions standards before initiating cross-border logistics routes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Account Setup */}
        <section ref={setupRef} className={`${styles['section-block']} ${styles['scroll-section']}`}>
          <h3 className={styles['section-block-title']}>MARKETPLACE VS MANAGED SERVICE</h3>
          
          <div className={styles['comparison-table-wrapper']}>
            <table className={styles['comparison-table']}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Feature</th>
                  <th style={{ width: '35%' }}>Marketplace</th>
                  <th style={{ width: '35%' }}>Managed Service</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fleet Autonomy</td>
                  <td>Full Operator Control</td>
                  <td>Centralized Dispatch</td>
                </tr>
                <tr>
                  <td>Pricing Model</td>
                  <td>Dynamic Bidding</td>
                  <td>Fixed-Rate Contract</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>Owner Responsibility</td>
                  <td>Network Authorized Centers</td>
                </tr>
                <tr>
                  <td>Insurance</td>
                  <td>Standard Liability</td>
                  <td>XCARBOX Platinum Coverage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Your First Trip */}
        <section ref={videoRef} className={`${styles['section-block']} ${styles['scroll-section']}`}>
          <h3 className={styles['section-block-title']}>HOW TO USE THE DRIVER APP</h3>
          
          <div className={styles['video-player-box']}>
            <div className={styles['video-overlay']}>
              <button type="button" className={styles['video-play-btn']}>
                ▶
              </button>
            </div>
            <span className={styles['video-tag']}>Quick Tutorial</span>
          </div>
          <p className={styles['video-caption']}>
            Step-by-step video walkthrough of the XCARBOX Driver interface, from initial login to final trip verification and automated payment receipt.
          </p>
        </section>

        {/* Section 4: Success Tips */}
        <section ref={tipsRef} className={styles['scroll-section']}>
          <div className={styles['cards-grid-2']}>
            <div className={styles['tip-card']}>
              <div className={styles['tip-card-header']}>
                <span className={styles['tip-card-title']}>⚡ Route Optimization</span>
                <span className={styles['badge-blue']}>PRO TIP</span>
              </div>
              <p className={styles['tip-card-desc']}>
                Using the built-in route optimizer reduces fuel consumption by 14% and manages trip schedules 20m faster.
              </p>
            </div>

            <div className={styles['tip-card']}>
              <div className={styles['tip-card-header']}>
                <span className={styles['tip-card-title']}>🛡️ Verification Status</span>
                <span className={styles['badge-red']}>SECURITY</span>
              </div>
              <p className={styles['tip-card-desc']}>
                Maintain a valid license to access Tier 1 High Value Transport Protocols and priority support hub.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Download CTA Section */}
        <section className={styles['bottom-cta-section']}>
          <h3 className={styles['bottom-cta-title']}>Download the Full Guide</h3>
          <p className={styles['bottom-cta-desc']}>
            Click the button below to download a PDF. You have all explanations, instruction and Rules of the <strong>XCARBOX</strong> platform.
          </p>
          <button type="button" className={styles['btn-download-full']}>
            DOWNLOAD FULL GUIDE <span>📥</span>
          </button>
        </section>
      </main>
    </div>
  );
};

export default GetStartTab;