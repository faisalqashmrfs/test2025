'use client';

import React, { useState } from 'react';
import styles from '../TripProtocolsReview.module.css';
import { GalleryItem } from '../_types/types';

interface VehicleGallerySectionProps {
  galleryItems: GalleryItem[];
}

export const VehicleGallerySection: React.FC<VehicleGallerySectionProps> = ({ galleryItems }) => {
  const [isOpenExteriorMain, setIsOpenExteriorMain] = useState(true);

  return (
    <div>
      <h2 className={styles.tpr_sectionTitle}>Vehicle Gallery</h2>
      
      <div 
        className={styles.tpr_accordionRow} 
        onClick={() => setIsOpenExteriorMain(!isOpenExteriorMain)}
      >
        <span>Exterior Main</span>
        <span style={{ transform: isOpenExteriorMain ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
          ❯
        </span>
      </div>

      {isOpenExteriorMain && (
        <div className={styles.tpr_galleryGrid} style={{ marginTop: '1rem' }}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.tpr_galleryCard}>
              <img src={item.imageUrl} alt={item.title} />
              <div className={styles.tpr_galleryOverlay}>
                <div className={styles.tpr_galleryTitle}>{item.title}</div>
                <div className={styles.tpr_gallerySub}>{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.tpr_accordionRow} style={{ marginTop: '1rem' }}>
        <span>Exterior Corner Angles</span>
        <span>❯</span>
      </div>
      <div className={styles.tpr_accordionRow}>
        <span>Exterior Doors & Panels</span>
        <span>❯</span>
      </div>
    </div>
  );
};