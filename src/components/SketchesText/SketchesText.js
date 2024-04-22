import React from 'react';
import styles from './SketchesText.module.css';

function SketchesText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
        A Journey from Sketch to Screen
        </h2>
        
      </div>
      <div className={styles.div2}>
        <h4 className={styles.storyDetails}>
        Transitioning these spontaneous beginnings into a more structured digital format marked the next phase of my creative process. Back in the studio, I meticulously transformed these sketches into detailed storyboards using a high-end graphic tablet. The rough, primitive lines from my café napkins evolved into sharp, defined vectors. This transformation was crucial as it allowed me to accurately plan out the dynamic environmental transitions that would become the cornerstone of the animation.


        </h4>
      </div>
    </div>
  );
}

export default SketchesText;
