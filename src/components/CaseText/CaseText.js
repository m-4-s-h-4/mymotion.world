import React from 'react';
import styles from './CaseText.module.css';
import Divider from '../Divider/Diveder'; // Corrected typo in the import path
import LearnMoreButton from '../../components/LearnMoreButton/LearnMoreButton';

function CaseText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
        Merging Code and Design in one video
        </h2>
      </div>
      <div className={styles.div2}>
        <div className={styles.storyDetails}>
          <h3 className={styles.tag}>Motion Project</h3>
          <Divider />
          <h4 className={styles.smallerText}>
          The mission was to create a concise 10-second animation that showcases the shoe's exceptional adaptability and functionality, aligning with TropicFeel's ongoing all-terrain campaign.
          </h4>
          <div className={styles.buttonContainer}>  {/* Ensure the button is wrapped in a container for better layout control */}
            <LearnMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseText;
