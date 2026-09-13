// settings/_data/settingsTabsConfig.ts

export interface SettingsTabItem {
  id: string;
  label: string;
}

export const SETTINGS_TABS: SettingsTabItem[] = [
  { id: 'company-profile', label: 'Company Profile' },
  { id: 'contact-address', label: 'Contact & Address' },
  { id: 'security', label: 'Security' },
  { id: 'documents-verification', label: 'Documents and Verification' },
  { id: 'payment', label: 'Payment' },
  { id: 'notifications', label: 'Notifications' },
];