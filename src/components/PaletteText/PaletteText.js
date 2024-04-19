import React from 'react';
import styles from './PaletteText.module.css';

function PaletteText() {
  return (
    <div className={styles.parent}>
      <div className={styles.div2}>
        <h2 className={styles.storyHeading}>
          SELECTING THE COLOURS FOR THE VIDEO
        </h2>
      </div>
      <div className={styles.div1}>
      <h4 className={styles.storyDetails}>
          This palette not only aligned with Tropicfeel’s brand identity but also supported the theme of versatility in different environments. Inspired by nature and urban textures. This palette not only aligned with Tropicfeel’s brand identity but also supported the theme of versatility in different environments. Inspired by nature and urban textures.
        </h4>
      </div>
    </div>
  );
}

export default PaletteText;
