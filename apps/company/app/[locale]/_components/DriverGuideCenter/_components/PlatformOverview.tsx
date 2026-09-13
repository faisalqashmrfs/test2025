import React from 'react'
import styles from './../DriverGuideCenter.module.css';

export default function PlatformOverview() {
  return (
    <section id="platform-overview" className={styles['xcar-guide-section']}>
                                <h2 className={styles['xcar-section-heading']}>Platform Overview</h2>
                                <p className={styles['xcar-section-p']}>
                                    XCARBOX is a unified automotive services ecosystem built for businesses that move vehicles at scale.
                                    The platform operates across four service pillars:
                                </p>

                                <p className={styles['xcar-subheading-text']}>Marketplace vs Managed Service.</p>

                                {/* Comparison Table */}
                                <div className={styles['xcar-table-card']}>
                                    {/* Table Header */}
                                    <div className={styles['xcar-table-header']}>
                                        <div className={styles['xcar-th']}>Feature</div>
                                        <div className={styles['xcar-th']}>Marketplace</div>
                                        <div className={styles['xcar-th']}>Managed Service</div>
                                    </div>

                                    {/* Table Body Rows */}
                                    <div className={styles['xcar-table-body']}>
                                        {/* Row 1 */}
                                        <div className={styles['xcar-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Price Control</div>
                                            <div className={styles['xcar-td']}>Dynamic — you review and accept offers</div>
                                            <div className={styles['xcar-td']}>Fixed — platform sets the rate</div>
                                        </div>

                                        {/* Row 2 */}
                                        <div className={styles['xcar-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Driver Selection</div>
                                            <div className={styles['xcar-td']}>Your team chooses from incoming offers</div>
                                            <div className={styles['xcar-td']}>Platform assigns the best available driver</div>
                                        </div>

                                        {/* Row 3 */}
                                        <div className={styles['xcar-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Speed of Assignment</div>
                                            <div className={styles['xcar-td']}>Depends on offer volume</div>
                                            <div className={styles['xcar-td']}>Faster — typically within 2 hours</div>
                                        </div>

                                        {/* Row 4 */}
                                        <div className={styles['xcar-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Pricing Model</div>
                                            <div className={styles['xcar-td']}>Commission-based on agreed price</div>
                                            <div className={styles['xcar-td']}>Margin-based fixed rate</div>
                                        </div>

                                        {/* Row 5 */}
                                        <div className={styles['xcar-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Best For</div>
                                            <div className={styles['xcar-td']}>Price-sensitive, flexible timelines</div>
                                            <div className={styles['xcar-td']}>Time-critical or high-value fleet moves</div>
                                        </div>

                                        {/* Row 6 */}
                                        <div className={styles['xcar-tr']}>
                                            <div className={`${styles['xcar-td']} ${styles['xcar-td-feature']}`}>Oversight</div>
                                            <div className={styles['xcar-td']}>Your dispatchers manage the process</div>
                                            <div className={styles['xcar-td']}>Platform manages end to end</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
  )
}
