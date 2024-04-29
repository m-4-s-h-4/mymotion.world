import React from 'react';
import styles from './ImagesTerrain.module.css'; // Import the CSS module

const ImagesTerrain = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
            <img src="terrains.gif" alt="sketch of terrain made in photoshop using liquify" className={styles.image}/>
            <h4 className={styles.tag}>Terrain shapes recorded from postprocessing</h4>
            </div>
            <div className={styles.div2}>
                <img src="water.gif" alt="sketch of terrain made in photoshop using liquify" className={styles.image}/>
                <h4 className={styles.tag}>Water shapes recorded from postprocessing</h4>
            </div>
        </div>
    );
}

export default ImagesTerrain;
