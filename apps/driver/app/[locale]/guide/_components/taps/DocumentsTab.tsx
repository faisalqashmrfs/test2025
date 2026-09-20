// guide/_components/taps/DocumentsTab.tsx
"use client";

import React, { useState } from "react";
import styles from "../DriverGuide.module.css";

export default function DocumentsTab() {
  const [activeSection, setActiveSection] = useState("personal-credentials");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles["get-start-grid"]}>
      {/* Side Navigation */}
      <aside className={styles["side-nav"]}>
        <div className={styles["side-nav-title"]}>On this page</div>
        <ul className={styles["side-nav-list"]}>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "personal-credentials" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("personal-credentials")}
          >
            Personal Credentials
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "employment-verification" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("employment-verification")}
          >
            Employment Verification
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "emergency-contacts" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("emergency-contacts")}
          >
            Emergency Contacts
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles["main-content"]}>
        {/* Top Header Section */}
        <div>
          <h2 className={styles["hero-title"]}>Documents and Verification</h2>
          <p className={styles["hero-desc"]}>
            Ensuring the safety and legality of the XCARBOX network requires rigorous verification. Maintain your documents to ensure uninterrupted access to the platform.
          </p>
        </div>

        {/* Info Alert Box */}
        <div className={styles["info-banner"]}>
          <span className={styles["info-banner-icon"]}>ⓘ</span>
          <div>
            <h4 className={styles["info-banner-title"]}>Activation Mandatory</h4>
            <p className={styles["info-banner-text"]}>
              All documents must be verified before account activation. Browsing or accepting trips is prohibited until the verification cycle is complete. You will receive an automated notification 30 days prior to any document expiry to ensure continuous service.
            </p>
          </div>
        </div>

        {/* Section 1: Personal Credentials */}
        <section id="personal-credentials" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Personal Credentials:
            </h3>
            <p className={styles["model-subtitle"]}>Real-time dynamic bidding and driver-led selection.</p>
          </div>

          <div className={styles["comparison-table-wrapper"]}>
            <table className={styles["comparison-table"]}>
              <thead>
                <tr>
                  <th style={{ width: "35%" }}>Status</th>
                  <th style={{ width: "65%" }}>Context & Action Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>National Identity</td>
                  <td>Funds have been successfully transferred to your Account Wallet.</td>
                </tr>
                <tr>
                  <td>Passport</td>
                  <td>Invoice is currently in the 14-day mandatory escrow review period.</td>
                </tr>
                <tr>
                  <td>Driver Licenses</td>
                  <td>A dispute has been raised regarding job completion.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 2: Employment Verification */}
        <section id="employment-verification" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Employment Verification:
            </h3>
            <p className={styles["model-subtitle"]}>Background checks completed with no discrepancies found.</p>
          </div>

          <div className={styles["comparison-table-wrapper"]}>
            <table className={styles["comparison-table"]}>
              <thead>
                <tr>
                  <th style={{ width: "35%" }}>Pending Approval</th>
                  <th style={{ width: "65%" }}>Awaiting final HR sign-off to proceed.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Social Security Number</td>
                  <td>Payment to be processed upon approval confirmation.</td>
                </tr>
                <tr>
                  <td>Work Visa</td>
                  <td>Contract under legal review for compliance.</td>
                </tr>
                <tr>
                  <td>Professional Certifications</td>
                  <td>Documentation pending for skill verification.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 3: Emergency Contacts */}
        <section id="emergency-contacts" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Emergency Contacts:
            </h3>
            <p className={styles["model-subtitle"]}>Contacts updated and verified every six months.</p>
          </div>

          <div className={styles["comparison-table-wrapper"]}>
            <table className={styles["comparison-table"]}>
              <thead>
                <tr>
                  <th style={{ width: "35%" }}>Verified</th>
                  <th style={{ width: "65%" }}>No immediate actions required at this time.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Emergency Phone Number</td>
                  <td>Notification system active for urgent updates.</td>
                </tr>
                <tr>
                  <td>Relationship to Employee</td>
                  <td>Contacts synchronized across all platforms.</td>
                </tr>
                <tr>
                  <td>Alternative Contacts</td>
                  <td>Additional contacts available upon request.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom Download CTA */}
        <section className={styles["bottom-cta-section"]}>
          <h3 className={styles["bottom-cta-title"]}>Download the Full Guide</h3>
          <p className={styles["bottom-cta-desc"]}>
            click the button below to download a PDF file have all explanations, instruction and Rules of the XCARBOX platform
          </p>
          <button type="button" className={styles["btn-download-full"]}>
            DOWNLOAD FULL GUIDE <span>📥</span>
          </button>
        </section>
      </main>
    </div>
  );
}