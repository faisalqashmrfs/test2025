'use client';
import React from 'react';
import { Search, RotateCw, HelpCircle, Bell } from 'lucide-react';
// @ts-ignore
import styles from './../../styles/style.module.css';

interface HeaderProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onRefresh?: () => void;
  onHelp?: () => void;
  onNotifications?: () => void;
}

export const Header = ({
  placeholder = 'name@email.com',
  onSearch,
  onRefresh,
  onHelp,
  onNotifications,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      {/* حقل البحث */}
      <div className={styles.searchWrapper}>
        <Search className={styles.searchIcon} size={18} />
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>

      {/* أدوات الهيدر */}
      <div className={styles.actions}>
        <button type="button" onClick={onRefresh} className={styles.iconBtn} title="Refresh">
          <RotateCw size={18} />
        </button>

        <button type="button" onClick={onHelp} className={styles.iconBtn} title="Help">
          <HelpCircle size={18} />
        </button>

        <button type="button" onClick={onNotifications} className={styles.iconBtn} title="Notifications">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
};