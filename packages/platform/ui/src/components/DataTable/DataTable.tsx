// packages/ui/src/components/DataTable/DataTable.tsx

'use client';

import React, { useState } from 'react';
// @ts-ignore
import styles from './../../styles/style.module.css';

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  totalRecordsText?: string;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  expandedRowId?: string | number | null;
  expandedRowRender?: (row: T) => React.ReactNode;
  onRowClick?: (row: T) => void;
}

export interface TableStatusProps {
  status: 'Delivered' | 'In Transit' | 'Assigned' | 'Pending' | 'Scheduled' | 'Disputed' | 'Cancelled' | string;
  children?: React.ReactNode;
}

export const TableStatus = ({ status, children }: TableStatusProps) => {
  const statusClassMap: Record<string, string> = {
    Delivered: styles.dataTable_statusDelivered,
    'In Transit': styles.dataTable_statusInTransit,
    Assigned: styles.dataTable_statusAssigned,
    Pending: styles.dataTable_statusPending,
    Scheduled: styles.dataTable_statusScheduled,
    Disputed: styles.dataTable_statusDisputed,
    Cancelled: styles.dataTable_statusCancelled,
  };

  const activeClass = statusClassMap[status] || styles.dataTable_statusDefault;

  return <span className={activeClass}>{children || status}</span>;
};

export interface TableActionBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

export const TableActionBtn = ({ children, active, ...props }: TableActionBtnProps) => {
  return (
    <button
      type="button"
      className={`${styles.dataTable_actionBtn} ${active ? styles.dataTable_actionBtnActive : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

function getPaginationRange(current: number, total: number) {
  const delta = 1;
  const range: (number | string)[] = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }

  return range;
}

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  totalRecordsText = 'Showing 10 of 42 requests',
  currentPage: externalPage,
  totalPages = 5,
  onPageChange,
  expandedRowId,
  expandedRowRender,
  onRowClick,
}: DataTableProps<T>) {
  const [internalPage, setInternalPage] = useState(1);
  const activePage = externalPage !== undefined ? externalPage : internalPage;

  const handlePageClick = (page: number) => {
    if (page < 1 || page > totalPages || page === activePage) return;
    if (externalPage === undefined) setInternalPage(page);
    if (onPageChange) onPageChange(page);
  };

  const paginationItems = getPaginationRange(activePage, totalPages);

  return (
    <div className={styles.dataTable_container}>
      <div className={styles.dataTable_wrapper}>
        <table className={styles.dataTable_table}>
          <thead className={styles.dataTable_thead}>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={styles.dataTable_th}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.dataTable_tbody}>
            {data.map((row) => {
              const isExpanded = expandedRowId === row.id;
              return (
                <React.Fragment key={row.id}>
                  <tr
                    className={`${styles.dataTable_tr} ${isExpanded ? styles.dataTable_trExpanded : ''}`}
                    onClick={() => onRowClick && onRowClick(row)}
                    style={{ cursor: onRowClick ? 'pointer' : 'default', transition: 'background-color 0.25s ease' }}
                  >
                    {columns.map((col, idx) => (
                      <td key={idx} className={styles.dataTable_td}>
                        {col.cell ? col.cell(row) : (row[col.accessorKey as keyof T] as React.ReactNode)}
                      </td>
                    ))}
                  </tr>

                  {/* صف التوسيع مع أنيميشن انزلاق ناعم */}
                  {expandedRowRender && (
                    <tr className={styles.dataTable_expandedRow}>
                      <td colSpan={columns.length} className={styles.dataTable_expandedTd}>
                        <div
                          className={`${styles.dataTable_accordionWrapper} ${
                            isExpanded ? styles.dataTable_accordionWrapperExpanded : ''
                          }`}
                        >
                          <div className={styles.dataTable_accordionInner}>
                            {expandedRowRender(row)}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.dataTable_footer}>
        <span>{totalRecordsText}</span>
        <div className={styles.dataTable_paginationFlex}>
          <button
            type="button"
            className={styles.dataTable_pageBtn}
            disabled={activePage === 1}
            onClick={() => handlePageClick(activePage - 1)}
          >
            ‹
          </button>

          {paginationItems.map((item, index) =>
            typeof item === 'number' ? (
              <button
                key={index}
                type="button"
                className={`${styles.dataTable_pageBtn} ${
                  activePage === item ? styles.dataTable_pageBtnActive : ''
                }`}
                onClick={() => handlePageClick(item)}
              >
                {item}
              </button>
            ) : (
              <span key={index} className={styles.dataTable_pageBtn}>
                ...
              </span>
            )
          )}

          <button
            type="button"
            className={styles.dataTable_pageBtn}
            disabled={activePage === totalPages}
            onClick={() => handlePageClick(activePage + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}