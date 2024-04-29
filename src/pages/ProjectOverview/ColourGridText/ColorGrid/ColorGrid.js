import React from 'react';
import styles from './ColorGrid.module.css'; // Ensure the path is correct

const ColorGrid = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>BLACK</div>
      <div className={styles.div2}>WHITE</div>
    </div>
  );
}

export default ColorGrid;
