// components/WebsiteAbout.tsx

import React from 'react';
import styles from '../../styles/WebsiteAbout.module.css';

const WebsiteAbout = () => {
  return (
    <div className={styles.websiteAboutContainer}>
      <h2 className={styles.sectionTitle}>Website</h2>
      <form className={styles.websiteAboutForm}>
        <div className={styles.formGroup}>
          <label htmlFor="web-url">Web Site URL <span>*</span></label>
          <input id="web-url" type="text" placeholder="Please Enter Organisation Website URL" className={styles.formControl} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="org-type-name">Organisation Type Name <span>*</span></label>
          <select id="org-type-name" className={styles.formControl}>
            <option>--Select--</option>
            {/* Add other options here */}
          </select>
        </div>
        <h2 className={styles.sectionTitle}>About Organisation</h2>
        <div className={styles.formGroup}>
          <label htmlFor="about">About <span>*</span></label>
          <textarea id="about" placeholder="Please Enter About Organisation" className={styles.formControl}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="upload-logo">Upload Logo</label>
          <input id="upload-logo" type="file" className={styles.formControl} />
        </div>
        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

export default WebsiteAbout;
