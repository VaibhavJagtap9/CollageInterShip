import React from 'react';
import '../styles/add-job-internship.css';

const AddJobInternship: React.FC = () => {
  return (
    <div className="add-job-internship-container">
      <h2>Internship 2024 - 2025</h2>
      <h3>Instructions</h3>
      <p>Provide a clear and concise title that describes the job or internship. Include a brief description that explains what the position entails and why it's a good fit for potential candidates.</p>
      <p>Specify the location of the job or internship and provide information on how candidates can apply. If the position requires a specific application process, such as an online form or paper application, include that information here.</p>
      <p>Outline the eligibility criteria for the job or internship, such as education requirements, work experience, or specific skills. Include any age or experience requirements if applicable.</p>
      <p>List the main responsibilities and duties of the job or internship. Include any specific tasks, projects, or areas of focus that candidates can expect to be involved in.</p>
      
      <form>
        <div className="form-group">
          <label>Faculty</label>
          <select name="faculty">
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label>Select Education Type</label>
          <input type="text" name="educationType" />
        </div>
        <div className="form-group">
          <label>Upload Poster / Booklet (Only .jpeg/.jpg format allowed)</label>
          <input type="file" name="poster" />
        </div>
        <button type="submit">Save</button>
        <button type="button">Clear</button>
      </form>
    </div>
  );
};

export default AddJobInternship;
