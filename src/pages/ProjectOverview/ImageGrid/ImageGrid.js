import React from 'react';
import styles from './ImageGrid.module.css';

function ImageGrid() {
  return (
    <div className={styles.gridContainer}>
      <h4>Moodboard I made for my video idea</h4>
      <div className={styles.imageColorPaletteLarge}style={{ backgroundImage: 'url(https://i.ibb.co/MBW8ZhW/IMG-9137.jpg)' }}></div>
      <div className={styles.imageColorPaletteTopMiddle} style={{ backgroundImage: 'url(https://png.pngtree.com/background/20230524/original/pngtree-the-image-features-distorted-wave-pattern-picture-image_2710844.jpg)' }}></div>
      <div className={styles.imageColorPaletteBottomMiddle} style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/5/5b/Fractal_terrain.jpg)' }}></div>
      <div className={styles.imageColorPaletteBottomLeft} style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/3d-black-white-contour-lines-topographic-terrain_167650-4283.jpg)' }}></div>
      <div className={styles.imageColorPaletteTopLeft} style={{ backgroundImage: 'url(https://i.ibb.co/m6mQ5zn/IMG-9139.jpg)' }}></div>
      <div className={styles.imageColorPaletteLargeRight} style={{ backgroundImage: 'url(https://i.ibb.co/zm03nq7/IMG-9138.jpg)' }}></div>
    </div>
  );
}

export default ImageGrid;
