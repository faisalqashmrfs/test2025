// _components/common/InfoCallout.tsx
import React from 'react';
import styles from '../../DriverGuideCenter.module.css';

interface InfoCalloutProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
  type?: 'info' | 'warning' | 'success';
}

export const InfoCallout: React.FC<InfoCalloutProps> = ({
  title,
  children,
  icon = 'ℹ️',
  type = 'info',
}) => {
  return (
    <div className={`${styles['xcar-info-callout']} ${styles[`xcar-callout--${type}`]}`}>
      <div className={styles['xcar-callout-icon']}>{icon}</div>
      <div className={styles['xcar-callout-body']}>
        <h3 className={styles['xcar-callout-title']}>{title}</h3>
        <div className={styles['xcar-callout-text']}>{children}</div>
      </div>
    </div>
  );
};

export default InfoCallout;