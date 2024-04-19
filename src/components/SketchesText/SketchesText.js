import React from 'react';
import styles from './SketchesText.module.css';

function SketchesText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
          THESE EVOLVED INTO MORE REFINED STORYBOARD 
        </h2>
        
      </div>
      <div className={styles.div2}>
        <h4 className={styles.storyDetails}>
          They set the sequence of the animation, mapping out a storyboard that transitions the shoes from urban to natural settings.
          They set the sequence of the animation, mapping out a storyboard that transitions the shoes from urban to natural settings.
        </h4>
      </div>
    </div>
  );
}

export default SketchesText;
