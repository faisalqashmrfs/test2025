import React from 'react'
import styles from './../DriverGuideCenter.module.css';

export default function SuccessTips() {
  return (
    <section id="success-tips" className={styles['xcar-guide-section']}>
                                <h2 className={styles['xcar-section-heading']}>Success Tips</h2>
                                <p className={styles['xcar-section-p']}>
                                    Companies that get the most out of XCARBOX follow these operational best practices.
                                </p>

                                {/* Stepper Timeline List (5 Steps) */}
                                <div className={styles['xcar-stepper-container']}>
                                    {/* Step 1 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>1</div>
                                            <div className={styles['xcar-stepper-line']} />
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Define regions</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                before adding dispatchers Setting up your regions first ensures every dispatcher is assigned correctly from day one and avoids access conflicts.
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
                                            <h4 className={styles['xcar-step-title']}>Use internal PO references on every request</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Adding your company's purchase order number to each request makes invoice reconciliation effortless for your finance team.
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
                                            <h4 className={styles['xcar-step-title']}>Set a target budget on Managed Service requests</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Giving the platform a budget target helps ensure assignments stay within your operational cost parameters.
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
                                            <h4 className={styles['xcar-step-title']}>Monitor offer expiry times</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Offers from drivers expire. Assign a team member to review incoming offers regularly so your requests don't go unassigned.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 5 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>5</div>
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Export invoices monthly</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Use the export function in the Invoices page to generate monthly CSV or PDF batches filtered by region — ideal for accounting and tax reporting.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <hr className={styles['xcar-section-divider']} />

                                {/* Pro Tip Grid Cards */}
                                <div className={styles['xcar-protip-grid']}>
                                    {/* Card 1 */}
                                    <div className={styles['xcar-protip-card']}>
                                        <div className={styles['xcar-protip-card-header']}>
                                            <h4 className={styles['xcar-protip-card-title']}>Route Optimization</h4>
                                            <span className={styles['xcar-protip-badge']}>PRO TIP</span>
                                        </div>
                                        <p className={styles['xcar-protip-card-desc']}>
                                            Assigning dedicated Regional Dispatchers to high-volume corridors reduces average response time and improves offer quality on those routes.
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className={styles['xcar-protip-card']}>
                                        <div className={styles['xcar-protip-card-header']}>
                                            <h4 className={styles['xcar-protip-card-title']}>Verification Status</h4>
                                            <span className={styles['xcar-protip-badge']}>PRO TIP</span>
                                        </div>
                                        <p className={styles['xcar-protip-card-desc']}>
                                            Keep all company documents current. Accounts with documents expiring within 7 days receive an automatic warning. Expired documents suspend request posting immediately.
                                        </p>
                                    </div>
                                </div>

                                {/* Footer Call to Action (Download Full Guide) */}
                                <div className={styles['xcar-download-cta-block']}>
                                    <h3 className={styles['xcar-cta-title']}>Download the Full Guide</h3>
                                    <p className={styles['xcar-cta-desc']}>
                                        click the button below to download a PDF file have all explanations, instruction and Rules of the <strong>XCARBOX</strong> platform
                                    </p>

                                    <button className={styles['xcar-cta-download-btn']}>
                                        DOWNLOAD FULL GUIDE <span>📥</span>
                                    </button>
                                </div>
                            </section>
  )
}
