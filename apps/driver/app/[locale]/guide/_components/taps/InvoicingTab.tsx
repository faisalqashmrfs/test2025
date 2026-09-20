// guide/_components/taps/InvoicingTab.tsx
"use client";

import React, { useState } from "react";
import styles from "../DriverGuide.module.css";

export default function InvoicingTab() {
  const [activeSection, setActiveSection] = useState("escrow");

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
              activeSection === "escrow" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("escrow")}
          >
            Escrow System
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "payout" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("payout")}
          >
            Payout Schedule
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "invoices-tax" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("invoices-tax")}
          >
            Invoices & Tax
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles["main-content"]}>
        {/* Top Header Section */}
        <div>
          <h2 className={styles["hero-title"]}>Payment and Invoicing System</h2>
          <p className={styles["hero-desc"]}>
            Deep dive into the XCARBOX financial ecosystem, including payout timelines and tax documentation. Official walkthrough of the escrow and payout process.
          </p>
        </div>

        {/* Video Box */}
        <div className={styles["video-player-box"]}>
          <button type="button" className={styles["video-play-btn"]} aria-label="Play video">
            ▶
          </button>
          <span className={styles["video-tag"]}>12:45 TUTORIAL</span>
        </div>

        {/* Section 1: Escrow System */}
        <section id="escrow" className={styles["scroll-section"]}>
          <h3 className={styles["section-block-title"]} style={{ fontSize: "18px", color: "#112038" }}>
            Escrow System
          </h3>

          <div className={styles["escrow-steps-container"]}>
            <div className={styles["escrow-step"]}>
              <div className={styles["escrow-badge"]}>1</div>
              <div className={styles["escrow-title"]}>Job Completed</div>
              <div className={styles["escrow-subtitle"]}>INSTANT</div>
            </div>
            <div className={styles["escrow-step"]}>
              <div className={styles["escrow-badge"]}>2</div>
              <div className={styles["escrow-title"]}>Escrow Held</div>
              <div className={styles["escrow-subtitle"]}>12 HOURS</div>
            </div>
            <div className={styles["escrow-step"]}>
              <div className={styles["escrow-badge"]}>3</div>
              <div className={styles["escrow-title"]}>Review Period</div>
              <div className={styles["escrow-subtitle"]}>14 DAYS</div>
            </div>
            <div className={styles["escrow-step"]}>
              <div className={styles["escrow-badge"]}>4</div>
              <div className={styles["escrow-title"]}>Released</div>
              <div className={styles["escrow-subtitle"]}>AFTER REVIEW</div>
            </div>
            <div className={styles["escrow-step"]}>
              <div className={styles["escrow-badge"]}>5</div>
              <div className={styles["escrow-title"]}>Transferred</div>
              <div className={styles["escrow-subtitle"]}>1-2 BIZ DAYS</div>
            </div>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 2: Payout Schedule */}
        <section id="payout" className={styles["scroll-section"]}>
          <h3 className={styles["section-block-title"]} style={{ fontSize: "18px", color: "#112038" }}>
            Payout Schedule
          </h3>
          <p className={styles["timeline-text"]}>
            All payouts are processed weekly on Wednesday for all funds released from escrow during the previous calendar week. XCARBOX operates on a strict verification cycle to ensure driver performance metrics align with delivery protocols.
          </p>
          <p className={styles["timeline-text"]} style={{ marginTop: "12px" }}>
            A minimum threshold of <strong style={{ color: "#dc2626" }}>450.00 € is required</strong> for automated bank transfers. Amounts below this limit will roll over to the subsequent billing cycle.
          </p>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 3: Invoices & Tax */}
        <section id="invoices-tax" className={styles["scroll-section"]}>
          <h3 className={styles["section-block-title"]} style={{ fontSize: "18px", color: "#112038" }}>
            Invoices & Tax
          </h3>
          <p className={styles["timeline-text"]}>
            As a German-registered entity, XCARBOX complies with all EU VAT directives. Drivers are responsible for ensuring their tax identification numbers (Steuernummer) are correctly registered in the portal to avoid 19% VAT withholding on service fees.
          </p>

          <h4 className={styles["section-block-title"]} style={{ fontSize: "16px", color: "#112038", marginTop: "24px" }}>
            Invoice Status Meanings
          </h4>

          {/* Status Table */}
          <div className={styles["comparison-table-wrapper"]}>
            <table className={styles["comparison-table"]}>
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>Status</th>
                  <th style={{ width: "70%" }}>Context & Action Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles["status-badge-dot"]} style={{ backgroundColor: "#22c55e" }}></span>
                    PAID
                  </td>
                  <td>Funds have been successfully transferred to your Account Wallet.</td>
                </tr>
                <tr>
                  <td>
                    <span className={styles["status-badge-dot"]} style={{ backgroundColor: "#eab308" }}></span>
                    PENDING
                  </td>
                  <td>Invoice is currently in the 14-day mandatory escrow review period.</td>
                </tr>
                <tr>
                  <td>
                    <span className={styles["status-badge-dot"]} style={{ backgroundColor: "#3b82f6" }}></span>
                    NEGOTIATION
                  </td>
                  <td>A dispute has been raised regarding job completion. Review required in Dashboard.</td>
                </tr>
                <tr>
                  <td>
                    <span className={styles["status-badge-dot"]} style={{ backgroundColor: "#ef4444" }}></span>
                    OVERDUE
                  </td>
                  <td>Payout delayed due to invalid bank details or missing tax documentation.</td>
                </tr>
                <tr>
                  <td>
                    <span className={styles["status-badge-dot"]} style={{ backgroundColor: "#dc2626" }}></span>
                    CANCELLED
                  </td>
                  <td>The trip was invalidated or violated terms. No payout will be processed.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3 Bottom Cards */}
        <div
          className={styles["cards-grid-2"]}
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginTop: "32px" }}
        >
          <div className={styles["tip-card"]}>
            <div className={styles["tip-card-header"]}>
              <span className={styles["tip-card-title"]}>🎧 Live Support</span>
              <span className={styles["badge-blue"]}>PRO TIP</span>
            </div>
            <p className={styles["tip-card-desc"]}>
              Need help on-site? Connect with a protocol specialist instantly.
            </p>
          </div>

          <div className={styles["tip-card"]}>
            <div className={styles["tip-card-header"]}>
              <span className={styles["tip-card-title"]}>⚖ Liability Rules</span>
              <span className={styles["badge-blue"]}>PRO TIP</span>
            </div>
            <p className={styles["tip-card-desc"]}>
              Review the legal framework for cargo protection and insurance coverage.
            </p>
          </div>

          <div className={styles["tip-card"]}>
            <div className={styles["tip-card-header"]}>
              <span className={styles["tip-card-title"]}>🔄 Change Log</span>
              <span className={styles["badge-blue"]}>PRO TIP</span>
            </div>
            <p className={styles["tip-card-desc"]}>
              View recent updates to the protocol guidelines for compliance.
            </p>
          </div>
        </div>

        {/* Bottom CTA Section */}
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