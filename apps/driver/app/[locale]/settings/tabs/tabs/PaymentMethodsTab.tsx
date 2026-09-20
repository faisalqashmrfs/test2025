// settings/tabs/PaymentMethodsTab.tsx
"use client";

import React from "react";
import styles from "../../Settings.module.css";

export default function PaymentMethodsTab() {
  return (
    <div className={styles["payment-methods-wrapper"]}>
      {/* Registered Payout Method Card */}
      <div className={styles["settings-card"]}>
        <h3 className={styles["card-title"]} style={{ marginBottom: "2px" }}>
          Registered Payout Method
        </h3>
        <p className={styles["card-subtitle"]}>
          Primary destination for your professional earnings.
        </p>

        <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: "20px" }}>
          <div className={styles["form-row-2"]}>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Account Holder</label>
              <input
                type="text"
                defaultValue="Klaus Schmidt"
                readOnly
                className={styles["form-input"]}
              />
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Bank Name</label>
              <select className={styles["form-select"]} defaultValue="Berlin Bank" disabled>
                <option value="Berlin Bank">Berlin Bank</option>
              </select>
            </div>
          </div>

          <div className={styles["form-row-2"]}>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>IBAN (International Bank Account Number)</label>
              <div className={styles["input-icon-wrapper"]}>
                <input
                  type="text"
                  defaultValue="DE** **** **** **** 4492"
                  readOnly
                  className={styles["form-input"]}
                />
                <span className={styles["input-icon"]}>👁️</span>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>BIC (Business Identifier Codes)</label>
              <div className={styles["input-icon-wrapper"]}>
                <input
                  type="text"
                  defaultValue="BARCGB22XXX"
                  readOnly
                  className={styles["form-input"]}
                />
                <span className={styles["input-icon"]}>🔒</span>
              </div>
            </div>
          </div>

          {/* Compliance Note & Edit Button */}
          <div className={styles["compliance-row"]}>
            <div className={styles["alert-warning-box"]}>
              <span className={styles["alert-warning-icon"]}>⚠️</span>
              <div>
                <strong>Compliance Note:</strong> Changing your bank account details will trigger a re-verification process
              </div>
            </div>

            <button type="button" className={styles["btn-edit-payment"]}>
              EDIT PAYMENT INFORMATION <span>&gt;</span>
            </button>
          </div>
        </form>
      </div>

      {/* KYC Completed Banner */}
      <div className={styles["info-banner-box"]}>
        <div className={styles["info-banner-icon"]}>🛡️</div>
        <div>
          <h4 className={styles["info-banner-title"]}>KYC Completed:</h4>
          <p className={styles["info-banner-desc"]}>
            Your identity and bank credentials have been vetted for high-value transactions. All changes require MFA authentication.
          </p>
        </div>
      </div>

      {/* Security Banner Box */}
      <div className={styles["info-banner-box"]}>
        <div className={styles["info-banner-icon"]}>🔒</div>
        <div>
          <h4 className={styles["info-banner-title"]}>SECURITY:</h4>
          <p className={styles["info-banner-desc"]}>
            Financial data is encrypted using AES-256 and stored in compliant EU servers.
          </p>
          <a href="#data-policy" className={styles["info-banner-link"]}>
            LEARN More ABOUT This DATA POLICY <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}