import React from 'react';
import styles from './ImagesTransitions.module.css'; // Import the CSS module

const ImagesTransitions = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
            <img src="transition_slow.gif" alt="a gif of transition in slow motion" className={styles.image}/>
            <h4 className={styles.tag}>Slowed down transition made using scale and opacity</h4>
            </div>
            <div className={styles.div2}>
                <img src="transition_normal.gif" alt="a gif of transition normal speed" className={styles.image}/>
                <h4 className={styles.tag}>Final transition at 24fps</h4>
            </div>
        </div>
    );
}

export default ImagesTransitions;
