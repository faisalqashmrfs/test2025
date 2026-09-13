// packages/ui/src/components/RequestDetailsPanel/RequestDetailsPanel.tsx

'use client';

import React from 'react';
// @ts-ignore
import styles from './../../styles/style.module.css';

export interface RequestDetailsData {
  id: string;
  postModel: string;
  transportType: string;
  pickupLocation: string;
  pickupType: string;
  pickupDate: string;
  pickupTime: string;
  deliveryLocation: string;
  deliveryType: string;
  deliveryDate: string;
  deliveryTime: string;
  distance: string;
  estDriveTime: string;
  carsType: string;
  carModels: string;
  carsAmount: number;
  carsWeight: string;
  fixableTime: boolean;
  roundTrip: boolean;
  multiTrip: boolean;
  notes: string;
  driverName: string;
  driverEmail: string;
  driverPhone: string;
  driverRating: string;
  paymentState: string;
  grossAmount: string;
  insurance: string;
  total: string;
  timeline: { title: string; date: string; completed: boolean }[];
}

interface RequestDetailsPanelProps {
  data: RequestDetailsData;
  dict?: Record<string, any>;
  onCancelRequest?: () => void;
  onContactSupport?: () => void;
  onDriverProfile?: () => void;
}

export const RequestDetailsPanel = ({
  data,
  dict = {},
  onCancelRequest,
  onContactSupport,
  onDriverProfile,
}: RequestDetailsPanelProps) => {
  return (
    <div className={styles.details_container}>
      <div className={styles.details_grid}>
        {/* العمود الأيسر: تفاصيل الطلب والمواصفات */}
        <div className={styles.details_leftCol}>
          <div className={styles.details_card}>
            <h4 className={styles.details_cardTitle}>{dict.requestDetails || 'Request Details:'}</h4>

            <div className={styles.details_sectionSub}>{dict.mainDetails || 'Main Details:'}</div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Request ID:</span>
              <span className={styles.details_rowValue}>{data.id}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Post Model:</span>
              <span className={styles.details_rowValue}>{data.postModel}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Transport Type:</span>
              <span className={styles.details_rowValue}>{data.transportType}</span>
            </div>

            <div className={styles.details_sectionSub}>{dict.pickedDetails || 'Picked Details:'}</div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Location:</span>
              <span className={styles.details_rowValue}>{data.pickupLocation}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Date & Time:</span>
              <span className={styles.details_rowValue}>{data.pickupDate} - {data.pickupTime}</span>
            </div>

            <div className={styles.details_sectionSub}>{dict.deliveryDetails || 'Delivery Details:'}</div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Location:</span>
              <span className={styles.details_rowValue}>{data.deliveryLocation}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Date & Time:</span>
              <span className={styles.details_rowValue}>{data.deliveryDate} - {data.deliveryTime}</span>
            </div>

            <div className={styles.details_sectionSub}>{dict.carsDetails || 'Cars Details:'}</div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Cars Type:</span>
              <span className={styles.details_rowValue}>{data.carsType}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Car Models:</span>
              <span className={styles.details_rowValue}>{data.carModels}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Cars Weight:</span>
              <span className={styles.details_rowValue}>{data.carsWeight}</span>
            </div>
          </div>
        </div>

        {/* العمود الأيمن: الخط الزمني + تفاصيل السائق + الدفع */}
        <div className={styles.details_rightCol}>
          {/* الخط الزمني */}
          <div className={styles.details_card}>
            <h4 className={styles.details_cardTitle}>{dict.requestTimeline || 'Request Timeline:'}</h4>
            <div className={styles.timeline_list}>
              {data.timeline.map((item, idx) => (
                <div key={idx} className={styles.timeline_item}>
                  <div
                    className={`${styles.timeline_dot} ${
                      item.completed ? styles.timeline_dotCompleted : ''
                    }`}
                  />
                  <span className={styles.timeline_title}>{item.title}</span>
                  <span className={styles.timeline_date}>{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* تفاصيل السائق */}
          <div className={styles.details_card}>
            <h4 className={styles.details_cardTitle}>{dict.driverDetails || 'Driver Details:'}</h4>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Name:</span>
              <span className={styles.details_rowValue}>{data.driverName}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Email:</span>
              <span className={styles.details_rowValue}>{data.driverEmail}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Rating:</span>
              <span className={styles.details_rowValue}>★ {data.driverRating}</span>
            </div>
          </div>

          {/* ملخص الدفع */}
          <div className={styles.details_card}>
            <h4 className={styles.details_cardTitle}>{dict.paymentSummary || 'Payment Summary:'}</h4>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Payment State:</span>
              <span className={styles.details_rowValue}>{data.paymentState}</span>
            </div>
            <div className={styles.details_row}>
              <span className={styles.details_rowLabel}>Total:</span>
              <span className={styles.details_rowValue} style={{ fontSize: '1.1rem', color: '#60a5fa' }}>
                {data.total}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* أزرار الإجراءات السفلية */}
      <div className={styles.details_footer}>
        <div className={styles.details_actionGroup}>
          <button type="button" className={styles.btn_outline} onClick={onDriverProfile}>
            DRIVER PROFILE ↗
          </button>
          <button type="button" className={styles.btn_danger} onClick={onCancelRequest}>
            CANCEL REQUEST 🗑
          </button>
        </div>
        <button type="button" className={styles.btn_white} onClick={onContactSupport}>
          CONTACT SUPPORT 💬
        </button>
      </div>
    </div>
  );
};