import React from 'react';
import styles from './CaseStudyFour.module.css';

function CaseStudyFour() {
  return (
      <div className={styles.parent}>
        <div className={styles.div1}>
          <h2 className={styles.title}>making the foot grow </h2>
          <h4>The animation process began by tracing my initial sketch using a pen tool. I then applied trim paths to each line, adjusting the timing to create the illusion of the lines drawing themselves into a complete foot. This technique provided a visually engaging start for the 10-second promotional video.</h4>
            <img className={styles.image1} src="foot_sketch.png" alt="Descriptive Alt Text" />
        </div>
        <div className={styles.div2}>
          <img className={styles.image} src="foot_grow.gif" alt="Descriptive Alt Text" />
        </div>
      </div>
    );
  }
export default CaseStudyFour;
