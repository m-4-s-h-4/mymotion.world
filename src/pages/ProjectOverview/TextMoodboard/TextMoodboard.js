import React from 'react';
import styles from './TextMoodboard.module.css'; // Import the CSS module

const TextMoodboard = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
                <h2 className={styles.whiteText}>IMAGES THAT INSPIRED THE VIDEO IDEA</h2>
            </div>
            <div className={styles.div2}>
                <h3>The concept for the 10-second video was inspired by compelling black and white images that used a white grid to illustrate terrains with significant displacement effects. The vivid contrast and precise geometry of these images evoked a sense of depth and movement. Additionally, the choice of style was influenced by Tropicfeel's use of only black and white, particle, and line effect styles in their All Terrain campaign. This thematic alignment added an extra layer of coherence and artistic continuity to the project, enhancing its visual impact and thematic depth.
                    </h3>
            </div>
        </div>
    );
}

export default TextMoodboard;
