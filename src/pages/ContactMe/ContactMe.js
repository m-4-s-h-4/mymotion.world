import React from 'react';
import './contact_me.css';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact me</h1>
        <div className="links">
          <h4><a href="mailto:maria.borovikova96@gmail.com">Email</a></h4>
          <h4><a href="https://www.linkedin.com/in/maria-borovikova-66b117200/">LinkedIn</a></h4>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
