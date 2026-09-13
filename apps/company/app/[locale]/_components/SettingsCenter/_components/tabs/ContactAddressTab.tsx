// settings/_components/tabs/ContactAddressTab.tsx
'use client';

import React, { useState } from 'react';
import styles from '../../SettingsCenter.module.css';

interface BranchItem {
  id: number;
  branchName: string;
  supportEmail: string;
  country: string;
  state: string;
  city: string;
  streetName: string;
  buildingNumber: string;
  postalCode: string;
  countryCode: string;
  phone: string;
}

export const ContactAddressTab: React.FC = () => {
  // 1. Main Branch State
  const [mainAddress, setMainAddress] = useState({
    country: '',
    state: '',
    city: '',
    streetName: '',
    buildingNumber: '',
    postalCode: '',
  });

  const [mainContact, setMainContact] = useState({
    officialEmail: '',
    supportEmail: '',
    countryCode: '+--',
    phone: '',
  });

  // 2. Dynamic Branches State
  const [branches, setBranches] = useState<BranchItem[]>([
    {
      id: 1,
      branchName: '',
      supportEmail: '',
      country: '',
      state: '',
      city: '',
      streetName: '',
      buildingNumber: '',
      postalCode: '',
      countryCode: '+--',
      phone: '',
    },
  ]);

  // Handlers for Dynamic Branches
  const handleAddBranch = () => {
    const newBranch: BranchItem = {
      id: Date.now(),
      branchName: '',
      supportEmail: '',
      country: '',
      state: '',
      city: '',
      streetName: '',
      buildingNumber: '',
      postalCode: '',
      countryCode: '+--',
      phone: '',
    };
    setBranches([...branches, newBranch]);
  };

  const handleRemoveBranch = (id: number) => {
    setBranches(branches.filter((b) => b.id !== id));
  };

  const handleBranchChange = (
    id: number,
    field: keyof BranchItem,
    value: string
  ) => {
    setBranches(
      branches.map((b) => (b.id === id ? { ...b, [field]: value } : b))
    );
  };

  return (
    <div className={styles['settings-tab-content']}>
      {/* Top Row: Main Branch Address & Contact Details */}
      <div className={styles['contact-top-grid']}>
        {/* Main Branch Address Card */}
        <div className={styles['settings-card']}>
          <h3 className={styles['card-title']}>Main Branch Address</h3>

          <div className={styles['form-grid-3']}>
            {/* Country */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>Country</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <select
                value={mainAddress.country}
                onChange={(e) =>
                  setMainAddress({ ...mainAddress, country: e.target.value })
                }
              >
                <option value="">select country</option>
              </select>
            </div>

            {/* State */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>State</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <select
                value={mainAddress.state}
                onChange={(e) =>
                  setMainAddress({ ...mainAddress, state: e.target.value })
                }
              >
                <option value="">select state</option>
              </select>
            </div>

            {/* City */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>City</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <select
                value={mainAddress.city}
                onChange={(e) =>
                  setMainAddress({ ...mainAddress, city: e.target.value })
                }
              >
                <option value="">select city</option>
              </select>
            </div>
          </div>

          {/* Address & Postal Code Row */}
          <div className={styles['address-split-row']}>
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>Address & Postal Code</label>
              </div>
              <input
                type="text"
                placeholder="street name"
                value={mainAddress.streetName}
                onChange={(e) =>
                  setMainAddress({ ...mainAddress, streetName: e.target.value })
                }
              />
            </div>

            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>&nbsp;</label>
              </div>
              <input
                type="text"
                placeholder="building number"
                value={mainAddress.buildingNumber}
                onChange={(e) =>
                  setMainAddress({
                    ...mainAddress,
                    buildingNumber: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <span className={styles['required-tag']}>required</span>
              </div>
              <input
                type="text"
                placeholder="postal code"
                value={mainAddress.postalCode}
                onChange={(e) =>
                  setMainAddress({ ...mainAddress, postalCode: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Main Branch Contact Details Card */}
        <div className={styles['settings-card']}>
          <h3 className={styles['card-title']}>Main Branch Contact Details</h3>

          <div className={styles['form-grid-2']}>
            {/* Official Email */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>official Email</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <div className={styles['input-with-icon']}>
                <input
                  type="email"
                  placeholder="e.g... name@email.com"
                  value={mainContact.officialEmail}
                  onChange={(e) =>
                    setMainContact({
                      ...mainContact,
                      officialEmail: e.target.value,
                    })
                  }
                />
                <span className={styles['input-icon']}>✉️</span>
              </div>
            </div>

            {/* Support Email */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>Support Email</label>
              </div>
              <div className={styles['input-with-icon']}>
                <input
                  type="email"
                  placeholder="e.g... name@email.com"
                  value={mainContact.supportEmail}
                  onChange={(e) =>
                    setMainContact({
                      ...mainContact,
                      supportEmail: e.target.value,
                    })
                  }
                />
                <span className={styles['input-icon']}>✉️</span>
              </div>
            </div>

            {/* Phone Number Full Row */}
            <div className={`${styles['input-group']} ${styles['full-width']}`}>
              <div className={styles['label-row']}>
                <label>phone number</label>
                <span className={styles['required-tag']}>required</span>
              </div>
              <div className={styles['phone-input-wrapper']}>
                <select
                  className={styles['phone-code-select']}
                  value={mainContact.countryCode}
                  onChange={(e) =>
                    setMainContact({
                      ...mainContact,
                      countryCode: e.target.value,
                    })
                  }
                >
                  <option value="+--">+ ---</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+966">+966</option>
                </select>
                <div className={styles['input-with-icon']}>
                  <input
                    type="text"
                    placeholder="e.g... 12 345 6789"
                    value={mainContact.phone}
                    onChange={(e) =>
                      setMainContact({ ...mainContact, phone: e.target.value })
                    }
                  />
                  <span className={styles['input-icon']}>📞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Sub-Branches List */}
      <div className={styles['branches-list']}>
        {branches.map((branch, index) => (
          <div key={branch.id} className={styles['settings-card']}>
            <h3 className={styles['card-title']}>
              #{index + 1} Branch Information
            </h3>

            {/* Row 1: Branch Name & Support Email */}
            <div className={styles['form-grid-2']}>
              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>Branch Name</label>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <div className={styles['input-with-icon']}>
                  <input
                    type="text"
                    placeholder="e.g... branch Name"
                    value={branch.branchName}
                    onChange={(e) =>
                      handleBranchChange(branch.id, 'branchName', e.target.value)
                    }
                  />
                  <span className={styles['input-icon']}>✉️</span>
                </div>
              </div>

              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>Support Email</label>
                </div>
                <div className={styles['input-with-icon']}>
                  <input
                    type="email"
                    placeholder="e.g... name@email.com"
                    value={branch.supportEmail}
                    onChange={(e) =>
                      handleBranchChange(branch.id, 'supportEmail', e.target.value)
                    }
                  />
                  <span className={styles['input-icon']}>✉️</span>
                </div>
              </div>
            </div>

            {/* Row 2: Country / State / City */}
            <div className={styles['form-grid-3']} style={{ marginTop: '16px' }}>
              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>Country</label>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <select
                  value={branch.country}
                  onChange={(e) =>
                    handleBranchChange(branch.id, 'country', e.target.value)
                  }
                >
                  <option value="">select country</option>
                </select>
              </div>

              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>State</label>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <select
                  value={branch.state}
                  onChange={(e) =>
                    handleBranchChange(branch.id, 'state', e.target.value)
                  }
                >
                  <option value="">select state</option>
                </select>
              </div>

              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>City</label>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <select
                  value={branch.city}
                  onChange={(e) =>
                    handleBranchChange(branch.id, 'city', e.target.value)
                  }
                >
                  <option value="">select city</option>
                </select>
              </div>
            </div>

            {/* Row 3: Address & Postal Code */}
            <div
              className={styles['address-split-row-4']}
              style={{ marginTop: '16px' }}
            >
              <div className={`${styles['input-group']} ${styles['flex-grow-2']}`}>
                <div className={styles['label-row']}>
                  <label>Address & Postal Code</label>
                </div>
                <input
                  type="text"
                  placeholder="street name"
                  value={branch.streetName}
                  onChange={(e) =>
                    handleBranchChange(branch.id, 'streetName', e.target.value)
                  }
                />
              </div>

              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>&nbsp;</label>
                </div>
                <input
                  type="text"
                  placeholder="building number"
                  value={branch.buildingNumber}
                  onChange={(e) =>
                    handleBranchChange(
                      branch.id,
                      'buildingNumber',
                      e.target.value
                    )
                  }
                />
              </div>

              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <input
                  type="text"
                  placeholder="postal code"
                  value={branch.postalCode}
                  onChange={(e) =>
                    handleBranchChange(branch.id, 'postalCode', e.target.value)
                  }
                />
              </div>
            </div>

            {/* Row 4: Phone Number & Remove Button */}
            <div className={styles['branch-footer-row']} style={{ marginTop: '16px' }}>
              <div className={styles['input-group']} style={{ flex: 1 }}>
                <div className={styles['label-row']}>
                  <label>phone number</label>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <div className={styles['phone-input-wrapper']}>
                  <select
                    className={styles['phone-code-select']}
                    value={branch.countryCode}
                    onChange={(e) =>
                      handleBranchChange(branch.id, 'countryCode', e.target.value)
                    }
                  >
                    <option value="+--">+ ---</option>
                    <option value="+1">+1</option>
                    <option value="+966">+966</option>
                  </select>
                  <div className={styles['input-with-icon']}>
                    <input
                      type="text"
                      placeholder="e.g... 12 345 6789"
                      value={branch.phone}
                      onChange={(e) =>
                        handleBranchChange(branch.id, 'phone', e.target.value)
                      }
                    />
                    <span className={styles['input-icon']}>📞</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Remove Branch Link */}
            <div className={styles['remove-branch-wrapper']}>
              <button
                type="button"
                className={styles['remove-branch-btn']}
                onClick={() => handleRemoveBranch(branch.id)}
              >
                Remove Branch <span>🗑️</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Branch info (+) Dashed Box */}
      <button
        type="button"
        className={styles['add-branch-dashed-box']}
        onClick={handleAddBranch}
      >
        <span>Add Branch info</span>
        <span className={styles['add-icon-circle']}>+</span>
      </button>
    </div>
  );
};

export default ContactAddressTab;