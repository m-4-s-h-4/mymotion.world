import React from 'react';
import styles from './CaseText.module.css';
import LearnMoreButton from '../../../components/LearnMoreButton/LearnMoreButton';

function CaseText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
          Merging Code and Design in one video
        </h2>
        <h4 className={styles.tags}>
          motion · aftereffects · adobe
        </h4>
        <div className={styles.storyDetails}>
          <h3 className={styles.smallerText}>
            The mission was to create a concise 10-second animation that showcases 
            the shoe's exceptional adaptability and functionality, aligning with 
            TropicFeel's ongoing all-terrain campaign.
          </h3>
          <div className={styles.buttonContainer}>
            <LearnMoreButton />
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <img src="final.gif" alt="final animation for Tropicfeel" className={styles.image}/>
      </div>
    </div>
  );
}

export default CaseText;
