import React from 'react';
import Link from 'next/link';
import { 
  Truck, 
  FileText, 
  CheckCircle, 
  Search, 
  SlidersHorizontal, 
  Receipt 
} from 'lucide-react';
import styles from './RecentActivities.module.css';

const SafeLink = Link as unknown as React.FC<any>;
const SafeTruck = Truck as unknown as React.FC<any>;
const SafeFileText = FileText as unknown as React.FC<any>;
const SafeCheckCircle = CheckCircle as unknown as React.FC<any>;
const SafeSearch = Search as unknown as React.FC<any>;
const SafeSlidersHorizontal = SlidersHorizontal as unknown as React.FC<any>;
const SafeReceipt = Receipt as unknown as React.FC<any>;

interface RecentActivitiesProps {
  locale: string;
}

export default function RecentActivities({ locale }: RecentActivitiesProps) {
  return (
    <div className={styles.activitiesGridRoot}>
      
      {/* 1. قسم الأنشطة الأخيرة */}
      <div className={styles.activitiesLeftColumn}>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Recent Activities</h3>
        
        {/* النشاط الأول */}
        <div className={styles.activityCardLight}>
          <div className={styles.activityItemLeft}>
            <div className={styles.activityIconBoxLight}>
              <SafeTruck className="w-6 h-6" />
            </div>
            <div>
              <h4 className={styles.activityTitleLight}>Frankfurt Hub Drop-off</h4>
              <p className={styles.activityDescLight}>Successfully delivered 2x Porsche 911s. Client signed off.</p>
            </div>
          </div>
          <span className={styles.activityTimeBadge}>2H AGO</span>
        </div>

        {/* النشاط الثاني */}
        <div className={styles.activityCardDark}>
          <div className={styles.activityItemLeft}>
            <div className={styles.activityIconBoxDark}>
              <SafeFileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className={styles.activityTitleDark}>Manifest Updated</h4>
              <p className={styles.activityDescDark}>New routing instructions for Mission 01 received.</p>
            </div>
          </div>
          <span className={styles.activityTimeBadge}>2 DAYS AGO</span>
        </div>

        {/* النشاط الثالث */}
        <div className={styles.activityCardDark}>
          <div className={styles.activityItemLeft}>
            <div className={styles.activityIconBoxDark}>
              <SafeCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className={styles.activityTitleDark}>System Check Complete</h4>
              <p className={styles.activityDescDark}>All telemetry and diagnostic sensors verified.</p>
            </div>
          </div>
          <span className={styles.activityTimeBadge}>1 DAY AGO</span>
        </div>

      </div>

      {/* 2. قسم الإجراءات السريعة */}
      <div className={styles.quickActionsRightColumn}>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Quick Action</h3>
        
        <div className={styles.quickActionsStack}>
          <SafeLink href={`/${locale}/trips/available`} className={styles.quickActionCardLink}>
            <span className={styles.quickActionText}>Browse Available Trips</span>
            <SafeSearch className={styles.quickActionIcon} />
          </SafeLink>

          <SafeLink href={`/${locale}/preferences`} className={styles.quickActionCardLink}>
            <span className={styles.quickActionText}>Update My Preferences</span>
            <SafeSlidersHorizontal className="quickActionIcon" />
          </SafeLink>

          <SafeLink href={`/${locale}/invoices`} className={styles.quickActionCardLink}>
            <span className={styles.quickActionText}>View My Invoices</span>
            <SafeReceipt className="quickActionIcon" />
          </SafeLink>
        </div>

      </div>

    </div>
  );
}