// settings/tabs/SecurityTab.tsx
"use client";

import React, { useState } from "react";
import styles from "../Settings.module.css";

export default function SecurityTab() {
  const [twoFactor, setTwoFactor] = useState({
    sms: true,
    email: false,
    app: false,
  });

  const handleToggle = (key: keyof typeof twoFactor) => {
    setTwoFactor((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles["security-grid"]}>
      {/* Left Column */}
      <div className={styles["security-left-col"]}>
        {/* Update Password Card */}
        <div className={styles["settings-card"]}>
          <h3 className={styles["card-title"]}>Update Password</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Current password</label>
              <div className={styles["input-icon-wrapper"]}>
                <input
                  type="password"
                  placeholder="••••••••••••••••"
                  className={styles["form-input"]}
                />
                <span className={styles["input-icon"]}>👁️</span>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>New password</label>
              <div className={styles["input-icon-wrapper"]}>
                <input
                  type="password"
                  placeholder="••••••••••••••••"
                  className={styles["form-input"]}
                />
                <span className={styles["input-icon"]}>👁️</span>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>CONFIRM NEW PASSWORD</label>
              <div className={styles["input-icon-wrapper"]}>
                <input
                  type="password"
                  placeholder="••••••••••••••••"
                  className={styles["form-input"]}
                />
                <span className={styles["input-icon"]}>👁️</span>
              </div>
            </div>

            <button type="submit" className={styles["btn-update-password"]}>
              UPDATE PASSWORD
            </button>
          </form>
        </div>

        {/* 2 Factory Verification Method Card */}
        <div className={styles["settings-card"]}>
          <h3 className={styles["card-title"]}>2 Factory Verification Method</h3>
          <div className={styles["toggle-list"]}>
            <div className={styles["toggle-item"]}>
              <span className={styles["toggle-label"]}>Via SMS</span>
              <label className={styles["switch"]}>
                <input
                  type="checkbox"
                  checked={twoFactor.sms}
                  onChange={() => handleToggle("sms")}
                />
                <span className={styles["slider"]}></span>
              </label>
            </div>

            <div className={styles["toggle-item"]}>
              <span className={styles["toggle-label"]}>Via Email</span>
              <label className={styles["switch"]}>
                <input
                  type="checkbox"
                  checked={twoFactor.email}
                  onChange={() => handleToggle("email")}
                />
                <span className={styles["slider"]}></span>
              </label>
            </div>

            <div className={styles["toggle-item"]}>
              <span className={styles["toggle-label"]}>Via Authenticator app</span>
              <label className={styles["switch"]}>
                <input
                  type="checkbox"
                  checked={twoFactor.app}
                  onChange={() => handleToggle("app")}
                />
                <span className={styles["slider"]}></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles["security-right-col"]}>
        {/* Active Sessions Card */}
        <div className={styles["settings-card"]}>
          <h3 className={styles["card-title"]}>Active Sessions</h3>
          <div className={styles["table-wrapper"]}>
            <table className={styles["sessions-table"]}>
              <thead>
                <tr>
                  <th>DEVICE / BROWSER</th>
                  <th>LOCATION</th>
                  <th>LAST ACTIVE Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className={styles["device-cell"]}>
                      <span className={styles["device-icon"]}>💻</span>
                      <div>
                        <div className={styles["device-name"]}>MacBook Pro 16"</div>
                        <div className={styles["device-sub"]}>Chrome · macOS 14.2</div>
                      </div>
                    </div>
                  </td>
                  <td>Germany, Berlin</td>
                  <td>
                    <div className={styles["session-action"]}>
                      <span className={styles["status-text"]}>Online Now</span>
                      <span className={styles["badge-current"]}>Current Session</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles["device-cell"]}>
                      <span className={styles["device-icon"]}>📱</span>
                      <div>
                        <div className={styles["device-name"]}>iPhone 15 Pro Max</div>
                        <div className={styles["device-sub"]}>XCARBOX App · iOS 17.1</div>
                      </div>
                    </div>
                  </td>
                  <td>Germany, Berlin</td>
                  <td>
                    <div className={styles["session-action"]}>
                      <span className={styles["status-text"]}>2 hours ago</span>
                      <button type="button" className={styles["btn-revoke"]}>
                        REVOKE
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Login History Card */}
        <div className={styles["settings-card"]}>
          <h3 className={styles["card-title"]}>Login History</h3>
          <div className={styles["login-history-item"]}>
            <div>
              <div className={styles["history-status"]}>Successful Authentication</div>
              <div className={styles["history-details"]}>
                IP: 192.168.1.104 · 2FA verified via App
              </div>
            </div>
            <div className={styles["history-date"]}>2024-02-26 09:12:44</div>
          </div>
        </div>
      </div>
    </div>
  );
}