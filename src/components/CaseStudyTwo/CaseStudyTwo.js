import React from 'react';
import styles from './CaseStudyTwo.module.css';

function CaseStudyTwo() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
      <h2 className={styles.storyHeading}>
      The Challenge of making Transitions
        </h2>
      </div>
      <div className={styles.div2}>
      <div className={styles.div1}>
      <h4 className={styles.storyDetails}>
      The concept behind the video was to seamlessly transition from a drawing of a foot, to a shoe, and then to waves that represent different terrains. Initially, I considered using a morph transition, but the complexity of the detailed vectors made this impractical. Instead, I opted for transitions using changes in opacity and scale: as one element fades out and shrinks, the next emerges by becoming more opaque and enlarging. To enhance the realism, I also incorporated motion blur. This approach effectively demonstrates the dynamic qualities of the All Terrain shoes in a brief, impactful format.
        </h4>
      </div>
      </div>
    </div>
  );
}

export default CaseStudyTwo;
