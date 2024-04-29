import React from 'react';
import styles from './ImagesAdobe.module.css'; // Import the CSS module

const ImagesAdobe = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
            <img src="foot_path.gif" alt="sketch of terrain made in photoshop using liquify" className={styles.image}/>
            <h4 className={styles.tag}>Initial animation I got using trip paths</h4>
            </div>
            <div className={styles.div2}>
                <img src="foot_final.gif" alt="sketch of terrain made in photoshop using liquify" className={styles.image}/>
                <h4 className={styles.tag}>Final animation of the foot growing</h4>
            </div>
        </div>
    );
}

export default ImagesAdobe;
