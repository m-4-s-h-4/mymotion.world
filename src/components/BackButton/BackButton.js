import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackButton.module.css'; 

const BackButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <Link to="/" className={styles.linkButton}>
      <span> {"<-"} </span> Back to main  
      </Link>
    </div>
  );
}

export default BackButton;
