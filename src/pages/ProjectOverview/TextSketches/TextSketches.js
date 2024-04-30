import React from 'react';
import styles from './TextSketches.module.css';
function TextSketches() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
        A JOURNEY FROM SKETCH TO SCREEN
        </h2>
        <div className={styles.storyDetails}>
          <h3 className={styles.smallerText}>
          I initially sketched the shoe's sole, intending to reflect the rugged terrain it was designed to conquer. For the terrain sketch I started by manipulating a grid using Photoshop’s liquify and displacement tools to simulate terrain textures, it wasn't quite capturing the robustness I envisioned. This challenge led me to leverage my coding skills, employing the Processing programming environment to create a dynamic, grid-based terrain inspired by my initial sketches.
          </h3>
          <div className={styles.buttonContainer}>
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <img src="shoe.png" alt="Sole of the shoe that I drew in ProCreateDescriptive" className={styles.image}/>
        <h4 className={styles.tag}>Sole of the shoe that I drew in ProCreate</h4>
      </div>
    </div>
  );
}

export default TextSketches;
