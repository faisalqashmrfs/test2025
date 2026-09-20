// preferences/PreferencesCenter.tsx
"use client";

import React, { useState } from "react";
import styles from "./Preferences.module.css";

interface PreferenceFilter {
  id: number;
  rank: string;
  name: string;
  enabled: boolean;
}

const initialFilters: PreferenceFilter[] = [
  { id: 1, rank: "#1", name: "High Value Trip", enabled: false },
  { id: 2, rank: "#2", name: "Adventure Getaway", enabled: true },
  { id: 3, rank: "#3", name: "Cultural Excursion", enabled: true },
  { id: 4, rank: "#4", name: "Gastronomic Journey", enabled: false },
  { id: 5, rank: "#5", name: "Wellness Retreat", enabled: false },
  { id: 6, rank: "#6", name: "Historical Tour", enabled: false },
  { id: 7, rank: "#7", name: "Nature Exploration", enabled: true },
  { id: 8, rank: "#8", name: "Luxury Cruise", enabled: false },
  { id: 9, rank: "#9", name: "Volunteer Vacation", enabled: false },
  { id: 10, rank: "#10", name: "City Lights Escape", enabled: true },
];

export default function PreferencesCenter() {
  const [filters, setFilters] = useState<PreferenceFilter[]>(initialFilters);

  const toggleFilter = (id: number) => {
    setFilters((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className={styles["preferences-container"]}>
      {/* Header */}
      <div className={styles["preferences-header"]}>
        <div className={styles["preferences-date"]}>Oct 26, 2023 . 08:20AM</div>
        <h1 className={styles["preferences-title"]}>Preferences</h1>
        <p className={styles["preferences-subtitle"]}>
          Manage how you appear to partners and other members of the network.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className={styles["preferences-grid"]}>
        {/* Left Column: Preferences Filters Table */}
        <div className={styles["table-card"]}>
          <h3 className={styles["card-title"]}>Preferences Filters</h3>
          <div className={styles["table-wrapper"]}>
            <table className={styles["filters-table"]}>
              <thead>
                <tr>
                  <th style={{ width: "60px" }}>Rank</th>
                  <th>Filter Name</th>
                  <th style={{ width: "70px", textAlign: "center" }}>On/off</th>
                  <th style={{ width: "80px", textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filters.map((filter) => (
                  <tr key={filter.id}>
                    <td>
                      <div className={styles["rank-cell"]}>
                        <span className={styles["drag-dots"]}>:::</span>
                        <span>{filter.rank}</span>
                      </div>
                    </td>
                    <td className={styles["filter-name"]}>{filter.name}</td>
                    <td style={{ textAlign: "center" }}>
                      <label className={styles["switch"]}>
                        <input
                          type="checkbox"
                          checked={filter.enabled}
                          onChange={() => toggleFilter(filter.id)}
                        />
                        <span className={styles["slider"]}></span>
                      </label>
                    </td>
                    <td>
                      <div className={styles["action-buttons"]}>
                        <button type="button" className={styles["icon-btn"]} title="Edit">
                          ✏️
                        </button>
                        <button type="button" className={styles["icon-btn"]} title="Delete">
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Configure Your Preference Form */}
        <div className={styles["config-card"]}>
          <h3 className={styles["card-title"]}>Configure Your Preference</h3>
          <p className={styles["config-subtitle"]}>Define requirements for matching.</p>

          <form onSubmit={(e) => e.preventDefault()} className={styles["config-form"]}>
            {/* Filter Name */}
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Filter Name</label>
              <input
                type="text"
                placeholder="e.g. Premium Stuttgart Carrier"
                className={styles["form-input"]}
              />
            </div>

            {/* Pickup & Delivery Cities */}
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Pickup City</label>
                <select className={styles["form-select"]} defaultValue="">
                  <option value="" disabled>
                    e.g. Hamburg, Berlin
                  </option>
                  <option value="berlin">Berlin</option>
                  <option value="hamburg">Hamburg</option>
                  <option value="munich">Munich</option>
                </select>
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>DELIVERY CITY</label>
                <select className={styles["form-select"]} defaultValue="">
                  <option value="" disabled>
                    e.g.. Stuttgart, Berlin
                  </option>
                  <option value="stuttgart">Stuttgart</option>
                  <option value="berlin">Berlin</option>
                </select>
              </div>
            </div>

            {/* Location Range Slider */}
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Location Range</label>
              <div className={styles["range-wrapper"]}>
                <span className={styles["range-badge"]}>20 km</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="70"
                  className={styles["range-slider"]}
                />
                <span className={styles["range-badge"]}>100 km</span>
              </div>
            </div>

            {/* Company & Transport Type */}
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Company</label>
                <select className={styles["form-select"]} defaultValue="">
                  <option value="" disabled>
                    select your preferred
                  </option>
                  <option value="company1">Company A</option>
                  <option value="company2">Company B</option>
                </select>
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>transport type</label>
                <select className={styles["form-select"]} defaultValue="">
                  <option value="" disabled>
                    select your preferred type
                  </option>
                  <option value="truck">Truck</option>
                  <option value="van">Van</option>
                </select>
              </div>
            </div>

            {/* Price Range Slider */}
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Price Range</label>
              <div className={styles["range-wrapper"]}>
                <span className={styles["range-badge"]}>200 €</span>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  defaultValue="700"
                  className={styles["range-slider"]}
                />
                <span className={styles["range-badge"]}>1000 €</span>
              </div>
            </div>

            {/* Car Type */}
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Car Type</label>
              <select className={styles["form-select"]} defaultValue="">
                <option value="" disabled>
                  Select your preferred Types
                </option>
                <option value="sports">Sports Car</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
              </select>
            </div>

            {/* Additional Car Details Checkboxes */}
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Additional Car Details</label>
              <div className={styles["checkbox-group"]}>
                <label className={styles["checkbox-label"]}>
                  <input type="checkbox" className={styles["checkbox-input"]} />
                  Electrical
                </label>
                <label className={styles["checkbox-label"]}>
                  <input type="checkbox" className={styles["checkbox-input"]} />
                  Petrol
                </label>
              </div>
            </div>

            {/* Additional Details Checkboxes */}
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>Additional Details</label>
              <div className={styles["checkbox-group"]}>
                <label className={styles["checkbox-label"]}>
                  <input type="checkbox" className={styles["checkbox-input"]} />
                  Flexible
                </label>
                <label className={styles["checkbox-label"]}>
                  <input type="checkbox" className={styles["checkbox-input"]} />
                  Car wash
                </label>
              </div>
            </div>

            {/* Form Actions */}
            <div className={styles["form-actions"]}>
              <button type="submit" className={styles["btn-save"]}>
                SAVE
              </button>
              <button type="button" className={styles["btn-cancel"]}>
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}