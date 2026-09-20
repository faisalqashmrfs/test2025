// guide/_components/taps/RulesTab.tsx
"use client";

import React, { useState } from "react";
import styles from "../DriverGuide.module.css";

export default function RulesTab() {
  const [activeSection, setActiveSection] = useState("cancellation-policy");

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
              activeSection === "cancellation-policy" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("cancellation-policy")}
          >
            Cancellation Policy
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "performance-thresholds" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("performance-thresholds")}
          >
            Performance Thresholds
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "prohibited-behaviors" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("prohibited-behaviors")}
          >
            Prohibited Behaviors
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles["main-content"]}>
        {/* Top Header Section */}
        <div>
          <h2 className={styles["hero-title"]}>Rules and Compliance</h2>
          <p className={styles["hero-desc"]}>
            Ensuring the safety and legality of the XCARBOX network requires rigorous verification. Maintain your documents to ensure uninterrupted access to the platform.
          </p>
        </div>

        {/* Section 1: Cancellation Policy */}
        <section id="cancellation-policy" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Cancellation Policy
            </h3>
            <p className={styles["model-subtitle"]}>Governing protocols for schedule integrity and reliability maintenance.</p>
          </div>

          <div className={styles["comparison-table-wrapper"]}>
            <table className={styles["comparison-table"]}>
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>Cancellation Timing</th>
                  <th style={{ width: "60%" }}>Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&gt; 24 Hours</td>
                  <td>No Penalty</td>
                </tr>
                <tr>
                  <td>&lt; 12 Hours</td>
                  <td>15% Fee Reduction</td>
                </tr>
                <tr>
                  <td>&lt; 2 Hours</td>
                  <td>50% Fee + Account Strike</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 2: Performance Thresholds */}
        <section id="performance-thresholds" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Performance Thresholds
            </h3>
            <p className={styles["model-subtitle"]}>Operational benchmarks required to sustain active partner credentials.</p>
          </div>

          <div className={styles["comparison-table-wrapper"]}>
            <table className={styles["comparison-table"]}>
              <thead>
                <tr>
                  <th style={{ width: "35%" }}>Metric</th>
                  <th style={{ width: "25%" }}>Threshold</th>
                  <th style={{ width: "40%" }}>Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Completion Rate</td>
                  <td>&lt; 95%</td>
                  <td>Visibility Reduction</td>
                </tr>
                <tr>
                  <td>Partner Rating</td>
                  <td>&lt; 4.7/5.0</td>
                  <td>Mandatory Training</td>
                </tr>
                <tr>
                  <td>On-Time Arrival</td>
                  <td>&lt; 90%</td>
                  <td>Tier Downgrade</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 3: Prohibited Behaviors */}
        <section id="prohibited-behaviors" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Prohibited Behaviors
            </h3>
            <p className={styles["model-subtitle"]}>
              The following actions constitute a breach of contract and result in immediate, non-negotiable termination of service access.
            </p>
          </div>

          {/* Alert Red Header */}
          <div className={styles["alert-warning-box"]} style={{ marginBottom: "20px" }}>
            <span className={styles["alert-warning-icon"]}>⚠️</span>
            <strong style={{ color: "#991b1b" }}>Critical Policy Alert</strong>
          </div>

          {/* List of Prohibited Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1e293b", margin: "0 0 4px 0" }}>
                Platform Bypassing
              </h4>
              <p className={styles["timeline-text"]}>
                Any attempt to conduct transactions outside the XCARBOX portal.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1e293b", margin: "0 0 4px 0" }}>
                Identity Sharing
              </h4>
              <p className={styles["timeline-text"]}>
                Allowing unauthorized individuals access to your secure account credentials.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1e293b", margin: "0 0 4px 0" }}>
                Impairment/Intoxication
              </h4>
              <p className={styles["timeline-text"]}>
                Operating vehicles or managing logistics while under the influence.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1e293b", margin: "0 0 4px 0" }}>
                Data Exploitation
              </h4>
              <p className={styles["timeline-text"]}>
                Unauthorized harvesting or export of client vehicle telemetry.
              </p>
            </div>
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