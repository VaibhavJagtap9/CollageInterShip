import React from 'react';
import styles from '../../styles/poster-details.module.css';

const PosterDetails: React.FC = () => {
  return (
    <div className={styles.posterDetailsContainer}>
      <h2>Internship 2024 - 2025</h2>
      <p>No Any Poster added Yet !!</p>
      <div className={styles.buttonGroup}>
        <button type="button" className={styles.primaryButton}>Add Poster</button>
        <button type="button" className={styles.secondaryButton}>Back To List</button>
      </div>
    </div>
  );
};

export default PosterDetails;
