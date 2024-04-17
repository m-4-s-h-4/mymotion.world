import React from 'react';
import './about_me.css';

const AboutMe = () => {
    return (
        <div className="about-container">
            <h2><span className="white-text">A BIT</span> <span className="orange-text">ABOUT ME</span></h2>
            <div className="divider"></div>
            <div className="info-sections">
                <div className="info-block">
                    <img src="about-1.png" alt="Description of image 1" />
                    <h3>OPEN FOR REMOTE</h3>
                    <h4>Lorem ipsum dolor sit amet,consectetur.Lorem ipsum dolor sit amet, consectetur</h4>
                </div>
                <div className="info-block">
                    <img src="about-1.png" alt="Description of image 2" />
                    <h3>MOTION & FRONTEND</h3>
                    <h4>Lorem ipsum dolor sit amet,consectetur.Lorem ipsum dolor sit amet, consectetur</h4>
                </div>
                <div className="info-block">
                    <img src="about-1.png" alt="Description of image 3" />
                    <h3>THINGS THAT INSPIRE ME</h3>
                    <h4>Lorem ipsum dolor sit amet,consectetur.Lorem ipsum dolor sit amet, consectetur</h4>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
