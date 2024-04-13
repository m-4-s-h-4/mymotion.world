import React from 'react';
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
        <button className="pulsateButton">View →</button> {/* Button with pulsating effect */}
      </div>
      <div className="imageContainer">
      </div>
    </div>
  );
}

export default CaseStudy;
