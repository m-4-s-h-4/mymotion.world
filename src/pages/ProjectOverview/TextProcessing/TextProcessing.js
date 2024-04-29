import React from 'react';
import styles from './TextProcessing.module.css'; // Import the CSS module

const TextProcessing = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
                <h2 className={styles.whiteText}>CREATing TERRAIN with processing</h2>
            </div>
            <div className={styles.div2}>
            <h3 className={styles.p1}>Processing is designed to enable the creation of interactive animations, graphics, and prototypes through coding. It also supports syncing visuals with music, enhancing multimedia projects.
                    </h3>
                <h3>I utilized Processing to animate grids that react to changes in the music's volume. As the music intensifies, the terrain depicted in the animation becomes larger and more rugged, emphasizing the versatility of the shoe soles designed for all types of terrain. 
                    </h3>
                    <h4 className={styles.mute}>
        TAP ON VIDEO TO MUTE/UNMUTE
        </h4>
            </div>
        </div>
    );
}

export default TextProcessing;
