import React from 'react';
import styles from './ImageGrid.module.css';

function ImageGrid() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.imageColorPaletteLarge} style={{ backgroundImage: 'url(https://shop.tropicfeel.com/cdn/shop/files/240130-Collection-All-products-Mobile-9-16.jpg?v=1709030149&width=575)' }}></div>
      <div className={styles.imageColorPaletteTopMiddle} style={{ backgroundImage: 'url(https://store.tropicfeel.com/cdn/shop/files/All-Terrain-SS24-Flash-Red-Hover.jpg?v=1709325214&width=575)' }}></div>
      <div className={styles.imageColorPaletteBottomMiddle} style={{ backgroundImage: 'url(https://store.tropicfeel.com/cdn/shop/files/All-Terrain-SS24-Flash-Red-Hover.jpg?v=1709325214&width=575)' }}></div>
      <div className={styles.imageColorPaletteBottomLeft} style={{ backgroundImage: 'url(https://store.tropicfeel.com/cdn/shop/files/All-Terrain-SS24-Flash-Red-Hover.jpg?v=1709325214&width=575)' }}></div>
      <div className={styles.imageColorPaletteTopLeft} style={{ backgroundImage: 'url(https://store.tropicfeel.com/cdn/shop/files/All-Terrain-SS24-Flash-Red-Hover.jpg?v=1709325214&width=575)' }}></div>
      <div className={styles.imageColorPaletteLargeRight} style={{ backgroundImage: 'url(https://assets-global.website-files.com/63d1baf79ce0eb802868785b/63d1baf89ce0ebaf46688ab9_Tropicfeel%20shoes%20review.jpg)' }}></div>
    </div>
  );
}

export default ImageGrid;
