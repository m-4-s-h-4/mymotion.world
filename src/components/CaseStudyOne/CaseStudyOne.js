import React from 'react';
import styles from './CaseStudyOne.module.css';

function CaseStudyOne() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <h4 className={styles.storyDetails}>
        Adobe After Effects became my tool of choice for bringing 
        this vision to life. The animation journey began with a focused 
        frame centered on the "All Terrain" text, which acted as the narrative 
        fulcrum around which the entire story revolved. The core of the animation 
        involved transitioning the "All Terrain" text through various textures 
        representative of different settings. This was accomplished through 
        sophisticated masking and morph cut transitions, which allowed the text 
        to adapt fluidly from one texture to another. 
        This technique not only highlighted the shoe’s versatility but also 
        created a seamless visual flow that was both natural and captivating.


        </h4> 
      </div>
      <div className={styles.div2}>
      <img src="shoes.png" alt="Description of the image" />
      </div>
    </div>
  );
}

export default CaseStudyOne;
