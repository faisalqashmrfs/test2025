'use client';

import React from 'react';
import Link from 'next/link';
// @ts-ignore
import style from '../styles/style.module.css';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

export const SidebarItem = ({ icon, label, href, isActive }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={`${style.sidebarItem} ${isActive ? style.active : ''}`}
    >
      <span className={style.icon}>
        {icon}
      </span>
      <span className={style.label}>{label}</span>
    </Link>
  );
};