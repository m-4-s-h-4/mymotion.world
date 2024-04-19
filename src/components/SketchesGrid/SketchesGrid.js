import React, { useState } from 'react';
import styles from './SketchesGrid.module.css';

function SketchesGrid() {
  // State to store the image URLs
  const [imageUrls] = useState({
    imageUrl1: 'https://cdn.dribbble.com/users/2025439/screenshots/4967595/media/1371582e396ad7076bb840d95ef955d9.gif',
    imageUrl2: 'https://cdn.dribbble.com/users/2025439/screenshots/4967595/media/1371582e396ad7076bb840d95ef955d9.gif',
    imageUrl3: 'https://cdn.dribbble.com/users/2025439/screenshots/4967595/media/1371582e396ad7076bb840d95ef955d9.gif',
    imageUrl4: 'https://cdn.dribbble.com/users/2025439/screenshots/4967595/media/1371582e396ad7076bb840d95ef955d9.gif',
  });

  return (
    <div className={styles.gridContainer}>
      <div className={styles.div1}>
        <img src={imageUrls.imageUrl1} alt="sketch 1" className={styles.fullSizeImage} />
      </div>
      <div className={styles.div2}>
        <img src={imageUrls.imageUrl2} alt="sketch 2" className={styles.fullSizeImage} />
      </div>
      <div className={styles.div3}>
        <img src={imageUrls.imageUrl3} alt="sketch 3" className={styles.fullSizeImage} />
      </div>
      <div className={styles.div4}>
        <img src={imageUrls.imageUrl4} alt="sketch 4" className={styles.fullSizeImage} />
      </div>
    </div>
  );
}

export default SketchesGrid;
