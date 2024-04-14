import React from 'react';
import './about_me.css';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h1 className="about-me-title" >About Me</h1>
            <div className="about-me-grid">
                <div className="grid-item">
                    <h3>Based in Spain, Barcelona</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                </div>
                <div className="grid-item">
                    <h3>Open for remote work</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                </div>
                <div className="grid-item">
                    <h3>Frontend development</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                </div>
                <div className="grid-item">
                    <h3>Motion design</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
