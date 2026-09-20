// guide/_components/taps/ProtocolsTab.tsx
"use client";

import React, { useState } from "react";
import styles from "../DriverGuide.module.css";

export default function ProtocolsTab() {
  const [activeSection, setActiveSection] = useState("phase1");

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
              activeSection === "phase1" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("phase1")}
          >
            Phase 1: Pickup Protocol
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "phase2" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("phase2")}
          >
            Phase 2: In Transit
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "phase3" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("phase3")}
          >
            Phase 3: Delivery Protocol
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles["main-content"]}>
        {/* Top Header Section */}
        <div>
          <h2 className={styles["hero-title"]}>How Trips Work: Operational Models</h2>
          <p className={styles["hero-desc"]}>
            Select the model that fits your dispatch style. Compare the Marketplace freedom against the stability of
            our Managed Service fleet operations.
          </p>
        </div>

        {/* Download Banner Document */}
        <div className={styles["info-banner"]} style={{ cursor: "pointer" }}>
          <span className={styles["info-banner-icon"]}>ⓘ</span>
          <div>
            <h4 className={styles["info-banner-title"]}>Download the Full Transport Protocol Document</h4>
            <p className={styles["info-banner-text"]}>
              Complete technical guidelines for inter-state vehicle logistics · PDF (4.2 MB).
              <br />
              <strong>Click here to downloads</strong>
            </p>
          </div>
        </div>

        {/* Phase 1: Pickup Protocol */}
        <section id="phase1" className={styles["scroll-section"]}>
          <h3 className={styles["section-block-title"]} style={{ fontSize: "20px", color: "#112038" }}>
            Phase 1: Pickup Protocol
          </h3>

          <div className={styles["video-player-box"]}>
            <button type="button" className={styles["video-play-btn"]} aria-label="Play video">
              ▶
            </button>
            <span className={styles["video-tag"]}>12:45 TUTORIAL</span>
          </div>

          <div className={styles["timeline-container"]} style={{ marginTop: "24px" }}>
            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>1</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Exterior 360° Photos</h4>
                <p className={styles["timeline-text"]}>
                  Capture 12 high-resolution photos including all four corners, all panels, glass surfaces, and roof.
                  Images must be timestamped via the <strong>XCARBOX App</strong>.
                </p>
                <div className={styles["alert-warning-box"]}>
                  <span className={styles["alert-warning-icon"]}>⚠️</span>
                  <span>Failure to document pre-existing damage results in full driver liability.</span>
                </div>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>2</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Interior Condition Check</h4>
                <p className={styles["timeline-text"]}>
                  Document upholstery status, dashboard condition, and any loose internal components.
                </p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>3</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Odometer & Fuel Level</h4>
                <p className={styles["timeline-text"]}>
                  Photographic proof of dashboard cluster required at the moment of key handover.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Phase 2: In Transit */}
        <section id="phase2" className={styles["scroll-section"]}>
          <h3 className={styles["section-block-title"]} style={{ fontSize: "20px", color: "#112038" }}>
            Phase 2: In Transit
          </h3>

          <div className={styles["video-player-box"]}>
            <button type="button" className={styles["video-play-btn"]} aria-label="Play video">
              ▶
            </button>
            <span className={styles["video-tag"]}>12:45 TUTORIAL</span>
          </div>

          <div className={styles["timeline-container"]} style={{ marginTop: "24px" }}>
            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>1</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Route Compliance</h4>
                <p className={styles["timeline-text"]}>
                  GPS telemetry must remain active throughout the transport. Deviations greater than 5 miles must be
                  pre-authorized.
                </p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>2</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Rest Stops & Security</h4>
                <p className={styles["timeline-text"]}>
                  Best practices for parking luxury cargo during overnight breaks in designated safe zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Phase 3: Delivery Protocol */}
        <section id="phase3" className={styles["scroll-section"]}>
          <h3 className={styles["section-block-title"]} style={{ fontSize: "20px", color: "#112038" }}>
            Phase 3: Delivery Protocol
          </h3>

          <div className={styles["video-player-box"]}>
            <button type="button" className={styles["video-play-btn"]} aria-label="Play video">
              ▶
            </button>
            <span className={styles["video-tag"]}>12:45 TUTORIAL</span>
          </div>

          <div className={styles["timeline-container"]} style={{ marginTop: "24px" }}>
            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>1</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Delivery Condition Proof</h4>
                <p className={styles["timeline-text"]}>
                  Complete final 360° inspection at the drop-off location before releasing keys to the recipient.
                </p>
                <div className={styles["alert-warning-box"]}>
                  <span className={styles["alert-warning-icon"]}>⚠️</span>
                  <span>Late submission of delivery photos delays payout by 14 days.</span>
                </div>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>2</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Digital Signature</h4>
                <p className={styles["timeline-text"]}>
                  Client must sign off on the mobile terminal. Confirm full name matches the authorized receiver in
                  the system.
                </p>
              </div>
            </div>
          </div>

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
        </section>

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