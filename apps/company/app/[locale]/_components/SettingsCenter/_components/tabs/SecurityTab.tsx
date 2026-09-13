// settings/_components/tabs/SecurityTab.tsx
'use client';

import React, { useState } from 'react';
import styles from '../../SettingsCenter.module.css';

interface SessionItem {
  id: string;
  device: string;
  subText: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
  icon: string;
}

export const SecurityTab: React.FC = () => {
  // 1. Password State
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // 2. Verification Toggles State
  const [verificationMethods, setVerificationMethods] = useState({
    sms: true,
    email: false,
    authenticator: false,
  });

  // 3. Active Sessions State
  const [sessions, setSessions] = useState<SessionItem[]>([
    {
      id: '1',
      device: 'MacBook Pro 16"',
      subText: 'Chrome · MacOS 14.2',
      location: 'Germany, Berlin',
      lastActive: 'Online Now',
      isCurrent: true,
      icon: '💻',
    },
    {
      id: '2',
      device: 'iPhone 15 Pro Max',
      subText: 'XCARBOX App · iOS 17.1',
      location: 'Germany, Berlin',
      lastActive: '2 hours ago',
      isCurrent: false,
      icon: '📱',
    },
  ]);

  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleRevokeSession = (id: string) => {
    setSessions(sessions.filter((session) => session.id !== id));
  };

  return (
    <div className={styles['settings-tab-content']}>
      {/* Top Row: Update Password & Login Verification */}
      <div className={styles['security-top-grid']}>
        {/* Card 1: Update Password */}
        <div className={styles['settings-card']}>
          <h3 className={styles['card-title']}>Update Password</h3>
          <div className={styles['password-form-stack']}>
            
            {/* Current Password */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>Current password</label>
              </div>
              <div className={styles['input-with-icon']}>
                <input
                  type={showPassword.current ? 'text' : 'password'}
                  placeholder="••••••••••••••••"
                  value={passwords.current}
                  onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                />
                <button
                  type="button"
                  className={styles['eye-icon-btn']}
                  onClick={() => togglePasswordVisibility('current')}
                >
                  {showPassword.current ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>New password</label>
              </div>
              <div className={styles['input-with-icon']}>
                <input
                  type={showPassword.new ? 'text' : 'password'}
                  placeholder="••••••••••••••••"
                  value={passwords.new}
                  onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                />
                <button
                  type="button"
                  className={styles['eye-icon-btn']}
                  onClick={() => togglePasswordVisibility('new')}
                >
                  {showPassword.new ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className={styles['input-group']}>
              <div className={styles['label-row']}>
                <label>CONFIRM NEW PASSWORD</label>
              </div>
              <div className={styles['input-with-icon']}>
                <input
                  type={showPassword.confirm ? 'text' : 'password'}
                  placeholder="••••••••••••••••"
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                />
                <button
                  type="button"
                  className={styles['eye-icon-btn']}
                  onClick={() => togglePasswordVisibility('confirm')}
                >
                  {showPassword.confirm ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Card 2: Login Verification Method */}
        <div className={styles['settings-card']}>
          <h3 className={styles['card-title']}>Login Verification Method</h3>
          <div className={styles['toggles-stack']}>
            
            {/* Via SMS */}
            <div className={styles['toggle-item-row']}>
              <span className={styles['toggle-label']}>Via SMS</span>
              <label className={styles['switch-toggle']}>
                <input
                  type="checkbox"
                  checked={verificationMethods.sms}
                  onChange={(e) =>
                    setVerificationMethods({ ...verificationMethods, sms: e.target.checked })
                  }
                />
                <span className={styles['switch-slider']}></span>
              </label>
            </div>

            {/* Via Email */}
            <div className={styles['toggle-item-row']}>
              <span className={styles['toggle-label']}>Via Email</span>
              <label className={styles['switch-toggle']}>
                <input
                  type="checkbox"
                  checked={verificationMethods.email}
                  onChange={(e) =>
                    setVerificationMethods({ ...verificationMethods, email: e.target.checked })
                  }
                />
                <span className={styles['switch-slider']}></span>
              </label>
            </div>

            {/* Via Authenticator App */}
            <div className={styles['toggle-item-row']}>
              <span className={styles['toggle-label']}>Via Authenticator app</span>
              <label className={styles['switch-toggle']}>
                <input
                  type="checkbox"
                  checked={verificationMethods.authenticator}
                  onChange={(e) =>
                    setVerificationMethods({
                      ...verificationMethods,
                      authenticator: e.target.checked,
                    })
                  }
                />
                <span className={styles['switch-slider']}></span>
              </label>
            </div>

          </div>
        </div>
      </div>

      {/* Middle Section: Active Sessions Table */}
      <div className={styles['sessions-section']}>
        <h3 className={styles['section-heading-dark']}>Active Sessions</h3>
        
        <div className={styles['sessions-table-wrapper']}>
          <table className={styles['sessions-table']}>
            <thead>
              <tr>
                <th>DEVICE / BROWSER</th>
                <th>LOCATION</th>
                <th>LAST ACTIVE</th>
                <th style={{ textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id}>
                  <td>
                    <div className={styles['device-cell']}>
                      <span className={styles['device-icon']}>{session.icon}</span>
                      <div>
                        <div className={styles['device-name']}>{session.device}</div>
                        <div className={styles['device-subtext']}>{session.subText}</div>
                      </div>
                    </div>
                  </td>
                  <td>{session.location}</td>
                  <td>{session.lastActive}</td>
                  <td style={{ textAlign: 'right' }}>
                    {session.isCurrent ? (
                      <span className={styles['current-session-label']}>Current Session</span>
                    ) : (
                      <button
                        type="button"
                        className={styles['revoke-btn']}
                        onClick={() => handleRevokeSession(session.id)}
                      >
                        Revoke
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Section: Login History */}
      <div className={styles['login-history-section']}>
        <h3 className={styles['section-heading-dark']}>Login History</h3>
        <div className={styles['history-card']}>
          <div>
            <div className={styles['history-title']}>Successful Authentication</div>
            <div className={styles['history-subtext']}>
              IP: 192.168.1.104 · 2FA verified via App
            </div>
          </div>
          <div className={styles['history-timestamp']}>2024-02-26 09:12:44</div>
        </div>
      </div>
    </div>
  );
};

export default SecurityTab;