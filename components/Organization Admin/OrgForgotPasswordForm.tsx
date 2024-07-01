'use client';

import { useState } from 'react';
import styles from '../../styles/forgotPasswordStyles.module.css';

const OrgForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Organisation Forgot Password</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email ID</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formActions}>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Verify Email
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={() => setEmail('')}
            >
              Cancel
            </button>
          </div>
          <div className={styles.formLinks}>
            <a href="#" className={styles.loginLink}>Already have an account? Log-In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrgForgotPasswordForm;
