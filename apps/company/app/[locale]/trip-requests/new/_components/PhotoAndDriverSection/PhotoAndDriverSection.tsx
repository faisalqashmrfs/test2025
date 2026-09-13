// apps/company/app/[locale]/trip-requests/new/_components/PhotoAndDriverSection/PhotoAndDriverSection.tsx
'use client';

import React, { useState } from 'react';
import styles from './PhotoAndDriverSection.module.css';

interface PhotoAndDriverSectionProps {
  locale?: string;
}

const translations: Record<string, any> = {
  de: {
    photoTitle: 'Fotoprotokoll-Paket auswählen',
    required: 'erforderlich',
    driverTitle: 'Fahrerauswahl:',
    assignLabel: 'Fahrer zuweisen',
    statusOn: 'Ein',
    statusOff: 'Aus',
    driverCalloutTitle: 'Hinweis:',
    driverCalloutText: 'Aktivieren Sie dies, um diese Fahrt direkt einem vereinbarten Fahrer zuzuweisen.',
    continueBtn: 'WEITER ->',
    saveDraftBtn: 'ALS ENTWURF SPEICHERN 🔖',
    bundles: {
      basic: {
        label: 'Basis',
        title: '4 Fotos',
        text: 'Sie haben das Basis-Paket gewählt. Es enthält 4 Fotos für die Außenabdeckung aus 4 Winkeln (vorne, hinten und beide Seiten).',
      },
      standard: {
        label: 'Standard',
        title: '8 Fotos',
        text: 'Sie haben das Standard-Paket gewählt. Es enthält 8 Fotos für eine vollständige Außen- und Reifenabdeckung.',
      },
      full: {
        label: 'Vollständig',
        title: '12 Fotos',
        text: 'Sie haben das vollständige Paket gewählt. Es enthält 12 Fotos für die detaillierte Innen- und Außenansicht.',
      },
      premium: {
        label: 'Premium',
        title: '16+ Fotos',
        text: 'Sie haben das Premium-Paket gewählt. Bietet eine lückenlose Fotodokumentation des Fahrzeugs.',
      },
    },
  },
  en: {
    photoTitle: 'Take Photo Protocol Bundle',
    required: 'required',
    driverTitle: 'Driver Assignment:',
    assignLabel: 'Assign to Driver',
    statusOn: 'On',
    statusOff: 'Off',
    driverCalloutTitle: 'callout:',
    driverCalloutText: 'Turn on to assign this trip directly to a specific driver you have already agreed.',
    continueBtn: 'CONTINUE ->',
    saveDraftBtn: 'SAVE AS DRAFT 🔖',
    bundles: {
      basic: {
        label: 'Basic',
        title: '4 Photos',
        text: 'you choose the basic bundle this bundle have 4 photo for four-angle exterior coverage: ( front, rear, and both sides. )',
      },
      standard: {
        label: 'Standard',
        title: '8 Photos',
        text: 'you choose the standard bundle this bundle has 8 photos for full exterior and wheels coverage.',
      },
      full: {
        label: 'Full',
        title: '12 Photos',
        text: 'you choose the full bundle this bundle has 12 photos for detailed interior and exterior coverage.',
      },
      premium: {
        label: 'Premium',
        title: '16+ Photos',
        text: 'you choose the premium bundle offering complete end-to-end photo documentation.',
      },
    },
  },
  fr: {
    photoTitle: 'Pack de Protocole Photo',
    required: 'requis',
    driverTitle: 'Attribution du chauffeur :',
    assignLabel: 'Attribuer à un chauffeur',
    statusOn: 'Activé',
    statusOff: 'Désactivé',
    driverCalloutTitle: 'Remarque :',
    driverCalloutText: 'Activez pour attribuer ce trajet directement à un chauffeur spécifique déjà convenu.',
    continueBtn: 'CONTINUER ->',
    saveDraftBtn: 'ENREGISTRER COMME BROUILLON 🔖',
    bundles: {
      basic: {
        label: 'De base',
        title: '4 Photos',
        text: 'Vous avez choisi le pack de base. Il comprend 4 photos pour la couverture extérieure sous 4 angles (avant, arrière et les deux côtés).',
      },
      standard: {
        label: 'Standard',
        title: '8 Photos',
        text: "Vous avez choisi le pack standard. Il comprend 8 photos pour une couverture complète de l'extérieur et des roues.",
      },
      full: {
        label: 'Complet',
        title: '12 Photos',
        text: "Vous avez choisi le pack complet. Il comprend 12 photos pour une couverture détaillée de l'intérieur et de l'extérieur.",
      },
      premium: {
        label: 'Premium',
        title: '16+ Photos',
        text: 'Vous avez choisi le pack premium offrant une documentation photo exhaustive.',
      },
    },
  },
};

export const PhotoAndDriverSection: React.FC<PhotoAndDriverSectionProps> = ({ locale = 'en' }) => {
  const [photoBundle, setPhotoBundle] = useState<'basic' | 'standard' | 'full' | 'premium'>('basic');
  const [assignToDriver, setAssignToDriver] = useState(false);

  const t = translations[locale] || translations.en;
  const bundleKeys: Array<'basic' | 'standard' | 'full' | 'premium'> = ['basic', 'standard', 'full', 'premium'];

  return (
    <div className={styles['xcar-photo-driver-container']}>
      <section className={styles['xcar-photo-section']}>
        <div className={styles['xcar-photo-section__header']}>
          <h2 className={styles['xcar-photo-section__title']}>{t.photoTitle}</h2>
          <span className={styles['xcar-photo-section__required']}>{t.required}</span>
        </div>

        <div className={styles['xcar-photo-section__options']}>
          {bundleKeys.map((key) => (
            <button
              key={key}
              type="button"
              className={`${styles['xcar-photo-section__btn']} ${
                photoBundle === key ? styles['xcar-photo-section__btn--active'] : ''
              }`}
              onClick={() => setPhotoBundle(key)}
            >
              {t.bundles[key].label}
            </button>
          ))}
        </div>

        <div className={styles['xcar-callout-box']}>
          <div className={styles['xcar-callout-box__icon']}>⚠️</div>
          <div className={styles['xcar-callout-box__content']}>
            <strong className={styles['xcar-callout-box__title']}>
              {t.bundles[photoBundle].title}
            </strong>
            <p className={styles['xcar-callout-box__text']}>
              {t.bundles[photoBundle].text}
            </p>
          </div>
        </div>
      </section>

      <section className={styles['xcar-driver-card']}>
        <h3 className={styles['xcar-driver-card__title']}>{t.driverTitle}</h3>

        <div className={styles['xcar-driver-card__inner']}>
          <div className={styles['xcar-driver-card__switch-row']}>
            <span className={styles['xcar-driver-card__label']}>{t.assignLabel}</span>
            <div className={styles['xcar-driver-card__switch-wrapper']}>
              <span className={styles['xcar-driver-card__status-text']}>
                {assignToDriver ? t.statusOn : t.statusOff}
              </span>
              <label className={styles['xcar-driver-card__switch']}>
                <input
                  type="checkbox"
                  checked={assignToDriver}
                  onChange={(e) => setAssignToDriver(e.target.checked)}
                />
                <span className={styles['xcar-driver-card__slider']} />
              </label>
            </div>
          </div>

          <div className={styles['xcar-callout-box']}>
            <div className={styles['xcar-callout-box__icon']}>⚠️</div>
            <div className={styles['xcar-callout-box__content']}>
              <strong className={styles['xcar-callout-box__title']}>{t.driverCalloutTitle}</strong>
              <p className={styles['xcar-callout-box__text']}>
                {t.driverCalloutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles['xcar-footer-actions']}>
        <button type="button" className={styles['xcar-footer-actions__continue-btn']}>
          {t.continueBtn}
        </button>
        <button type="button" className={styles['xcar-footer-actions__draft-btn']}>
          {t.saveDraftBtn}
        </button>
      </div>
    </div>
  );
};

export default PhotoAndDriverSection;