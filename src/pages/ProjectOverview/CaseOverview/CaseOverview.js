import React from 'react';
import styles from './CaseOverview.module.css';

function CaseOverview() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
        TROPICFEEL
PROJECT OVERVIEW
        </h2>
        <h4 className={styles.tags}>
          motion · aftereffects · adobe
        </h4>
        <div className={styles.storyDetails}>
          <h3 className={styles.smallerText}>
          The project brief is to create a 10-second animation that highlights the adaptability and robustness of Tropicfeel's latest All Terrain shoes. The animation must align with the brand's existing campaign style, emphasizing the shoe's versatility across diverse environments. The goal is to visually demonstrate how these shoes can effortlessly transition between different terrains, reinforcing their all-terrain capability within the brand’s established aesthetic framework.
          </h3>
          <div className={styles.buttonContainer}>
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <img src="final.gif" alt="Descriptive Alt Text" className={styles.image}/>
      </div>
    </div>
  );
}

export default CaseOverview;
