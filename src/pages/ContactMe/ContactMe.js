import React from 'react';
import './contact_me.css';

const ContactMe = () => {
  const Icon = () => (
    <svg width="0.8vw" height="0.8vw" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 16.5L18.5 1M18.5 1V18M18.5 1H0" stroke="#CFCFCF" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact me</h1>
        <div className="links">
          <h4><Icon /> <a href="mailto:maria.borovikova96@gmail.com">Email</a></h4>
          <h4><Icon /> <a href="https://www.linkedin.com/in/maria-borovikova-66b117200/">LinkedIn</a></h4>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
