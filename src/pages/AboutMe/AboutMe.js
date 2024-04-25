import React from 'react';
import './about_me.css';
import Lottie from 'lottie-react';
import remote_anim from './remote_anim.json';
import cat_anim from './cat_anim.json';
import inspire_anim from './inspire_anim.json';
import Divider from '../../components/Divider/Diveder';
const AboutMe = () => {
    return (
        <div className="about-container">
            <h2><span className="white-text">A BIT</span> <span className="orange-text">ABOUT ME</span></h2>
            <Divider/>
            <div className="info-sections">
               
                <div className="info-block">
                    <Lottie className="lottie-block" animationData={remote_anim} loop={true} autoplay={true} />
                    <h3>MOTION DESIGNER AND FRONTEND</h3>
                    <h4>I specialize in animating interfaces and developing user-centric websites, crafting seamless online experiences.</h4>
                </div>
                 <div className="info-block">
                    <Lottie className="lottie-block" animationData={cat_anim} loop={true} autoplay={true} />
                    <h3>BASED IN SPAIN AND open to REMOTE</h3>
                    <h4>Based in the sunny Spain, I am continually delighted to collaborate and innovate from the tranquility of my home office.</h4>


                </div>
                <div className="info-block">
                    <Lottie className="lottie-block" animationData={inspire_anim} loop={true} autoplay={true} />
                    <h3>THINGS THAT INSPIRE ME in my work</h3>
                    <h4>Influenced by Ben Marriott's engaging storytelling, I always integrate his narrative-driven approach into my design philosophy.</h4>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
