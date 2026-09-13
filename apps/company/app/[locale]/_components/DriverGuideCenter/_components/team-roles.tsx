import React from 'react'
import styles from './../DriverGuideCenter.module.css';

export default function TeamRoles() {
  return (
    <section id="team-roles" className={styles['xcar-guide-section']}>
                                <h2 className={styles['xcar-section-heading']}>Team & Roles</h2>
                                <p className={styles['xcar-section-p']}>
                                    XCARBOX uses a structured role system to give your team the right level of access for their responsibilities.
                                </p>

                                <p className={styles['xcar-subheading-text']}>Role table:</p>

                                {/* Roles & Permissions Table */}
                                <div className={styles['xcar-table-card']}>
                                    {/* Table Header */}
                                    <div className={styles['xcar-roles-table-header']}>
                                        <div className={styles['xcar-th']}>Role</div>
                                        <div className={styles['xcar-th']}>Region Access</div>
                                        <div className={styles['xcar-th']}>Key Permissions</div>
                                    </div>

                                    {/* Table Body Rows */}
                                    <div className={styles['xcar-table-body']}>
                                        {/* Row 1: Owner */}
                                        <div className={styles['xcar-roles-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Owner</div>
                                            <div className={styles['xcar-td']}>All regions</div>
                                            <div className={styles['xcar-td']}>Full access — team, billing, settings, all requests</div>
                                        </div>

                                        {/* Row 2: Manager */}
                                        <div className={styles['xcar-roles-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Manager</div>
                                            <div className={styles['xcar-td']}>All regions</div>
                                            <div className={styles['xcar-td']}>Requests, offers, invoices, analytics — no team or billing settings</div>
                                        </div>

                                        {/* Row 3: Senior Dispatcher */}
                                        <div className={styles['xcar-roles-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Senior Dispatcher</div>
                                            <div className={styles['xcar-td']}>All regions</div>
                                            <div className={styles['xcar-td']}>Create and manage requests, track jobs, view offers</div>
                                        </div>

                                        {/* Row 4: Regional Dispatcher */}
                                        <div className={styles['xcar-roles-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Regional Dispatcher</div>
                                            <div className={styles['xcar-td']}>Assigned regions only</div>
                                            <div className={styles['xcar-td']}>Same as Senior Dispatcher — scoped to assigned regions</div>
                                        </div>

                                        {/* Row 5: Finance Manager */}
                                        <div className={styles['xcar-roles-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Finance Manager</div>
                                            <div className={styles['xcar-td']}>All regions</div>
                                            <div className={styles['xcar-td']}>Full invoicing and billing — no request creation</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Warning Callout Box */}
                                <div className={styles['xcar-warning-callout']} style={{ marginTop: '20px' }}>
                                    <span className={styles['xcar-warning-icon']}>⚠️</span>
                                    <div className={styles['xcar-warning-body']}>
                                        <h5 className={styles['xcar-warning-title']}>Warning callout</h5>
                                        <p className={styles['xcar-warning-text']}>
                                            Only the account Owner can add or remove team members, change roles, or delete the company account. Ensure your Owner credentials are kept secure.
                                        </p>
                                    </div>
                                </div>
                            </section>
  )
}
