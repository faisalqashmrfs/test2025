// apps/company/app/[locale]/trip-requests/new/_components/NewTripHeader.tsx
import React from 'react';
import styles from './NewTripHeader.module.css';

interface NewTripHeaderProps {
  locale?: string;
  date?: string;
  title?: string;
  parentBreadcrumb?: string;
  currentBreadcrumb?: string;
}

const translations: Record<string, { title: string; parentBreadcrumb: string; currentBreadcrumb: string }> = {
  de: {
    title: 'Neue Fahrtanfrage',
    parentBreadcrumb: 'Meine Anfragen',
    currentBreadcrumb: 'Neue Fahrtanfrage',
  },
  en: {
    title: 'New Trip Request',
    parentBreadcrumb: 'My Requests',
    currentBreadcrumb: 'New Trip Request',
  },
  fr: {
    title: 'Nouvelle demande de trajet',
    parentBreadcrumb: 'Mes demandes',
    currentBreadcrumb: 'Nouvelle demande de trajet',
  },
};

export const NewTripHeader: React.FC<NewTripHeaderProps> = ({
  locale = 'en',
  date = 'Oct 26, 2023 . 08:00 AM',
  title,
  parentBreadcrumb,
  currentBreadcrumb,
}) => {
  const t = translations[locale] || translations.en;

  const displayTitle = title ?? t.title;
  const displayParent = parentBreadcrumb ?? t.parentBreadcrumb;
  const displayCurrent = currentBreadcrumb ?? t.currentBreadcrumb;

  return (
    <header className={styles['xcar-trip-header']}>
      <span className={styles['xcar-trip-header__date']}>{date}</span>
      <h1 className={styles['xcar-trip-header__title']}>{displayTitle}</h1>
      <nav className={styles['xcar-trip-header__breadcrumb']} aria-label="Breadcrumb">
        <span className={styles['xcar-trip-header__breadcrumb-item']}>{displayParent}</span>
        <span className={styles['xcar-trip-header__breadcrumb-arrow']} aria-hidden="true">
          -&gt;
        </span>
        <span className={styles['xcar-trip-header__breadcrumb-item--active']}>{displayCurrent}</span>
      </nav>
    </header>
  );
};

export default NewTripHeader;