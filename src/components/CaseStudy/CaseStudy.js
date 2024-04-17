import React from 'react';
import './case_study.css'; 

const CaseStudy = () => {
    return (
        <div className="case-container">
            <div className="parent">
                <div className="text-and-logo">
                    <div className="text-container">
                        <h2 className="text-white">Tropicfeel</h2>
                        <h2 className="text-orange">Overview</h2>
                        <h4>Animating the ultimate travel companion for Tropicfeel Canyon shoe in an eye-catching 10sec video.</h4>
                    </div>
                    <div className="logo-container">
                        <img src="logo.png" alt="Logo of Tropicfeel" />
                    </div>
                </div>
                <div className="shoes-container">
                    <img src="shoes.png" alt="Description of image for div2" />
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;
