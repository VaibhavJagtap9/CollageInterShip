'use client';

import React from 'react';
import styles from '../../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardHeader}>Dashboard</h1>
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Total Post</h2>
          <p className={styles.cardNumber}>0</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Active Post</h2>
          <p className={styles.cardNumber}>0</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Inactive Post</h2>
          <p className={styles.cardNumber}>0</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Total Active Users</h2>
          <p className={styles.cardNumber}>0</p>
        </div>
      </div>
      <div className={styles.recentlyAdded}>
        <h2 className={styles.recentlyAddedTitle}>Recently Added Internship / Job</h2>
        <p className={styles.recentlyAddedText}>Internship / job not added Yet !!</p>
      </div>
    </div>
  );
};

export default Dashboard;
