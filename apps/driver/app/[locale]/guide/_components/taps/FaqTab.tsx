// guide/_components/taps/FaqTab.tsx
"use client";

import React, { useState } from "react";
import styles from "../DriverGuide.module.css";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqTab() {
  const [activeSection, setActiveSection] = useState("account");
  const [openFaq, setOpenFaq] = useState<string | null>("payout-cycles"); // السؤال المفتوح افتراضياً مثل الصورة

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const accountFaqs: FaqItem[] = [
    {
      id: "upgrade-company",
      question: "How do I upgrade to a Company account?",
      answer: "Go to Account Settings > Organization Profile and submit your company registration documents and tax ID for approval."
    },
    {
      id: "license-expired",
      question: "What happens if my Driver Licenses expires?",
      answer: "Your account will be temporarily paused for new trip assignments until an updated and verified license is uploaded."
    },
    {
      id: "reset-mfa",
      question: "How do I reset my multi-factor authentication?",
      answer: "You can reset MFA through your security settings or contact platform support if you have lost access to your device."
    },
    {
      id: "multiple-users",
      question: "Can I have multiple users under one profile?",
      answer: "Company accounts allow secondary fleet manager and dispatcher profiles under a single master organization."
    }
  ];

  const tripsFaqs: FaqItem[] = [
    {
      id: "counter-offer",
      question: "How do I submit a counter-offer?",
      answer: "Select the Marketplace job listing, click 'Make Counter Offer', enter your proposed rate, and submit for client review."
    },
    {
      id: "managed-job",
      question: "What is a Managed job?",
      answer: "Managed jobs are fixed-rate transport assignments pre-approved and dispatched directly through XCARBOX fleet services."
    },
    {
      id: "late-delivery-penalties",
      question: "What are the penalties for late delivery?",
      answer: "Unexcused delays beyond the grace period may incur score reductions and potential fee deductions based on contract terms."
    },
    {
      id: "upload-pod",
      question: "How do I upload POD documentation?",
      answer: "Upload Proof of Delivery directly through the mobile app upon completing the digital sign-off with the receiver."
    }
  ];

  const paymentsFaqs: FaqItem[] = [
    {
      id: "update-bank-details",
      question: "How do I update my bank details?",
      answer: "Navigate to Financial Settings > Payout Methods to add or modify your IBAN and primary payout account."
    },
    {
      id: "payout-cycles",
      question: "When are payout cycles processed?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante."
    },
    {
      id: "taxes-withheld",
      question: "What taxes are withheld from my trips?",
      answer: "Standard EU VAT regulations apply based on your registered tax entity status and country of operation."
    },
    {
      id: "download-invoices",
      question: "How do I download my monthly invoices?",
      answer: "Access the Invoices section in your dashboard to view, generate, and download statements in PDF format."
    }
  ];

  const technicalFaqs: FaqItem[] = [
    {
      id: "browser-requirements",
      question: "What are the minimum browser requirements?",
      answer: "We recommend using the latest versions of Chrome, Firefox, Safari, or Edge for optimal portal functionality."
    },
    {
      id: "clear-cache",
      question: "How do I clear my cache for the mobile app?",
      answer: "Go to App Settings > Storage & Cache > Clear Cache, or restart the application after receiving an update."
    }
  ];

  const renderFaqAccordion = (items: FaqItem[]) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
      {items.map((item) => {
        const isOpen = openFaq === item.id;
        return (
          <div
            key={item.id}
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "all 0.2s ease"
            }}
          >
            <button
              type="button"
              onClick={() => toggleFaq(item.id)}
              style={{
                width: "100%",
                padding: "14px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "14px",
                fontWeight: isOpen ? "700" : "600",
                color: "#1e293b"
              }}
            >
              <span>{item.question}</span>
              <span style={{ fontSize: "16px", color: "#64748b", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                ⌄
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: "0 18px 14px 18px",
                  fontSize: "13px",
                  color: "#475569",
                  lineHeight: "1.6",
                  borderTop: "1px solid #f1f5f9",
                  paddingTop: "12px"
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={styles["get-start-grid"]}>
      {/* Side Navigation */}
      <aside className={styles["side-nav"]}>
        <div className={styles["side-nav-title"]}>On this page</div>
        <ul className={styles["side-nav-list"]}>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "account" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("account")}
          >
            Account
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "trips" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("trips")}
          >
            Trips
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "payments" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("payments")}
          >
            Payments
          </li>
          <li
            className={`${styles["side-nav-item"]} ${
              activeSection === "technical" ? styles["side-nav-item--active"] : ""
            }`}
            onClick={() => scrollToSection("technical")}
          >
            Technical
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles["main-content"]}>
        {/* Top Header Section */}
        <div>
          <h2 className={styles["hero-title"]}>Frequently Asked Questions</h2>
          <p className={styles["hero-desc"]}>
            Ensuring the safety and legality of the XCARBOX network requires rigorous verification. Maintain your documents to ensure uninterrupted access to the platform.
          </p>
        </div>

        {/* Section 1: Account */}
        <section id="account" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Account
            </h3>
            <p className={styles["model-subtitle"]}>Manage your profile settings, security preferences, and organizational access.</p>
          </div>
          {renderFaqAccordion(accountFaqs)}
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 2: Trips */}
        <section id="trips" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Trips
            </h3>
            <p className={styles["model-subtitle"]}>Everything you need to know about booking, managing, and completing transport assignments.</p>
          </div>
          {renderFaqAccordion(tripsFaqs)}
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 3: Payments */}
        <section id="payments" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Payments
            </h3>
            <p className={styles["model-subtitle"]}>Information regarding billing cycles, tax documentation, and payout methods.</p>
          </div>
          {renderFaqAccordion(paymentsFaqs)}
        </section>

        <hr className={styles["section-divider"]} />

        {/* Section 4: Technical */}
        <section id="technical" className={styles["scroll-section"]}>
          <div className={styles["model-header"]}>
            <h3 className={styles["model-title"]} style={{ color: "#112038" }}>
              Technical
            </h3>
            <p className={styles["model-subtitle"]}>Resolve connectivity issues and understand the technical requirements of the platform.</p>
          </div>
          {renderFaqAccordion(technicalFaqs)}
        </section>

        {/* Support Banner Box */}
        <div style={{ backgroundColor: "#f1f5f9", padding: "24px", borderRadius: "12px", marginTop: "32px" }}>
          <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1e293b", margin: "0 0 6px 0" }}>
            Didn't find what you were looking for?
          </h4>
          <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 16px 0" }}>
            Our specialist team is available 24/7 for technical and administrative support.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              type="button"
              style={{
                flex: "1",
                minWidth: "160px",
                padding: "10px 16px",
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "13px",
                color: "#1e293b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              LIVE CHAT <span>💬</span>
            </button>
            <button
              type="button"
              style={{
                flex: "1",
                minWidth: "160px",
                padding: "10px 16px",
                backgroundColor: "#112038",
                border: "none",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "13px",
                color: "#ffffff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              SUPPORT EMAIL <span>✉️</span>
            </button>
          </div>
        </div>

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