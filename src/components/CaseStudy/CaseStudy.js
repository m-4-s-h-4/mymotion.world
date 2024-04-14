import React from 'react';
import { Link } from 'react-router-dom';
import './case_study.css'; 

function CaseStudy() {
  return (
    <div className="caseStudyContainer">
      <div className="textContainer">
        <h1 className="caseStudyText">Case Study</h1>
        <h4 className="subHeading">
          Checkout my most recent case study I have done using After Effects for Northface.
          Checkout my most recent case study I have done using After Effects for Northface
          Checkout my most recent case study I have done using After Effects for Northface
        </h4>
        <Link className="pulsateButton" to="/case-study">View →</Link>

      </div>
      <div className="imageContainer">
      </div>
    </div>
  );
}

export default CaseStudy;
