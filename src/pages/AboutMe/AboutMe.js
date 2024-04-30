import React from 'react';
import styles from './AboutMe.module.css'; // Import the CSS module
import AboutText from './Text/AboutText';

const AboutMe = () => {
    const videoRef = React.useRef(null); // Create a ref for the video element

    const handleMouseEnter = () => {
        videoRef.current.play(); // Play the video when mouse enters
    };

    const handleMouseLeave = () => {
        videoRef.current.pause(); // Pause the video when mouse leaves
    };

    return (
        <div className={styles.aboutmeContainer}>
            <AboutText/>
            <div className={styles.imageContainer}>
                <video
                    ref={videoRef}
                    src="dragon.mov" // Specify your video file here
                    alt="Animation of a dragon with fire"
                    className={styles.image}
                    loop // Loop the video if needed
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    muted // Mute the video, required for autoplay on most browsers
                />
            </div>
        </div>
    );
}

export default AboutMe;
