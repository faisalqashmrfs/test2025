import React from 'react'
import styles from './../DriverGuideCenter.module.css';

export default function YourFirstRequest() {
  return (
    <section id="your-first-request" className={styles['xcar-guide-section']}>
                                <hr className={styles['xcar-section-divider']} />

                                <h2 className={styles['xcar-section-heading']}>Your First Request</h2>
                                <p className={styles['xcar-section-p']}>
                                    Once your account is fully set up, here is how to post your first transport request.
                                </p>

                                {/* Stepper Timeline List (7 Steps) */}
                                <div className={styles['xcar-stepper-container']}>
                                    {/* Step 1 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>1</div>
                                            <div className={styles['xcar-stepper-line']} />
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Go to My Requests</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Navigate to My Requests from the sidebar.
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
                                            <h4 className={styles['xcar-step-title']}>Click New Request</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Click the New Request button in the top right corner of the page.
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
                                            <h4 className={styles['xcar-step-title']}>Set Your Route and Schedule</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Enter the pickup and delivery addresses. Set the shared pickup date and time and the estimated delivery date and time.
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
                                            <h4 className={styles['xcar-step-title']}>Add Your Vehicles</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Add each vehicle to the request. For each vehicle enter the make, model, year, fuel type, condition, license plate, and any special handling notes.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 5 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>5</div>
                                            <div className={styles['xcar-stepper-line']} />
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Choose Transport Type and Service Model</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Select Driven (Category B licence driver) or Carrier / LKW (truck transport). Select Marketplace (open bidding) or Managed (platform assigns).
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 6 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>6</div>
                                            <div className={styles['xcar-stepper-line']} />
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Review Insurance Coverage</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Review the automatically applied insurance coverage. Add optional upgrades if needed — Full Comprehensive Cover or High-Value Vehicle Cover.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 7 */}
                                    <div className={styles['xcar-stepper-item']}>
                                        <div className={styles['xcar-stepper-left']}>
                                            <div className={styles['xcar-stepper-badge']}>7</div>
                                        </div>
                                        <div className={styles['xcar-stepper-content']}>
                                            <h4 className={styles['xcar-step-title']}>Post Your Request</h4>
                                            <p className={styles['xcar-step-desc']}>
                                                Click Post Request. Your request is immediately visible to eligible drivers on the platform.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pro Tip Callout Box */}
                                <div className={styles['xcar-protip-callout']}>
                                    <span className={styles['xcar-protip-icon']}>🔔</span>
                                    <div className={styles['xcar-protip-body']}>
                                        <span className={styles['xcar-protip-title']}>Pro tip callout:</span>
                                        <span className={styles['xcar-protip-text']}>
                                            Save your request as a draft at any stage and return to it later. Drafts are automatically saved every 2 minutes.
                                        </span>
                                    </div>
                                </div>

                                <hr className={styles['xcar-section-divider']} />
                            </section>
  )
}
