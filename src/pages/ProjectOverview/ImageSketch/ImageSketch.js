import React from 'react';
import styles from './ImageSketch.module.css'; // Import the CSS module

const ImageSketch = () => {
    return (
        <div className={styles.fullContainer}>
            <div className={styles.imageContainer}>
            <img src="terrain.png" alt="sketch of terrain made in photoshop using liquify" className={styles.image}/>
            <h4 className={styles.tag}>Terrain sketch I made using liquify and displacement tools</h4>
        </div>
        </div>

    );
}

export default ImageSketch;
