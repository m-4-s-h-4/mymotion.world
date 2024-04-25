import React from 'react';
import styles from './CaseStudyFive.module.css';

function CaseStudyFive() {
  return (
      <div className={styles.parent}>
        <div className={styles.div1}>
          <h2 className={styles.text}>Merging Music, Code, and Design in one video</h2>
          <h4>The video concludes with the addition of the TropicFeel logo, accompanied 
            by a typewriter text effect that spells out "TropicFeel." This subtle yet 
            sophisticated animation technique not only underscores the brand identity 
            but also complements the video’s overall aesthetic. The final 10-second piece 
            is a testament to the fusion of traditional sketching, modern coding, 
            and digital animation, culminating in a visually engaging and narratively 
            compelling showcase of the all-terrain shoes. I am delighted with the outcome, 
            which not only met but exceeded my creative expectations, affirming the effectiveness 
            of integrating diverse design methodologies.</h4>
        </div>
        <div className={styles.div2}>
          <img className={styles.image} src="final.gif" alt="Descriptive Alt Text" />
        </div>
      </div>
    );
  }
export default CaseStudyFive;
