import React from 'react';
import Lottie from 'lottie-react';
import styles from './ShoesAnimation.module.css'; 

const ShoesAnimation = ({ animationData }) => {
  return (
    <div className={styles.shoesContainer}>
      <Lottie className={styles.lottieBlock} animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}

export default ShoesAnimation;
