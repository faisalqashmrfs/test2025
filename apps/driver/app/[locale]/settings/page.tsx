// settings/SettingsCenter.tsx
"use client";

import React, { useState } from "react";
import styles from "./Settings.module.css";

// Import Tabs
import PersonalInfoTab from "./tabs/PersonalInfoTab";
import SecurityTab from "./tabs/SecurityTab";
import DocumentsTab from "./tabs/DocumentsTab";
import PaymentMethodsTab from "./tabs/tabs/PaymentMethodsTab";

export default function SettingsCenter() {
  const [activeTab, setActiveTab] = useState("personal-info");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "personal-info":
        return <PersonalInfoTab />;
      case "security":
        return <SecurityTab />;
      case "documents":
        return <DocumentsTab />;
      case "payment-methods":
        return <PaymentMethodsTab />;
      default:
        return <PersonalInfoTab />;
    }
  };

  return (
    <div className={styles["settings-container"]}>
      {/* Header Section */}
      <div className={styles["settings-header"]}>
        <div>
          <span className={styles["header-date"]}>Oct 26, 2023 . 08:20AM</span>
          <h1 className={styles["settings-title"]}>Profile Settings</h1>
          <p className={styles["settings-desc"]}>
            Manage how you appear to partners and other members of the network.
          </p>
        </div>
        <div className={styles["badge-verified"]}>
          ✓ ACCOUNT VERIFIED
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className={styles["tabs-navigation"]}>
        <button
          className={`${styles["tab-btn"]} ${
            activeTab === "personal-info" ? styles["tab-btn--active"] : ""
          }`}
          onClick={() => setActiveTab("personal-info")}
        >
          Personal Information
        </button>
        <button
          className={`${styles["tab-btn"]} ${
            activeTab === "security" ? styles["tab-btn--active"] : ""
          }`}
          onClick={() => setActiveTab("security")}
        >
          Security
        </button>
        <button
          className={`${styles["tab-btn"]} ${
            activeTab === "documents" ? styles["tab-btn--active"] : ""
          }`}
          onClick={() => setActiveTab("documents")}
        >
          Documents and Verification
        </button>
        <button
          className={`${styles["tab-btn"]} ${
            activeTab === "payment-methods" ? styles["tab-btn--active"] : ""
          }`}
          onClick={() => setActiveTab("payment-methods")}
        >
          Payment Methods
        </button>
      </div>

      {/* Dynamic Tab Content */}
      <div className={styles["tab-content"]}>{renderActiveTab()}</div>
    </div>
  );
}