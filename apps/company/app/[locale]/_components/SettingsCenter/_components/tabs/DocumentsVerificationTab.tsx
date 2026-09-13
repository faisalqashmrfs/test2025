// settings/_components/tabs/DocumentsVerificationTab.tsx
'use client';

import React, { useState } from 'react';
import styles from '../../SettingsCenter.module.css';

type DocumentStatus = 'Verified' | 'Under Review' | 'Missing';

interface DocumentItem {
  id: string;
  name: string;
  description: string;
  status: DocumentStatus;
}

export const DocumentsVerificationTab: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: '1',
      name: 'Commercial Register Extract (Handelsregister)',
      description: 'Official proof that the company is legally registered as a business entity.',
      status: 'Verified',
    },
    {
      id: '2',
      name: 'VAT Registration Certificate',
      description: 'Confirms the company is registered for tax purposes in its operating country.',
      status: 'Under Review',
    },
    {
      id: '3',
      name: 'Proof of Authorized Signatory',
      description: 'Required when the account is managed by someone other than the registered owner.',
      status: 'Missing',
    },
    {
      id: '4',
      name: 'VAT Registration Certificate',
      description: 'Confirms the company is registered for tax purposes in its operating country.',
      status: 'Verified',
    },
  ]);

  const handleUpload = (id: string) => {
    // إتاحة رفع ملف للمستند المطلوب
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = () => {
      setDocuments((prev) =>
        prev.map((doc) => (doc.id === id ? { ...doc, status: 'Under Review' } : doc))
      );
    };
    fileInput.click();
  };

  const handleRemove = (id: string) => {
    setDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, status: 'Missing' } : doc))
    );
  };

  const getStatusClass = (status: DocumentStatus) => {
    switch (status) {
      case 'Verified':
        return styles['status-verified'];
      case 'Under Review':
        return styles['status-review'];
      case 'Missing':
        return styles['status-missing'];
      default:
        return '';
    }
  };

  return (
    <div className={styles['settings-tab-content']}>
      <div className={styles['documents-section']}>
        <h3 className={styles['section-heading-dark']}>Document List</h3>

        <div className={styles['documents-table-wrapper']}>
          <table className={styles['documents-table']}>
            <thead>
              <tr>
                <th style={{ width: '60%' }}>Document Name</th>
                <th style={{ width: '20%' }}>State</th>
                <th style={{ width: '20%', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>
                    <div className={styles['doc-name']}>{doc.name}</div>
                    <div className={styles['doc-desc']}>{doc.description}</div>
                  </td>
                  <td>
                    <span className={`${styles['status-text']} ${getStatusClass(doc.status)}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles['doc-actions']}>
                      <button
                        type="button"
                        className={styles['action-link']}
                        onClick={() => handleUpload(doc.id)}
                      >
                        Upload <span>📥</span>
                      </button>
                      <button
                        type="button"
                        className={`${styles['action-link']} ${styles['action-link--danger']}`}
                        onClick={() => handleRemove(doc.id)}
                      >
                        Remove <span>🗑️</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentsVerificationTab;