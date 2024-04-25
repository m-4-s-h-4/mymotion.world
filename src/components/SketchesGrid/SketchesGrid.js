import React from 'react';
import styles from './SketchesGrid.module.css';

function SketchesGrid() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <img className={styles.image1} src="terrain.png" alt="sketches in aftereffects" />
      </div>
      <div className={styles.div2}>
        <img className={styles.image2} src="shoe.png" alt="sketches in aftereffects" />
      </div>
    </div>
  );
}

export default SketchesGrid;
