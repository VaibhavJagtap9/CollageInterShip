import React from 'react';
import styles from '../../styles/addjobintership.module.css';

const AddJobInternship: React.FC = () => {
  return (
    <div className={styles.addJobInternshipContainer}>
      <h2>Internship 2024 - 2025</h2>
      <h3>Instructions</h3>
      <p>Provide a clear and concise title that describes the job or internship. Include a brief description that explains what the position entails and why it's a good fit for potential candidates.</p>
      <p>Specify the location of the job or internship and provide information on how candidates can apply. If the position requires a specific application process, such as an online form or paper application, include that information here.</p>
      <p>Outline the eligibility criteria for the job or internship, such as education requirements, work experience, or specific skills. Include any age or experience requirements if applicable.</p>
      <p>List the main responsibilities and duties of the job or internship. Include any specific tasks, projects, or areas of focus that candidates can expect to be involved in.</p>
      
      <form>
        <div className={styles.formGroup}>
          <label>Faculty</label>
          <select name="faculty" className={styles.formControl}>
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Select Education Type</label>
          <input type="text" name="educationType" className={styles.formControl} />
        </div>
        <div className={styles.formGroup}>
          <label>Upload Poster / Booklet (Only .jpeg/.jpg format allowed)</label>
          <input type="file" name="poster" className={styles.formControl} />
        </div>
        <button type="submit" className={styles.submitBtn}>Save</button>
        <button type="button" className={styles.secondaryBtn}>Clear</button>
      </form>
    </div>
  );
};

export default AddJobInternship;
