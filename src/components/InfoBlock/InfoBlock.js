import React from 'react';
import InfoBlock from './InfoBlock';
import styles from './InfoBlock.module.css'; // CSS module for grid
import remote_anim from './remote_anim.json';
import cat_anim from './cat_anim.json';
import inspire_anim from './inspire_anim.json';

const InfoSections = () => {
  return (
    <div className={styles.gridContainer}>
      <InfoBlock
        animationData={remote_anim}
        title="MOTION & FRONTEND"
        description="I animate interfaces and create websites with a focus on user experience."
      />
      <InfoBlock
        animationData={cat_anim}
        title="OPEN FOR REMOTE"
        description="I thrive in the quiet chaos of my home office, where my cat supervises all of the Zoom calls."
      />
      <InfoBlock
        animationData={inspire_anim}
        title="THINGS THAT INSPIRE ME"
        description="Inspired by Ben Marriott’s storytelling, his influence shapes my narrative approach."
      />
    </div>
  );
}

export default InfoSections;
