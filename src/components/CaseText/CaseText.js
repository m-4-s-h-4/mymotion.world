import React from 'react';
import styles from './CaseText.module.css';

function CaseText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.caseText}>
          TROPICFEEL OVERVIEW
        </h2>
        <h4>Animating the ultimate travel companion for Tropicfeel Canyon shoe in an eye-catching 10sec video.</h4>
      </div>
      <div className={styles.div2}>
        <h4 className={styles.storyDetails}>
        </h4>
      </div>
    </div>
  );
}

export default CaseText;
