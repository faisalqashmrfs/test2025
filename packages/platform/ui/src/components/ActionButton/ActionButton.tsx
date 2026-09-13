// packages/ui/src/components/ActionButton/ActionButton.tsx

'use client';

import React from 'react';
// @ts-ignore
import styles from '../../styles/style.module.css';

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary';
  className?: string;
}

export const ActionButton = ({
  children,
  icon,
  variant = 'primary',
  className = '',
  ...props
}: ActionButtonProps) => {
  const variantClass = styles[`actionButton_${variant}`] || styles.actionButton_primary;

  return (
    <button
      type="button"
      className={`${styles.actionButton_btn} ${variantClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className={styles.actionButton_icon}>{icon}</span>}
    </button>
  );
};