import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import EarningsChart from './EarningsChart';
import RecentActivities from './RecentActivities';
import styles from './OverviewContent.module.css';

const SafeLink = Link as unknown as React.FC<any>;
const SafeArrowRight = ArrowRight as unknown as React.FC<any>;
const SafeCheckCircle2 = CheckCircle2 as unknown as React.FC<any>;
const SafeAlertCircle = AlertCircle as unknown as React.FC<any>;
const SafeExternalLink = ExternalLink as unknown as React.FC<any>;

interface OverviewContentProps {
  locale: string;
}

export default function OverviewContent({ locale }: OverviewContentProps) {
  return (
    <div className={styles.driverOverviewRoot}>
      
      {/* 1. شريط المهمة النشطة العلوي */}
      <div className={styles.driverActiveBanner}>
        <div className={styles.driverBannerLeft}>
          <span className={styles.driverPulseWrapper}>
            <span className={styles.driverPulsePing}></span>
            <span className={styles.driverPulseDot}></span>
          </span>
          <span className="font-semibold text-gray-200">To Start</span>
          <span className="text-gray-400">In 2days, 30min</span>
          <span className="text-gray-600">|</span>
          <span className="font-medium text-white">Berlin &rarr; Munich</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">Vehicle: <strong className="text-white">Porsche 911 GT3</strong></span>
        </div>
        <SafeLink href={`/${locale}/trips`} className={styles.driverBannerBtn}>
          <span>Continue Job</span>
          <SafeArrowRight className="w-3.5 h-3.5" />
        </SafeLink>
      </div>

      {/* 2. ترحيب السائق والوقت */}
      <div className={styles.driverWelcomeSection}>
        <div className={styles.driverMetaRow}>
          <span>Oct 26, 2023, 08:20AM</span>
          <span className={styles.driverVerifiedBadge}>
            <SafeCheckCircle2 className="w-3 h-3" />
            VERIFIED
          </span>
        </div>
        <h1 className={styles.driverWelcomeTitle}>
          Guten Morgen, Klaus Schmidt
        </h1>
      </div>

      {/* 3. بطاقات الإحصائيات الأربعة */}
      <div>
        <h3 className={styles.driverSectionTitle}>General Metrics</h3>
        <div className={styles.driverMetricsGrid}>
          
          {/* Trips Card */}
          <div className={styles.driverMetricCard}>
            <div>
              <div className={styles.driverCardHeader}>
                <span className={styles.driverCardTitleText}>TRIPS</span>
                <SafeLink href={`/${locale}/trips`} className="text-gray-400 hover:text-gray-600">
                  <SafeExternalLink className="w-4 h-4" />
                </SafeLink>
              </div>
              <div className={styles.driverCardValueLarge}>142</div>
            </div>
            <div className={styles.driverCardFooter}>
              <div><span className={styles.driverTrendPositive}>+5% vs last month</span></div>
              <div className={styles.driverSubStatRow}>
                <span>Distance:</span>
                <span className={styles.driverSubStatValue}>12,450 km</span>
              </div>
              <div className={styles.driverSubStatRowTight}>
                <span>AVG / Trip:</span>
                <span className={styles.driverSubStatValue}>87 km</span>
              </div>
            </div>
          </div>

          {/* Pending Wallet Card */}
          <div className={styles.driverMetricCard}>
            <div>
              <div className={styles.driverCardHeader}>
                <span className={styles.driverCardTitleText}>Pending WALLET</span>
                <SafeLink href={`/${locale}/earnings`} className="text-gray-400 hover:text-gray-600">
                  <SafeExternalLink className="w-4 h-4" />
                </SafeLink>
              </div>
              <div className={styles.driverCardValueLarge}>&euro;3,540.00</div>
            </div>
            <div className={styles.driverCardFooter}>
              <div><span className={styles.driverTrendPositive}>+&euro;820.00 since last payout</span></div>
              <div className={styles.driverSubStatRow}>
                <span>Pending:</span>
                <span className={styles.driverSubStatValue}>&euro;1,260.00</span>
              </div>
              <div className={styles.driverSubStatRowTight}>
                <span>Next payout:</span>
                <span className={styles.driverSubStatValue}>Nov, 12</span>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className={styles.driverMetricCard}>
            <div>
              <div className={styles.driverCardHeader}>
                <span className={styles.driverCardTitleText}>PERFORMANCE</span>
                <SafeLink href={`/${locale}/performance`} className="text-gray-400 hover:text-gray-600">
                  <SafeExternalLink className="w-4 h-4" />
                </SafeLink>
              </div>
              <div className={styles.driverCardValueLarge}>94.6%</div>
            </div>
            <div className={styles.driverCardFooter}>
              <div><span className={styles.driverTrendPositive}>1.2% vs last month</span></div>
              <div className={styles.driverSubStatRow}>
                <span>Cancellation rate:</span>
                <span className={styles.driverSubStatValue}>3.2%</span>
              </div>
              <div className={styles.driverSubStatRowTight}>
                <span>Response rate:</span>
                <span className={styles.driverSubStatValue}>96.8%</span>
              </div>
            </div>
          </div>

          {/* Account Status Card */}
          <div className={styles.driverMetricCard}>
            <div>
              <div className={styles.driverCardHeader}>
                <span className={styles.driverCardTitleText}>Account</span>
                <SafeLink href={`/${locale}/qualifications`} className="text-gray-400 hover:text-gray-600">
                  <SafeExternalLink className="w-4 h-4" />
                </SafeLink>
              </div>
              <div className={styles.driverCardValueMedium}>Verified</div>
            </div>
            <div className={styles.driverStatusCheckList}>
              <div className={styles.driverStatusCheckItem}>
                <span>Driving License</span>
                <SafeCheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className={styles.driverStatusCheckItem}>
                <span>Identity Document</span>
                <SafeCheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className={styles.driverStatusCheckItem}>
                <span>Bank Account</span>
                <SafeAlertCircle className="w-4 h-4 text-rose-500" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. استدعاء مكون الرسم البياني */}
      <EarningsChart />

      {/* 5. استدعاء مكون الأنشطة الأخيرة */}
      <RecentActivities locale={locale} />

    </div>
  );
}