import React from 'react';
import styles from './CaseKeyTakeaways.module.css';

function CaseKeyTakeaways() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h2 className={styles.storyHeading}>
        Key takeaways from the project
        </h2>
        <div className={styles.storyDetails}>
          <h3 className={styles.smallerText}>
          Reflecting on the TropicFeel project, my key takeaways highlight the seamless fusion of design, technology, and thematic consistency that defined our approach. 
Starting with precise sketches and moving into dynamic animations using  AfterEffects and Processing, I aimed to showcase the adaptability of TropicFeel's All Terrain shoes across different environments.
          </h3>
          <h3 className={styles.smallerText}>
          The final 10-second animation not only remained true to the brand’s aesthetic but elevated it, merging traditional sketching techniques with modern digital tools. This provided a compelling narrative of versatility and durability, perfectly aligned with TropicFeel’s all-terrain campaign. 
          </h3>
          <h3 className={styles.smallerText}>
          Through this project, I demonstrated the power of cohesive artistic and technical execution in creating impactful promotional content.
          </h3>
        </div>
      </div>
      <div className={styles.div2}>
        <img src="final.gif" alt="Descriptive Alt Text" className={styles.image}/>
      </div>
    </div>
  );
}

export default CaseKeyTakeaways;
