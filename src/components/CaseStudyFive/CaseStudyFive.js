import React from 'react';
import styles from './CaseStudyFive.module.css';

function CaseStudyFive() {
  return (
      <div className={styles.parent}>
        <div className={styles.div1}>
          <h2 className={styles.text}>From Napkin Sketches to Global Journey</h2>
          <h4>The final animation emerged as a rapid, dynamic exhibition of the Tropicfeel AT X shoe's adaptability. It seamlessly navigated through city streets, forest paths, and sandy beaches, delivering a potent and straightforward message: wherever you may roam, the AT X is ready. The quick-paced, engaging transitions kept viewers hooked, while the overall visual flair ensured that the AT X shoe remained in their minds long after the video concluded.
In conclusion, what began as humble scribbles on café napkins evolved into a captivating 10-second narrative that vividly brought the Tropicfeel AT X shoes to life. This project proved that indeed, great stories can come in compact packages. As for the shoes? They’re still mastering the art of navigating through life’s diverse terrains—both metaphorically and literally.</h4>
        </div>
        <div className={styles.div2}>
          <img className={styles.image} src="shoes2.png" alt="Descriptive Alt Text" />
        </div>
      </div>
    );
  }
export default CaseStudyFive;
