import React from 'react';
import styles from './CaseText.module.css';
import Divider from '../Divider/Diveder';

function CaseText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
        Quick Steps Through All Terrains
        </h2>
      </div>
      <div className={styles.div2}>
        <div className={styles.storyDetails}>
          <h3 className={styles.tag}>Motion Project</h3>
          <Divider/>
          <h4 className={styles.smallerText}>The mission was to visually encapsulate the shoe's unparalleled 
          adaptability and robust functionality in a compact, brisk 10-second animation 
          that appeals across various digital platforms. This brief yet potent visual 
          piece aimed to highlight the shoe’s utility in a myriad of landscapes.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CaseText;
