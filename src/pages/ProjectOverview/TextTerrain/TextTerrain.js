import React from 'react';
import styles from './TextTerrain.module.css'; // Import the CSS module

const TextTerrain = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
                <h2 className={styles.whiteText}>CREATING TERRAIN AND WATER LINES</h2>
            </div>
            <div className={styles.div2}>
                <h3 className={styles.p1}> To animate the terrain and water elements I went back to code, I synced the grid movements 
      to music, using different tracks to influence the visual output. 
      </h3> 
      <h3>Harsher,
       more intense music helped generate jagged, abrupt terrain shapes, mirroring 
       the unpredictable nature of rugged landscapes. In contrast, softer, mellower 
       tunes produced gentle, undulating waves, evoking calm oceanic surfaces. 
       This auditory-driven design approach allowed for a dynamic interplay between 
       sight and sound, enhancing the viewer’s sensory experience.
                    </h3>
            </div>
        </div>
    );
}

export default TextTerrain;
