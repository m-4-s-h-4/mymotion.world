import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LearnMoreButton.module.css'; 

const LearnMoreButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <Link to="/project-overview" className={styles.linkButton}>
       explore
      </Link>
    </div>
  );
}

export default LearnMoreButton;
