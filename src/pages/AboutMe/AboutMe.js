import React from 'react';
import styles from './AboutMe.module.css'; // Import the CSS module
import AboutText from './Text/AboutText';

const AboutMe = () => {
    return (
        <div className={styles.aboutmeContainer}>
            <AboutText/>
            <div className={styles.imageContainer}>
            <img src="eyes.png" alt="Descriptive Alt Text" className={styles.image}/>
        </div>
        </div>

    );
}

export default AboutMe;
