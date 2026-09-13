// settings/_components/common/FormFooterActions.tsx
'use client';

import React from 'react';
import styles from '../../SettingsCenter.module.css';

interface FormFooterActionsProps {
  onSave?: () => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export const FormFooterActions: React.FC<FormFooterActionsProps> = ({
  onSave,
  onCancel,
  isLoading = false,
}) => {
  return (
    <div className={styles['settings-footer-actions']}>
      <button 
        type="button" 
        className={styles['settings-btn-save']} 
        onClick={onSave}
        disabled={isLoading}
      >
        {isLoading ? 'SAVING...' : 'SAVE CHANGES'}
      </button>

      <button 
        type="button" 
        className={styles['settings-btn-cancel']} 
        onClick={onCancel}
      >
        CANCEL
      </button>
    </div>
  );
};

export default FormFooterActions;