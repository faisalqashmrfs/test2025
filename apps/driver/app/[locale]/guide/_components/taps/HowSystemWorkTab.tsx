// guide/_components/taps/HowSystemWorkTab.tsx
"use client";

import React, { useState } from "react";
import styles from "../DriverGuide.module.css";

export default function HowSystemWorkTab() {
  const [activeSection, setActiveSection] = useState("marketplace");

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
              activeSection === "marketplace" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("marketplace")}
          >
            Market Place
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "managed" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("managed")}
          >
            Managed Service
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "which-one" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("which-one")}
          >
            Which one to choose??
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles["main-content"]}>
        {/* Header Title Section */}
        <div>
          <h2 className={styles["hero-title"]}>How Trips Work: Operational Models</h2>
          <p className={styles["hero-desc"]}>
            Select the model that fits your dispatch style. Compare the Marketplace freedom against the stability of
            our Managed Service fleet operations.
          </p>
        </div>

        {/* Section 1: Marketplace Model */}
        <section id="marketplace" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]}>MARKETPLACE Model:</h3>
            <p className={styles["model-subtitle"]}>Real-time dynamic bidding and driver-led selection.</p>
          </div>

          <div className={styles["timeline-container"]}>
            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>1</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Dispatch</h4>
                <p className={styles["timeline-text"]}>Trip broadcast to all eligible nearby drivers via local node.</p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>2</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Place Bid or Claim</h4>
                <p className={styles["timeline-text"]}>
                  Submit competitive quotes based on your operational costs and timeline availability.
                </p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>3</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Contract Award</h4>
                <p className={styles["timeline-text"]}>
                  Receive instant notification of bid acceptance and digital route assignment.
                </p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>4</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Real-time Transit</h4>
                <p className={styles["timeline-text"]}>
                  Execute the trip with automated check-calls and GPS-synced milestone tracking.
                </p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-navy"]}`}>5</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Instant Payout</h4>
                <p className={styles["timeline-text"]}>
                  Complete digital BOL and receive funds directly to your wallet within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 2: Managed Model */}
        <section id="managed" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]}>Managed Model:</h3>
            <p className={styles["model-subtitle"]}>Pre-allocated enterprise schedules and fleet coordination.</p>
          </div>

          <div className={styles["timeline-container"]}>
            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-orange"]}`}>1</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Scheduling</h4>
                <p className={styles["timeline-text"]}>
                  Trips assigned 24- 48 hours in advance based on driver tier and performance.
                </p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-orange"]}`}>2</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Allocation</h4>
                <p className={styles["timeline-text"]}>
                  Hardware manifest sent to vehicle. Precheck diagnostic required.
                </p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-orange"]}`}>3</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Monitoring</h4>
                <p className={styles["timeline-text"]}>Active 24/7 dispatcher oversight for critical enterprise assets.</p>
              </div>
            </div>

            <div className={styles["timeline-item"]}>
              <div className={`${styles["timeline-badge"]} ${styles["badge-orange"]}`}>4</div>
              <div className={styles["timeline-content"]}>
                <h4 className={styles["timeline-title"]}>Auditing</h4>
                <p className={styles["timeline-text"]}>
                  Post-trip telemetry audit for safety and compliance reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 3: Which one to choose?? / Video & Tips */}
        <section id="which-one" className={styles["scroll-section"]}>
          <h3 className={styles["section-block-title"]}>Marketplace vs Managed:</h3>

          <div className={styles["video-player-box"]}>
            <button type="button" className={styles["video-play-btn"]} aria-label="Play video">
              ▶
            </button>
            <span className={styles["video-tag"]}>12:45 TUTORIAL</span>
          </div>
          <p className={styles["video-caption"]}>
            Step-by-step walkthrough of the XCARBOX Driver interface, from initial login to final trip verification and
            automated payment release.
          </p>

          <hr className={styles["section-divider"]} />

          {/* Cards Grid */}
          <div className={styles["cards-grid-2"]}>
            <div className={styles["tip-card"]}>
              <div className={styles["tip-card-header"]}>
                <span className={styles["tip-card-title"]}>⚙ Route Optimization</span>
                <span className={styles["badge-blue"]}>PRO TIP</span>
              </div>
              <p className={styles["tip-card-desc"]}>
                Using the built-in Fleet Navigator can reduce fuel consumption by 14% and average trip duration by 22
                minutes.
              </p>
            </div>

            <div className={styles["tip-card"]}>
              <div className={styles["tip-card-header"]}>
                <span className={styles["tip-card-title"]}>🛡 Verification Status</span>
                <span className={styles["badge-red"]}>SECURITY</span>
              </div>
              <p className={styles["tip-card-desc"]}>
                Maintain a 4.8+ rating to unlock access to Tier 1 High Value Transport Protocols and premium logistics
                hubs.
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