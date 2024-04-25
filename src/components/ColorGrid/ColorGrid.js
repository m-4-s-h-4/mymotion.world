import React from 'react';
import styles from './ColorGrid.module.css';

const ColorGrid = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}><h2 className={styles.storyHeading}>
      crolour pallete selection 
      <h4 className={styles.storyDetails}>
      For this project, I focused on a striking yet simple color scheme of black and white. The visual style incorporates white line drawings on a black background, emphasizing clarity and contrast, which enhances the design's boldness and visual impact.
        </h4></h2>
        </div>
      <div className={styles.div2}>BLACK</div>
      <div className={styles.div3}>WHITE</div>
    </div>
  );
}

export default ColorGrid;
