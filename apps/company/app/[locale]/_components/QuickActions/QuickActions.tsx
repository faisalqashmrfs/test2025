// apps/company/app/[locale]/_components/QuickActions/QuickActions.tsx

'use client';

import React from 'react';
import { ActionButton } from '@xcarbox/ui';
import { dictionaries, Locale, defaultLocale } from '@xcarbox/i18n';
import { Icon } from '../Icon';
// @ts-ignore
import styles from './QuickActions.module.css';

interface QuickActionsProps {
  locale: string;
}

export const QuickActions = ({ locale }: QuickActionsProps) => {
  const validLocale: Locale = (dictionaries as Record<string, unknown>)[locale]
    ? (locale as Locale)
    : defaultLocale;
  const dict = dictionaries[validLocale] as Record<string, any>;
  const t = dict.overview || {};

  return (
    <section className={styles.quickActions_section}>
      <h2 className={styles.quickActions_title}>{t.quickActions || 'Quick Actions'}</h2>

      <div className={styles.quickActions_flexWrapper}>
        <div className={styles.quickActions_buttonItem}>
          <ActionButton
            icon={<Icon name="PlusSquare" className="w-4 h-4" />}
            onClick={() => console.log('Start new request')}
          >
            {t.startNewRequest || 'START NEW REQUEST'}
          </ActionButton>
        </div>

        <div className={styles.quickActions_buttonItem}>
          <ActionButton
            icon={<Icon name="Sliders" className="w-4 h-4" />}
            onClick={() => console.log('Invite team member')}
          >
            {t.inviteTeamMember || 'INVITE TEAM MEMBER'}
          </ActionButton>
        </div>

        <div className={styles.quickActions_buttonItem}>
          <ActionButton
            icon={<Icon name="ChevronRight" className="w-4 h-4" />}
            onClick={() => console.log('View all new offers')}
          >
            {t.viewAllNewOffers || 'VIEW ALL NEW OFFERS'}
          </ActionButton>
        </div>
      </div>
    </section>
  );
};