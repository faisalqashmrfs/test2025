// _components/common/SidebarNav.tsx
import React from 'react';
import styles from '../../DriverGuideCenter.module.css';
import { SectionLink } from '../../_data/guideTabsConfig';

interface SidebarNavProps {
  sections: SectionLink[];
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  sections,
  activeSection,
  onSelectSection,
}) => {
  if (!sections || sections.length === 0) return null;

  return (
    <aside className={styles['xcar-sidebar-nav']}>
      <span className={styles['xcar-sidebar-title']}>On this page</span>
      <nav className={styles['xcar-section-links']}>
        {sections.map((sec) => (
          <button
            key={sec.id}
            className={`${styles['xcar-section-link-btn']} ${
              activeSection === sec.id ? styles['xcar-section-link-btn--active'] : ''
            }`}
            onClick={() => onSelectSection(sec.id)}
          >
            {sec.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;