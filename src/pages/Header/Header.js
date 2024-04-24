import React from 'react';
import Lottie from 'lottie-react';
import intro_anim from './intro_anim.json';
import './header.css'; 

const Header = () => {
    return (
        <div className="header">
            <div className="lottie-background">
                <Lottie animationData={intro_anim} loop={true} autoplay={true} />
            </div>
            <div className="container">
                <h1 className="title-container">frontend</h1>
                <div className="inline-container">
                <svg  className="svg-one" width="133" height="134" viewBox="0 0 133 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M73 132.5H61.5L61.5 78.2643C61.5 73.9255 57.1667 72.2845 55 72.0064H1.5L1.5 61.5764H55C58.6 61.5764 60.8333 57.4045 61.5 55.3185L61.5 1.5H73C73.1667 17.6316 73.4 50.9796 73 55.3185C72.6 59.6573 77.5 61.2983 80 61.5764H131.5V72.0064L80 72.0064C74.4 72.0064 73 76.1783 73 78.2643V132.5Z" fill="#E8F7FF" stroke="#E8F7FF" stroke-width="2"/>
                    </svg>

                    <h1 className="title-container">motion</h1>
                </div>
                <h1 className="title-container">designer</h1>
            </div>
        </div>
    );
};

export default Header;
