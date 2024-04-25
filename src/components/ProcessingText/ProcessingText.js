import React from 'react';
import styles from './ProcessingText.module.css';

function ProcessingText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div2}>
        <h2 className={styles.storyHeading}>
        PROCESSING EXPERIMNETS
        </h2>
      </div>
      <div className={styles.div1}>
      <h4 className={styles.storyDetails}>
      For the Tropicfeel All Terrain shoe campaign, I utilized Processing to animate grids that react to changes in the music's volume. As the music intensifies, the terrain depicted in the animation becomes larger and more rugged, emphasizing the versatility of the shoe soles designed for all types of terrain. Throughout this project, my experiments evolved from using jagged, broken lines to creating smooth, wave-like patterns that dance in sync with the soundtrack.
        </h4>
        <h4 className={styles.mute}>
        TAP ON VIDEO TO MUTE/UNMUTE
        </h4>
      </div>
    </div>
  );
}

export default ProcessingText;
