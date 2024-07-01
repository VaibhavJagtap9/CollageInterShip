"use client";

import { useState } from 'react';
import '../styles/customStyles.css';

const OrgDetailsForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="custom-bg-gray-100 flex items-center justify-center min-h-screen custom-form-container">
      <div className="custom-w-full custom-max-w-md custom-p-8 custom-space-y-6 custom-bg-white custom-rounded custom-shadow-md">
        <h2 className="custom-text-2xl custom-font-bold custom-text-center">Organisation Login</h2>
        <form onSubmit={handleSubmit} className="custom-space-y-4">
          <div>
            <label htmlFor="email" className="custom-block custom-text-sm custom-font-medium custom-text-gray-700">Email ID</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="custom-w-full custom-px-3 custom-py-2 custom-mt-1 custom-border custom-rounded-md custom-shadow-sm custom-focus-ring-indigo-500 custom-focus-border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="custom-block custom-text-sm custom-font-medium custom-text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="custom-w-full custom-px-3 custom-py-2 custom-mt-1 custom-border custom-rounded-md custom-shadow-sm custom-focus-ring-indigo-500 custom-focus-border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="captcha" className="custom-block custom-text-sm custom-font-medium custom-text-gray-700">Enter Captcha Text</label>
            <input
              id="captcha"
              name="captcha"
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              required
              className="custom-w-full custom-px-3 custom-py-2 custom-mt-1 custom-border custom-rounded-md custom-shadow-sm custom-focus-ring-indigo-500 custom-focus-border-indigo-500"
            />
          </div>
          <div className="custom-flex custom-items-center custom-justify-between">
            <button
              type="submit"
              className="custom-px-4 custom-py-2 custom-font-medium custom-text-white custom-bg-indigo-600 custom-rounded-md custom-hover-bg-indigo-700"
            >
              Log In
            </button>
            <a href="#" className="custom-text-sm custom-text-indigo-600 custom-hover-underline">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrgDetailsForm;
