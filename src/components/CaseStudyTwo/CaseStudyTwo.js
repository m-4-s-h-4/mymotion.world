import React from 'react';
import styles from './CaseStudyTwo.module.css';

function CaseStudyTwo() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
      <h2 className={styles.storyHeading}>
      The Challenge of Seamless Transitions
        </h2>
      </div>
      <div className={styles.div2}>
      <div className={styles.div1}>
      <h4 className={styles.storyDetails}>
      One of the significant hurdles I faced was achieving natural-looking transitions—a 
      task as daunting as teaching a shoe to swim. Early attempts at these transitions were 
      clumsy and disjointed, more akin to a poorly orchestrated dance than the fluid motion I envisioned. 
      However, through persistence, creativity, and copious amounts of coffee, I eventually guided the 
      project through a series of organic transformations that felt both intuitive and engaging.
        </h4>
      </div>
      </div>
    </div>
  );
}

export default CaseStudyTwo;
