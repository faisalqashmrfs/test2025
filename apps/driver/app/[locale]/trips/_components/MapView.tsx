import React from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './MapView.module.css';

const SafePlus = Plus as unknown as React.FC<any>;
const SafeMinus = Minus as unknown as React.FC<any>;

export default function MapView() {
  return (
    <div className={styles.mapContainerWrapper}>
      <div className={styles.mapBackgroundMock}>
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop" 
          alt="Map Background" 
          className={styles.mapImageOverlay}
        />
      </div>

      <div className={styles.mapControlsGroup}>
        <button className={styles.mapControlBtn} title="Zoom In">
          <SafePlus className="w-4 h-4" />
        </button>
        <div style={{ height: '1px', backgroundColor: '#1e293b', width: '100%' }} />
        <button className={styles.mapControlBtn} title="Zoom Out">
          <SafeMinus className="w-4 h-4" />
        </button>
      </div>

      <div className={styles.mapLegendCard}>
        <div className={styles.legendItem}>
          <div className={styles.legendDotNavy} />
          <span>DRIVEN OFFERS</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDotOrange} />
          <span>CARRIER OFFERS</span>
        </div>
      </div>
    </div>
  );
}