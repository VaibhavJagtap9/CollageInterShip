'use client';

import React from 'react';
import styles from '../../styles/MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainTitle}>Internship 2024 - 2025</div>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Qualification</h2>
        <div className={styles.formGroup}>
          <label>Faculty *</label>
          <select className={styles.input}>
            <option>--Select--</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Select Education Type *</label>
          <input className={styles.input} type="text" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Location</h2>
        <div className={styles.formGroup}>
          <label>Current Job Location</label>
          <input className={styles.input} type="text" placeholder="Enter Current Job Location for the post..." />
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="sameLocation" className={styles.checkbox} />
            <label htmlFor="sameLocation">Job Location Address same as per above</label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Permanent Job Location *</label>
          <input className={styles.input} type="text" placeholder="Enter Permanent Job Location for the post..." />
        </div>
        <div className={styles.formGroup}>
          <label>District *</label>
          <select className={styles.input}>
            <option>Ratnagiri</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Taluka *</label>
          <select className={styles.input}>
            <option>--Select--</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
