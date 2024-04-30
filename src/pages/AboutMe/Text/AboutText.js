import React from 'react';
import styles from './AboutText.module.css'; // Import the CSS module

const AboutText = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
                <h2 className={styles.whiteText}>Hi, my name is Masha!</h2>
            </div>
            <div className={styles.div2}>
                <h3  className={styles.p1}>A frontend developer based in Spain with a passion for motion design. I'm inspired by digital artist Ben Marriott and his compelling storytelling techniques (and we both share passion for dinasaurs).
                    </h3>
                    <h3>
                    I enjoy working remotely and am always eager to take on new challenges in this dynamic field.
                    </h3>
            </div>
        </div>
    );
}

export default AboutText;
