import React from 'react';
import styles from './WavesImages.module.css';

function WavesImages() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <img className={styles.image1} src="terrain.gif" alt="sketches in aftereffects" />
      </div>
      <div className={styles.div2}>
        <img className={styles.image2} src="water.gif" alt="sketches in aftereffects" />
      </div>
    </div>
  );
}

export default WavesImages;
