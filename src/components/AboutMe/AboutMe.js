import React from 'react';
import './about_me.css';
import Lottie from 'lottie-react';
import remote_anim from './remote_anim.json';
import cat_anim from './cat_anim.json';
import inspire_anim from './inspire_anim.json';
const AboutMe = () => {
    return (
        <div className="about-container">
            <h2><span className="white-text">A BIT</span> <span className="orange-text">ABOUT ME</span></h2>
            <div className="divider"></div>
            <div className="info-sections">
               
                <div className="info-block">
                <Lottie className="lottie-block" animationData={remote_anim} loop={true} autoplay={true} />
                    <h3>MOTION & FRONTEND</h3>
                    <h4>I animate interfaces and engineer responsive layouts with a focus on user experience.</h4>
                </div>
                 <div className="info-block">
                <Lottie className="lottie-block" animationData={cat_anim} loop={true} autoplay={true} />
                    <h3>OPEN FOR REMOTE</h3>
                    <h4> I thrive in the quiet chaos of my home office, where my cat supervises all of the Zoom calls.</h4>
                </div>
                <div className="info-block">
                <Lottie className="lottie-block" animationData={inspire_anim} loop={true} autoplay={true} />
                    <h3>THINGS THAT INSPIRE ME</h3>
                    <h4>Inspired by Ben Marriott’s storytelling, his influence shapes my narrative approach.</h4>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
