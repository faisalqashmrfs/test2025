// _components/tabs/GetStartTab.tsx
import React from 'react';
import styles from '../../DriverGuideCenter.module.css';
import PlatformOverview from '../PlatformOverview';
import AccountSetup from '../AccountSetup';
import YourFirstRequest from '../your-first-request';
import TeamRoles from '../team-roles';
import SuccessTips from '../success-tips';
import InfoCallout from '../common/InfoCallout';

export const GetStartTab: React.FC = () => {
  return (
    <div className={styles['xcar-tab-page']}>
      {/* Hero Banner Section */}
      <section className={styles['xcar-welcome-hero']}>
        <h1 className={styles['xcar-welcome-title']}>Welcome to XCARBOX for Business</h1>
        <p className={styles['xcar-welcome-desc']}>
          The complete operations manual for managing your fleet transport through the XCARBOX ecosystem.
          Everything your team needs to post requests, manage offers, track vehicles, and handle payments — all in one place.
        </p>
        <div className={styles['xcar-brand-banner']}>
          <div className={styles['xcar-logo-placeholder']}>
            <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 20 L70 20 L110 60 L150 20 L200 20 L135 75 L85 75 Z"
                fill="#0b172a"
                stroke="#1a2b4c"
                strokeWidth="3"
              />
              <text x="75" y="55" fill="#ffffff" fontSize="26" fontWeight="900" fontFamily="sans-serif">
                XCB
              </text>
            </svg>
          </div>
        </div>
      </section>

      <hr className={styles['xcar-divider']} />

      {/* Protocol Callout Card باستعمال المكون المشترك */}
      <InfoCallout title="European Expansion Protocol">
        <p>
          XCARBOX is now fully operational across 12 major European hubs. Before initiating any cross-border
          logistics routes, ensure your company documents meet the compliance standards of each destination
          country. Visit the Rules & Compliance tab for full details.
        </p>
      </InfoCallout>

      {/* الأقسام المكونة */}
      <PlatformOverview />
      <AccountSetup />
      <YourFirstRequest />
      <TeamRoles />
      <SuccessTips />
    </div>
  );
};

export default GetStartTab;