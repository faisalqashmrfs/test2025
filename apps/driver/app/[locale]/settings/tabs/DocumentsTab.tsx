// settings/tabs/DocumentsTab.tsx
"use client";

import React from "react";
import styles from "../Settings.module.css";

export default function DocumentsTab() {
  return (
    <div className={styles["documents-wrapper"]}>
      {/* Table Section: Existing Documents */}
      <div className={styles["settings-card"]}>
        <h3 className={styles["card-title"]}>Documents</h3>
        <div className={styles["table-wrapper"]}>
          <table className={styles["documents-table"]}>
            <tbody>
              {/* Row 1: Passport */}
              <tr>
                <td>
                  <div className={styles["doc-category"]}>Passport</div>
                  <div className={styles["doc-name"]}>Personal Identity Document</div>
                </td>
                <td>
                  <div className={styles["doc-meta-label"]}>PASSPORT NUMBER</div>
                  <div className={styles["doc-meta-value"]}>PX-9928****</div>
                </td>
                <td>
                  <div className={styles["doc-meta-label"]}>EXPIRY DATE</div>
                  <div className={styles["doc-meta-value"]}>12-05-2028</div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className={`${styles["status-badge"]} ${styles["status-verified"]}`}>
                    Verified
                  </span>
                </td>
              </tr>

              {/* Row 2: Identity card */}
              <tr>
                <td>
                  <div className={styles["doc-category"]}>Identity card</div>
                  <div className={styles["doc-name"]}>Personal Identity Document</div>
                </td>
                <td>
                  <div className={styles["doc-meta-label"]}>ID NUMBER</div>
                  <div className={styles["doc-meta-value"]}>XXXXXXXXXXXXXXX</div>
                </td>
                <td>
                  <div className={styles["doc-meta-label"]}>EXPIRY DATE</div>
                  <div className={styles["doc-meta-value"]}>XXXXXXXXXXXXXXX</div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className={`${styles["status-badge"]} ${styles["status-unverified"]}`}>
                    Unverified
                  </span>
                </td>
              </tr>

              {/* Row 3: Certificate of conduct */}
              <tr>
                <td>
                  <div className={styles["doc-category"]}>certificate of conduct</div>
                  <div className={styles["doc-name"]}>PROFESSIONAL CERTIFICATION</div>
                </td>
                <td>
                  <div className={styles["doc-meta-label"]}>ID NUMBER</div>
                  <div className={styles["doc-meta-value"]}>XXXXXXXXXXXXXXX</div>
                </td>
                <td>
                  <div className={styles["doc-meta-label"]}>EXPIRY DATE</div>
                  <div className={styles["doc-meta-value"]}>XXXXXXXXXXXXXXX</div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className={`${styles["status-badge"]} ${styles["status-required"]}`}>
                    Required
                  </span>
                </td>
              </tr>

              {/* Row 4: Company registration certificate */}
              <tr>
                <td>
                  <div className={styles["doc-category"]}>Company registration certificate</div>
                  <div className={styles["doc-name"]}>Company document</div>
                </td>
                <td>
                  <div className={styles["doc-meta-label"]}>ID NUMBER</div>
                  <div className={styles["doc-meta-value"]}>XXXXXXXXXXXXXXX</div>
                </td>
                <td>
                  <div className={styles["doc-meta-label"]}>EXPIRY DATE</div>
                  <div className={styles["doc-meta-value"]}>XXXXXXXXXXXXXXX</div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className={`${styles["status-badge"]} ${styles["status-reviewing"]}`}>
                    Reviewing
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Section */}
      <div className={styles["settings-card"]}>
        <h3 className={styles["card-title"]}>Upload Document</h3>

        <div className={styles["upload-sections-container"]}>
          {/* Section 1: Personal Document */}
          <div className={styles["upload-group"]}>
            <label className={styles["upload-group-label"]}>Personal Document</label>
            <div className={styles["upload-row-2"]}>
              <div className={styles["upload-box"]}>
                <span className={styles["upload-icon"]}>📤</span>
                <div>
                  <div className={styles["upload-box-title"]}>Upload Front Side</div>
                  <div className={styles["upload-box-sub"]}>PDF, JPEG or PNG, max 10MB</div>
                </div>
              </div>
              <div className={styles["upload-box"]}>
                <span className={styles["upload-icon"]}>📤</span>
                <div>
                  <div className={styles["upload-box-title"]}>Upload Back Side</div>
                  <div className={styles["upload-box-sub"]}>PDF, JPEG or PNG, max 10MB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Driving license */}
          <div className={styles["upload-group"]}>
            <div className={styles["label-with-note"]}>
              <label className={styles["upload-group-label"]}>Driving license</label>
              <span className={styles["note-text"]}>after the trial period</span>
            </div>
            <div className={styles["upload-row-2"]}>
              <div className={styles["upload-box"]}>
                <span className={styles["upload-icon"]}>📤</span>
                <div>
                  <div className={styles["upload-box-title"]}>Upload Front Side</div>
                  <div className={styles["upload-box-sub"]}>PDF, JPEG or PNG, max 10MB</div>
                </div>
              </div>
              <div className={styles["upload-box"]}>
                <span className={styles["upload-icon"]}>📤</span>
                <div>
                  <div className={styles["upload-box-title"]}>Upload Back Side</div>
                  <div className={styles["upload-box-sub"]}>PDF, JPEG or PNG, max 10MB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Company registration & Certificate of conduct */}
          <div className={styles["upload-row-2"]}>
            <div className={styles["upload-group"]}>
              <div className={styles["label-with-note"]}>
                <label className={styles["upload-group-label"]}>Company registration certificate</label>
                <span className={styles["note-text"]}>must have car transport specialization</span>
              </div>
              <div className={styles["upload-box"]}>
                <span className={styles["upload-icon"]}>📤</span>
                <div>
                  <div className={styles["upload-box-title"]}>Upload Here</div>
                  <div className={styles["upload-box-sub"]}>PDF, JPEG or PNG, max 10MB</div>
                </div>
              </div>
            </div>

            <div className={styles["upload-group"]}>
              <div className={styles["label-with-note"]}>
                <label className={styles["upload-group-label"]}>certificate of conduct</label>
                <span className={styles["note-text"]}>not older than 3 months</span>
              </div>
              <div className={styles["upload-box"]}>
                <span className={styles["upload-icon"]}>📤</span>
                <div>
                  <div className={styles["upload-box-title"]}>Upload Here</div>
                  <div className={styles["upload-box-sub"]}>PDF, JPEG or PNG, max 10MB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}