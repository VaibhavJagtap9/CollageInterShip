// components/BasicDetails.tsx

import React from 'react';
import styles from '../../styles/BasicDetails.module.css';

const BasicDetails = () => {
  return (
    <div className={styles.basicDetailsContainer}>
      <h2 className={styles.sectionTitle}>Basic Details</h2>
      <form className={styles.basicDetailsForm}>
        <div className={styles.formGroup}>
          <label htmlFor="industry-type">Industry Type <span>*</span></label>
          <select id="industry-type" className={styles.formControl}>
            <option>--Select--</option>
            <option>Option 1</option>
            <option>Option 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="industry-name">Industry Name <span>*</span></label>
          <input id="industry-name" type="text" placeholder="Please Enter Name" className={styles.formControl} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="org-name">Organisation Name <span>*</span></label>
          <input id="org-name" type="text" placeholder="Please Enter Organisation Name" className={styles.formControl} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="org-type">Organisation Type <span>*</span></label>
          <select id="org-type" className={styles.formControl}>
            <option>--Select--</option>
            <option>Option 1</option>
            <option>Option 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="num-employees">Number of Employees <span>*</span></label>
          <select id="num-employees" className={styles.formControl}>
            <option>--Select--</option>
            <option>Option 1</option>
            <option>Option 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
