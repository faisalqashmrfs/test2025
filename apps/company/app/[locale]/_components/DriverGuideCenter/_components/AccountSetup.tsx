import React from 'react'
import styles from './../DriverGuideCenter.module.css';

export default function AccountSetup() {
  return (
    <section id="account-setup" className={styles['xcar-guide-section']}>
                                <h2 className={styles['xcar-section-heading']}>Account Setup</h2>
                                <p className={styles['xcar-section-p']}>
                                    Before your team can start posting requests, complete the following steps to activate your company account fully.
                                </p>

                                {/* Stepper Timeline List */}
                                <div className={styles['xcar-stepper-container']}>
                                    {/* Step 1 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>1</div>
                                            <div className={styles['xcar-stepper-line']} />
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Complete Company Verification</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Submit your company registration number, VAT ID, and legal address. Verification typically takes 1–2 business days.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>2</div>
                                            <div className={styles['xcar-stepper-line']} />
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Upload Required Documents</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Upload your certificate of incorporation, proof of business address, and representative ID. Documents must be valid and not expiring within 30 days.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>3</div>
                                            <div className={styles['xcar-stepper-line']} />
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Add Your Team Members and Assign Roles</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Go to My Team and invite team members by email. Assign each member a role: Owner, Manager, Senior Dispatcher, Regional Dispatcher, Finance Manager, Finance Viewer, or Viewer.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>4</div>
                                            <div className={styles['xcar-stepper-line']} />
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Define Your Operating Regions</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Go to My Team → Manage Regions and create your custom regions (e.g. "Bavaria", "Rhine-Ruhr", "Hamburg North"). Assign Regional Dispatchers to their respective regions.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 5 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>5</div>
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Set Up Your Payment Method</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Go to Settings → Payment and add a company bank account or credit card. All transport payments will be held in escrow and released through this account.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Warning Callout Box */}
                                <div className={styles['xcar-warning-callout']}>
                                    <span className={styles['xcar-warning-icon']}>⚠️</span>
                                    <div className={styles['xcar-warning-body']}>
                                        <h5 className={styles['xcar-warning-title']}>Warning callout</h5>
                                        <p className={styles['xcar-warning-text']}>
                                            Accounts with incomplete verification cannot post transport requests. Ensure all documents are uploaded and approved before your team begins operations.
                                        </p>
                                    </div>
                                </div>
                            </section>
  )
}
