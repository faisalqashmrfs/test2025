'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SidebarItem } from '@xcarbox/ui';
import { UserRole } from '@xcarbox/contracts';
import { dictionaries, Locale, defaultLocale, locales } from '@xcarbox/i18n';
import { Icon } from './Icon';
import styles from './components.module.css'; // استيراد CSS Module

interface CompanySidebarProps {
  userRole?: UserRole;
  locale: string;
}

export const CompanySidebar = ({ userRole, locale }: CompanySidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const validLocale: Locale = (dictionaries as Record<string, unknown>)[locale]
    ? (locale as Locale)
    : defaultLocale;

  const dict = dictionaries[validLocale];
  const t = dict.sidebar;

  const handleLanguageChange = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const navItems = [
    { label: t.overview, href: `/${locale}`, icon: <Icon name="LayoutDashboard" /> },
    { label: t.tripRequests, href: `/${locale}/trip-requests`, icon: <Icon name="Car" /> },
    { label: t.offers, href: `/${locale}/offers`, icon: <Icon name="Tag" /> },
    { label: t.invoices, href: `/${locale}/invoices`, icon: <Icon name="Receipt" /> },
    { label: t.driverMap, href: `/${locale}/driver-map`, icon: <Icon name="MapPin" /> },
    { label: t.analytics, href: `/${locale}/analytics`, icon: <Icon name="BarChart3" /> },
    { label: t.guide, href: `/${locale}/guide`, icon: <Icon name="BookOpen" /> },
    { label: t.teamMembers, href: `/${locale}/team-members`, icon: <Icon name="Users" /> },
    { label: t.settings, href: `/${locale}/settings`, icon: <Icon name="Settings" /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.logo}>
          XCARBOX
        </div>
        <div className={styles.suploge}>
          Move smarter, earn better
        </div>

        <nav className={styles.navList}>
          {navItems.map((item) => {
            const isActive =
              item.href === `/${locale}`
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : pathname.startsWith(item.href);

            return (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={isActive}
              />
            );
          })}
        </nav>
      </div>

      <div className={styles.langSection}>
        <label className={styles.langLabel}>
          Language / Sprache
        </label>
        <div className={styles.langContainer}>
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`${styles.langButton} ${
                locale === loc ? styles.langButtonActive : ''
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};