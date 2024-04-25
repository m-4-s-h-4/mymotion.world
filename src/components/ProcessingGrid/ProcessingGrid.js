import React, { useState } from 'react';
import styles from './ProcessingGrid.module.css';

function ProcessingGrid() {
  // State to store the video URLs
  const [videoUrls] = useState({
    videoUrl1: 'jazz.mov',
    videoUrl2: 'final.mov',
    videoUrl3: 'lines.mov',
    videoUrl4: 'biggergrid.mov',
  });

  return (
    <div className={styles.gridContainer}>
      <div className={styles.div1}>
        <video src={videoUrls.videoUrl1} className={styles.fullSizeImage} autoPlay muted loop />
      </div>
      <div className={styles.div2}>
        <video src={videoUrls.videoUrl2} className={styles.fullSizeImage} autoPlay muted loop />
      </div>
      <div className={styles.div3}>
        <video src={videoUrls.videoUrl3} className={styles.fullSizeImage} autoPlay muted loop />
      </div>
      <div className={styles.div4}>
        <video src={videoUrls.videoUrl4} className={styles.fullSizeImage} autoPlay muted loop />
      </div>
    </div>
  );
}

export default ProcessingGrid;
