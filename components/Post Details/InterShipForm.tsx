"use client";

import React from 'react';
import styles from '../../styles/InternshipForm.module.css';

const InternshipForm: React.FC = () => {
  return (
    <div className={styles.internshipForm}>
      <h2 className={styles.internshipTitle}>Stipend</h2>
      <form>
        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="stipendType">Stipend Type *</label>
          <select id="stipendType" name="stipendType" className={styles.input}>
            <option value="">--Select--</option>
            {/* Add other options as needed */}
          </select>
        </div>

        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="stipendAmountTerm">Stipend Amount Term *</label>
          <div className={styles.radioGroup}>
            <label>
              <input type="radio" name="stipendAmountTerm" value="weekly" /> Weekly
            </label>
            <label>
              <input type="radio" name="stipendAmountTerm" value="monthly" /> Monthly
            </label>
            <label>
              <input type="radio" name="stipendAmountTerm" value="lumpsum" /> Lumpsum
            </label>
          </div>
        </div>

        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="stipendAmount">Stipend Amount *</label>
          <input type="text" id="stipendAmount" name="stipendAmount" className={styles.input} />
        </div>

        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="description">Description *</label>
          <textarea id="description" name="description" className={styles.textarea}></textarea>
        </div>

        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="assessmentUrl">Assessment URL</label>
          <input type="text" id="assessmentUrl" name="assessmentUrl" className={styles.input} />
        </div>

        <h2 className={styles.internshipTitle}>Contact Person Details</h2>
        
        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="contactPersonName">Contact Person Name *</label>
          <input type="text" id="contactPersonName" name="contactPersonName" className={styles.input} />
        </div>

        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="contactPersonMobile">Mobile Number of Contact Person *</label>
          <input type="text" id="contactPersonMobile" name="contactPersonMobile" className={styles.input} />
        </div>

        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="contactPersonEmail">Email of Contact Person *</label>
          <input type="email" id="contactPersonEmail" name="contactPersonEmail" className={styles.input} />
        </div>

        <div className={styles.internshipSection}>
          <label className={styles.label} htmlFor="contactPersonDesignation">Designation of Contact Person *</label>
          <input type="text" id="contactPersonDesignation" name="contactPersonDesignation" className={styles.input} />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.saveButton}>Save</button>
          <button type="reset" className={styles.clearButton}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default InternshipForm;
