// components/JobInternshipDetails.tsx

import React from 'react';
import styles from '../../styles/job-internship-details.module.css';

const JobInternshipDetails: React.FC = () => {
  return (
    <div className={styles.jobInternshipContainer}>
      <h2>Internship 2024 - 2025</h2>
      <div className="form-group">
        <label>District</label>
        <select name="district" className={styles.select}>
          <option value="">Select</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group">
        <label>Taluka</label>
        <select name="taluka" className={styles.select}>
          <option value="">Select</option>
          {/* Add options here */}
        </select>
      </div>
      <div className={styles.buttonGroup}>
        <button type="button" className={styles.primaryButton}>Search</button>
        <button type="button" className={styles.secondaryButton}>Clear</button>
      </div>
      <p className={styles.infoText}>Internship / Job details not found !!</p>
      <div className={styles.buttonGroup}>
        <button type="button" className={styles.primaryButton}>Add Job/Internship</button>
        <button type="button" className={styles.primaryButton}>Add Poster</button>
      </div>
    </div>
  );
};

export default JobInternshipDetails;
