import React from 'react';
import styles from './CaseStudyOne.module.css';

function CaseStudyOne() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h4 className={styles.storyDetails}>
        The final animation emerged as a rapid, dynamic exhibition of the Tropicfeel AT X shoe's adaptability. 
        It seamlessly navigated through 
        city streets, forest paths, and sandy beaches, delivering a 
        potent and straightforward message: wherever you may roam, the AT X is ready. 
        The quick-paced, engaging transitions kept viewers hooked, while the overall visual
        </h4> 
      </div>
      <div className={styles.div2}>
      <img src="shoes2.png" alt="Description of the image" />
      </div>
    </div>
  );
}

export default CaseStudyOne;
