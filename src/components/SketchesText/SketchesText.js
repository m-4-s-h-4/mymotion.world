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
        I initially sketched the shoe's sole, intending to reflect the rugged terrain it was designed to conquer. For the terrain sketch I started by manipulating a grid using Photoshop’s liquify and displacement tools to simulate terrain textures, it wasn't quite capturing the robustness I envisioned. This challenge led me to leverage my coding skills, employing the Processing programming environment to create a dynamic, grid-based terrain inspired by my initial sketches.
        </h4>
      </div>
    </div>
  );
}

export default SketchesText;
