import React from 'react';
import styles from './WavesText.module.css';

function WavesText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
      <h2 className={styles.storyHeading}>
      creating terrain and water waves
        </h2>
      </div>
      <div className={styles.div2}>
      <div className={styles.div1}>
      <h4 className={styles.storyDetails}>
      To animate the terrain and water elements I went back to code, I synced the grid movements 
      to music, using different tracks to influence the visual output. Harsher,
       more intense music helped generate jagged, abrupt terrain shapes, mirroring 
       the unpredictable nature of rugged landscapes. In contrast, softer, mellower 
       tunes produced gentle, undulating waves, evoking calm oceanic surfaces. 
       This auditory-driven design approach allowed for a dynamic interplay between 
       sight and sound, enhancing the viewer’s sensory experience.
        </h4>
      </div>
      </div>
    </div>
  );
}

export default WavesText;
