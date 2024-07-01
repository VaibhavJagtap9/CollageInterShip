'use client';

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../styles/Registration.module.css';

const Registration: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Organisation Registration</h2>
        <form className={styles.registrationForm}>
          <fieldset className={styles.formSection}>
            <legend>Authorized Contact Person Details</legend>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name<span>*</span></label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
          </fieldset>
          <fieldset className={styles.formSection}>
            <legend>Company Details</legend>
            <div className={styles.formGroup}>
              <label htmlFor="orgName">Organisation Name<span>*</span></label>
              <input type="text" id="orgName" name="orgName" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="orgType">Organisation Type<span>*</span></label>
              <select id="orgType" name="orgType" required>
                <option value="">--Select--</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Id<span>*</span></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="mobile">Mobile No<span>*</span></label>
              <input type="tel" id="mobile" name="mobile" required />
            </div>
          </fieldset>
          <div className={styles.formActions}>
            <button type="submit" className={styles.btnPrimary}>Verify Email & Mobile</button>
            <button type="button" className={styles.btnSecondary}>Cancel</button>
          </div>
          <div className={styles.formLinks}>
            <a href="#" className={styles.loginLink}>Already have an account? Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
