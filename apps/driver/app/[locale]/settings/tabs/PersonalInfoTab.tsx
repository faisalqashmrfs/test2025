// settings/tabs/PersonalInfoTab.tsx
"use client";

import React from "react";
import styles from "../Settings.module.css";

export default function PersonalInfoTab() {
  return (
    <div className={styles["personal-info-grid"]}>
      {/* Left Column: Avatar & Photo Actions */}
      <div className={styles["photo-card"]}>
        <div className={styles["avatar-wrapper"]}>
          <img
            src="/images/driver-profile.jpg"
            alt="Profile Avatar"
            className={styles["avatar-img"]}
          />
        </div>
        <div className={styles["photo-info"]}>
          <h4 className={styles["photo-title"]}>Profile Photo</h4>
          <p className={styles["photo-desc"]}>JPG, GIF or PNG. Max size of 800K</p>
        </div>
        <div className={styles["photo-actions"]}>
          <button type="button" className={styles["btn-upload"]}>
            UPLOAD
          </button>
          <button type="button" className={styles["btn-remove"]}>
            REMOVE
          </button>
        </div>
      </div>

      {/* Right Column: Personal Information Form */}
      <div className={styles["form-card"]}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles["form-row-2"]}>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>First Name</label>
              <input
                type="text"
                placeholder="write here your first name"
                className={styles["form-input"]}
              />
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Last Name</label>
              <input
                type="text"
                placeholder="write here your family name"
                className={styles["form-input"]}
              />
            </div>
          </div>

          <div className={styles["form-row-2"]}>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Email</label>
              <div className={styles["input-icon-wrapper"]}>
                <input
                  type="email"
                  placeholder="e.g.. name@email.com"
                  className={styles["form-input"]}
                />
                <span className={styles["input-icon"]}>✉️</span>
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>phone number</label>
              <div className={styles["phone-group"]}>
                <select className={styles["select-prefix"]}>
                  <option value="+1">+ ---</option>
                  <option value="+49">+49</option>
                  <option value="+1">+1</option>
                </select>
                <div className={styles["input-icon-wrapper"]} style={{ flex: 1 }}>
                  <input
                    type="tel"
                    placeholder="e.g.. 12 345 6789"
                    className={styles["form-input"]}
                  />
                  <span className={styles["input-icon"]}>📞</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["form-row-2"]}>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Birthday</label>
              <div className={styles["input-icon-wrapper"]}>
                <input
                  type="text"
                  placeholder="MM / DD / YYYY"
                  className={styles["form-input"]}
                />
                <span className={styles["input-icon"]}>📅</span>
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Gender</label>
              <select className={styles["form-select"]}>
                <option value="">select your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label className={styles["form-label"]}>Nationality</label>
            <select className={styles["form-select"]}>
              <option value="">select from the list</option>
              <option value="DE">Germany</option>
              <option value="US">United States</option>
              <option value="SY">Syria</option>
            </select>
          </div>

          <div className={styles["form-row-3"]}>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Country</label>
              <select className={styles["form-select"]}>
                <option value="">select Your country</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>State</label>
              <select className={styles["form-select"]}>
                <option value="">select the state</option>
                <option value="BE">Berlin</option>
              </select>
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>City</label>
              <select className={styles["form-select"]}>
                <option value="">select the city</option>
                <option value="BER">Berlin</option>
              </select>
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label className={styles["form-label"]}>Address & Postal Code</label>
            <div className={styles["address-grid"]}>
              <input
                type="text"
                placeholder="street name"
                className={styles["form-input"]}
              />
              <input
                type="text"
                placeholder="building number"
                className={styles["form-input"]}
              />
              <input
                type="text"
                placeholder="postal code"
                className={styles["form-input"]}
              />
            </div>
          </div>

          <button type="submit" className={styles["btn-save-changes"]}>
            SAVE CHANGES
          </button>
        </form>
      </div>
    </div>
  );
}