import React from 'react';
import styles from './CaseStudyThree.module.css';

function CaseStudyThree() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <img className={styles.image1} src="shoes2.png" alt="sketches in aftereffects" />
      </div>
      <div className={styles.div2}>
        <img className={styles.image2} src="shoes2.png" alt="sketches in aftereffects" />
      </div>
    </div>
  );
}

export default CaseStudyThree;
