import React from 'react';
import styles from './QualificationsList.module.css';

export default function QualificationsList() {
  return (
    <div className={styles.container}>
      {/* 1. Mercedes */}
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <div className={styles.logoBox}>MB</div>
          <div className={styles.infoBox}>
            <div className={styles.title}>MERCEDES LUXURY UNIT</div>
            <div className={styles.description}>
              The Mercedes-Benz Transport Vehicle Services Qualification Exam evaluates the expertise and abilities required for professionals in the automotive transport industry.
            </div>
          </div>
        </div>
        <div className={styles.actionBox}>
          <button className={styles.downloadBtn}>Download Guide &gt;</button>
          <button className={styles.takeExamBtn}>Take the Exam &gt;</button>
        </div>
      </div>

      {/* 2. BMW */}
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <div className={styles.logoBox}>BMW</div>
          <div className={styles.infoBox}>
            <div className={styles.title}>BMW PRECISION</div>
            <div className={styles.description}>
              The BMW Transport Car Services Qualification Exam is designed to assess the knowledge and skills necessary for professionals in the automotive transport sector.
            </div>
          </div>
        </div>
        <div className={styles.actionBox}>
          <div className={styles.passedBadge}>PASSED</div>
        </div>
      </div>

      {/* 3. Tesla */}
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <div className={styles.logoBox}>TESLA</div>
          <div className={styles.infoBox}>
            <div className={styles.title}>TESLA AUTONOMY</div>
            <div className={styles.description}>
              The Tesla Autonomy Certification evaluates expertise in electric vehicle software and autonomous driving technologies.
            </div>
          </div>
        </div>
        <div className={styles.actionBox}>
          <div className={styles.inProgressBadge}>IN PROGRESS</div>
        </div>
      </div>

      {/* 4. Audi */}
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <div className={styles.logoBox}>AUDI</div>
          <div className={styles.infoBox}>
            <div className={styles.title}>AUDI CONNECTIVITY</div>
            <div className={styles.description}>
              This exam tests proficiency in automotive connectivity and infotainment systems, focusing on Audi&apos;s latest models.
            </div>
          </div>
        </div>
        <div className={styles.actionBox}>
          <button className={styles.downloadBtn}>Download Guide &gt;</button>
          <button className={styles.takeExamBtn}>Take the Exam &gt;</button>
        </div>
      </div>
    </div>
  );
}