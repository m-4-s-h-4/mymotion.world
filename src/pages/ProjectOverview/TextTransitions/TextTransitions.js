import React from 'react';
import styles from './TextTransitions.module.css'; // Import the CSS module

const TextTransitions = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
                <h2 className={styles.whiteText}>Creating TRANSITIONS</h2>
            </div>
            <div className={styles.div2}>
                <h3>I opted for transitions using changes in opacity and scale: as one element fades out and shrinks, the next emerges by becoming more opaque and enlarging. To enhance the realism, I also incorporated motion blur. This approach effectively demonstrates the dynamic qualities of the All Terrain shoes in a brief, impactful format.
                    </h3>
            </div>
        </div>
    );
}

export default TextTransitions;
