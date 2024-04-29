import React from 'react';
import styles from './ImagesConclusion.module.css'; // Import the CSS module

const ImagesConclusion = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
            <img src="typewriter.png" alt="sketch of terrain made in photoshop using liquify" className={styles.image}/>
            <h4 className={styles.tag}>Typewritter effect in aftereffects</h4>
            </div>
            <div className={styles.div2}>
                <img src="logo_conclusion.gif" alt="sketch of terrain made in photoshop using liquify" className={styles.image}/>
                <h4 className={styles.tag}>Adding logo animation</h4>
            </div>
        </div>
    );
}

export default ImagesConclusion;
