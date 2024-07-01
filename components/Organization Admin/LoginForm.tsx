'use client';

import React from 'react';
import styles from '../../styles/LoginForm.module.css';

const LoginForm: React.FC = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <ul className={styles.sidebarMenu}>
          <li className={styles.sidebarMenuItem}>
            <a href="#" className={styles.sidebarMenuLink}>Menu Item 1</a>
          </li>
          <li className={styles.sidebarMenuItem}>
            <a href="#" className={styles.sidebarMenuLink}>Menu Item 2</a>
          </li>
          <li className={styles.sidebarMenuItem}>
            <a href="#" className={styles.sidebarMenuLink}>Menu Item 3</a>
          </li>
        </ul>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Organisation Login</h2>
          <form>
            <div className={styles.formGroup}>
              <label>Email id*</label>
              <input type="email" />
            </div>
            <div className={styles.formGroup}>
              <label>Password*</label>
              <input type="password" />
            </div>
            <div className={styles.formGroup}>
              <label>Enter captcha text *</label>
              <input type="text" />
            </div>
            <div className={styles.formActions}>
              <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Login</button>
              <button type="button" className={`${styles.btn} ${styles.btnSecondary}`}>Cancel</button>
            </div>
            <div className={styles.formLinks}>
              <a href="#">Create New account</a>
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
