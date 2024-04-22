import React from 'react';
import styles from './PaletteText.module.css';

function PaletteText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div2}>
        <h2 className={styles.storyHeading}>
        Crafting Colors from Earth and Water
        </h2>
      </div>
      <div className={styles.div1}>
      <h4 className={styles.storyDetails}>
      Choosing the right color palette was a deliberate process, deeply 
      influenced by the diverse terrains the AT X shoe is designed to conquer. 
      I opted for a harmonious blend of deep, soothing forest greens and accented with bursts of vibrant, refreshing blues to reflect aquatic elements. 
      This choice wasn't just about aesthetics—it was strategically aligned with Tropicfeel's brand identity, 
      reinforcing the shoe's philosophy and its dual compatibility with both urban and natural landscapes. 
      The colors played a critical role in the narrative, subtly influencing the viewer’s emotional journey 
      through each environmental transition.
        </h4>
      </div>
    </div>
  );
}

export default PaletteText;
