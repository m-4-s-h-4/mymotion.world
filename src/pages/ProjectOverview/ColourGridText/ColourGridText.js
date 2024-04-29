import React from 'react';
import styles from './ColourGridText.module.css';
import ColorGrid from './ColorGrid/ColorGrid';

function ColourGridText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
        CROLOUR PALLETE SELECTION
        </h2>
        <div className={styles.storyDetails}>
          <h3 className={styles.smallerText}>
          For this project, I focused on a striking yet simple color scheme of black and white. The visual style incorporates white line drawings on a black background, emphasizing clarity and contrast, which enhances the design's boldness and visual impact.
          </h3>
          <div className={styles.buttonContainer}>
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <ColorGrid/>
      </div>
    </div>
  );
}

export default ColourGridText;
