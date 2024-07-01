'use client';

import React from 'react';
import styles from '../../styles/PosterBasicDetails.module.css';

const BasicDetailsForm: React.FC = () => {
  return (
    <div className={styles.basicDetailsContainer}>
      <h2 className={styles.sectionTitle}>Basic Details</h2>
      <form className={styles.basicDetailsForm}>
        <div className={styles.formGroup}>
          <label>Internship / Job Type *</label>
          <div>
            <input type="radio" id="ojt" name="jobType" value="OJT" />
            <label htmlFor="ojt">OJT (On Job Training)</label>
            <input type="radio" id="internship" name="jobType" value="Internship" />
            <label htmlFor="internship">Internship</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="skill">Skill *</label>
          <input type="text" id="skill" name="skill" placeholder="Enter Post Skill" />
        </div>

        <div className={styles.formGroup}>
          <label>Work Type *</label>
          <div>
            <input type="radio" id="inOffice" name="workType" value="In Office" />
            <label htmlFor="inOffice">In Office</label>
            <input type="radio" id="hybrid" name="workType" value="Hybrid" />
            <label htmlFor="hybrid">Hybrid</label>
            <input type="radio" id="remote" name="workType" value="Remote" />
            <label htmlFor="remote">Remote</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="numberOfPost">Number of Post *</label>
          <input type="number" id="numberOfPost" name="numberOfPost" placeholder="Enter Number of Post" />
        </div>

        <div className={styles.formGroup}>
          <label>Joining Type *</label>
          <div>
            <input type="radio" id="immediate" name="joiningType" value="Immediate" />
            <label htmlFor="immediate">Immediate</label>
            <input type="radio" id="later" name="joiningType" value="Later" />
            <label htmlFor="later">Later</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Duration *</label>
          <div>
            <input type="radio" id="weekly" name="duration" value="Weekly" />
            <label htmlFor="weekly">Weekly</label>
            <input type="radio" id="monthly" name="duration" value="Monthly" />
            <label htmlFor="monthly">Monthly</label>
            <input type="radio" id="yearly" name="duration" value="Yearly" />
            <label htmlFor="yearly">Yearly</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Part/Full Time Type *</label>
          <div>
            <input type="radio" id="partTime" name="timeType" value="Part Time" />
            <label htmlFor="partTime">Part Time</label>
            <input type="radio" id="fullTime" name="timeType" value="Full Time" />
            <label htmlFor="fullTime">Full Time</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="startDate">Start Date *</label>
          <input type="date" id="startDate" name="startDate" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="endDate">End Date *</label>
          <input type="date" id="endDate" name="endDate" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="responsibilities">Responsibilities *</label>
          <textarea id="responsibilities" name="responsibilities" placeholder="Enter Responsibilities for the post..."></textarea>
        </div>
      </form>
    </div>
  );
};

export default BasicDetailsForm;
