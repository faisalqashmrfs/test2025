// _data/guideTabsConfig.ts

export interface SectionLink {
  id: string;
  label: string;
}

export interface TabConfig {
  id: string;
  label: string;
  sections: SectionLink[];
}

export const GUIDE_TABS: TabConfig[] = [
  {
    id: 'get-start',
    label: 'Get Start',
    sections: [
      { id: 'platform-overview', label: 'Platform Overview' },
      { id: 'account-setup', label: 'Account Setup' },
      { id: 'your-first-request', label: 'Your First Request' },
      { id: 'team-roles', label: 'Team & Roles' },
      { id: 'success-tips', label: 'Success Tips' },
    ],
  },
  {
    id: 'how-system-work',
    label: 'How System Work',
    sections: [
      { id: 'architecture', label: 'System Architecture' },
      { id: 'dispatch-flow', label: 'Dispatch Flow' },
    ],
  },
  {
    id: 'invoicing',
    label: 'Invoicing',
    sections: [
      { id: 'billing-overview', label: 'Billing Overview' },
      { id: 'payment-methods', label: 'Payment Methods' },
    ],
  },
  {
    id: 'documents',
    label: 'Documents',
    sections: [{ id: 'required-docs', label: 'Required Documents' }],
  },
  {
    id: 'rules',
    label: 'Rules',
    sections: [{ id: 'compliance', label: 'Compliance Standards' }],
  },
  {
    id: 'faq',
    label: 'FAQ',
    sections: [{ id: 'general-faq', label: 'General Questions' }],
  },
];