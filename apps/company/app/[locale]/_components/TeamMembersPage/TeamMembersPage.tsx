// team/_components/TeamMemberssPage.tsx
'use client';

import React, { useState } from 'react';
import styles from './TeamMembers.module.css';

interface Member {
  id: string;
  fullName: string;
  systemRole: string;
  email: string;
  lastActive: string;
  joinedAt: string;
  accountState: 'Verified' | 'Pending' | 'Unverified';
}

export const TeamMemberssPage: React.FC = () => {
  // Invite Form State
  const [inviteForm, setInviteForm] = useState({
    fullName: '',
    email: '',
    role: '',
  });

  // Table Data State
  const [members] = useState<Member[]>([
    {
      id: '1',
      fullName: 'Elena Rostova',
      systemRole: 'Admin',
      email: 'Elenarostova@Xcarbox.com',
      lastActive: '2 hours ago',
      joinedAt: '12, Jun, 2026',
      accountState: 'Verified',
    },
    {
      id: '2',
      fullName: 'Marco Villanueva',
      systemRole: 'Account Manger',
      email: 'marcov@xcarbox.com',
      lastActive: '5 hours ago',
      joinedAt: '13, Jun, 2026',
      accountState: 'Pending',
    },
    {
      id: '3',
      fullName: 'Sophia Nguyen',
      systemRole: 'Finance Manger',
      email: 'sophian@xcarbox.com',
      lastActive: '1 day ago',
      joinedAt: '11, Jun, 2026',
      accountState: 'Unverified',
    },
    {
      id: '4',
      fullName: 'Liam Chen',
      systemRole: 'Senior Dispatcher',
      email: 'liamc@xcarbox.com',
      lastActive: '3 hours ago',
      joinedAt: '12, Jun, 2026',
      accountState: 'Verified',
    },
    {
      id: '5',
      fullName: 'Ava Patel',
      systemRole: 'Region Dispatcher',
      email: 'avap@xcarbox.com',
      lastActive: '5 days ago',
      joinedAt: '7, Jun, 2026',
      accountState: 'Pending',
    },
  ]);

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // تنفيذ عملية الدعوة هنا
    console.log('Inviting member:', inviteForm);
  };

  const getStatusClass = (state: Member['accountState']) => {
    switch (state.toLowerCase()) {
      case 'verified':
        return styles['state-verified'];
      case 'pending':
        return styles['state-pending'];
      case 'unverified':
        return styles['state-unverified'];
      default:
        return '';
    }
  };

  return (
    <div className={styles['page-container']}>
      {/* Date Badge */}
      <div className={styles['date-badge']}>Oct 26, 2023 . 08:20AM</div>

      {/* Main Title & Counter */}
      <div className={styles['header-section']}>
        <h1 className={styles['page-title']}>Team Members</h1>
        <p className={styles['page-subtitle']}>
          you have <span className={styles['highlight-blue']}>5 Members</span> and{' '}
          <span className={styles['highlight-orange']}>2 Pending Invites</span> . you can manage all Members in this page
        </p>
      </div>

      {/* Invite New Member Section */}
      <div className={styles['section-block']}>
        <h2 className={styles['section-title']}>Invite New Member</h2>
        <div className={styles['card-container']}>
          <form onSubmit={handleInviteSubmit}>
            <div className={styles['form-grid-3']}>
              {/* Full Name */}
              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>Full Name</label>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <input
                  type="text"
                  placeholder="eg., 123456789"
                  value={inviteForm.fullName}
                  onChange={(e) => setInviteForm({ ...inviteForm, fullName: e.target.value })}
                />
              </div>

              {/* Email */}
              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>Email</label>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <div className={styles['input-with-icon']}>
                  <input
                    type="email"
                    placeholder="e.g... name@email.com"
                    value={inviteForm.email}
                    onChange={(e) => setInviteForm({ ...inviteForm, email: e.target.value })}
                  />
                  <span className={styles['input-icon']}>✉️</span>
                </div>
              </div>

              {/* Role */}
              <div className={styles['input-group']}>
                <div className={styles['label-row']}>
                  <label>Role</label>
                  <span className={styles['required-tag']}>required</span>
                </div>
                <select
                  value={inviteForm.role}
                  onChange={(e) => setInviteForm({ ...inviteForm, role: e.target.value })}
                >
                  <option value="">select member role</option>
                  <option value="admin">Admin</option>
                  <option value="account_manager">Account Manager</option>
                  <option value="finance_manager">Finance Manager</option>
                  <option value="senior_dispatcher">Senior Dispatcher</option>
                  <option value="region_dispatcher">Region Dispatcher</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles['btn-invite-submit']}>
              Invite Member <span className={styles['plus-icon']}>⊞</span>
            </button>
          </form>
        </div>
      </div>

      {/* Account Members Section */}
      <div className={styles['section-block']}>
        <h2 className={styles['section-title']}>Account Members</h2>
        <div className={styles['table-card']}>
          <div className={styles['table-responsive']}>
            <table className={styles['members-table']}>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>System Role</th>
                  <th>Email</th>
                  <th>Last Active</th>
                  <th>Joined at</th>
                  <th>Account State</th>
                  <th>More Info</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td className={styles['font-bold']}>{member.fullName}</td>
                    <td className={styles['font-bold']}>{member.systemRole}</td>
                    <td className={styles['font-bold']}>{member.email}</td>
                    <td className={styles['font-bold']}>{member.lastActive}</td>
                    <td className={styles['font-bold']}>{member.joinedAt}</td>
                    <td>
                      <span className={`${styles['state-text']} ${getStatusClass(member.accountState)}`}>
                        {member.accountState.toLowerCase()}
                      </span>
                    </td>
                    <td>
                      <button type="button" className={styles['btn-view-more']}>
                        View More <span>⌵</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className={styles['table-footer']}>
            <span className={styles['footer-text']}>Showing 5 of 50 requests</span>
            <div className={styles['pagination-controls']}>
              <button type="button" className={styles['page-nav']}>‹</button>
              <button type="button" className={`${styles['page-num']} ${styles['page-num--active']}`}>1</button>
              <button type="button" className={styles['page-num']}>2</button>
              <button type="button" className={styles['page-num']}>3</button>
              <span className={styles['page-dots']}>....</span>
              <button type="button" className={styles['page-num']}>10</button>
              <button type="button" className={styles['page-nav']}>›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberssPage;