import React from 'react';
import styles from './TextConclusion.module.css'; // Import the CSS module

const TextConclusion = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
                <h2 className={styles.whiteText}>MERGING CODE AND DESIGN IN ONE VIDEO</h2>
            </div>
            <div className={styles.div2}>
                <h3 > The video concludes with the addition of the TropicFeel logo, accompanied by a typewriter text effect that spells out "TropicFeel."</h3>
                <h3 className={styles.p1}> This subtle yet sophisticated animation technique not only underscores the brand identity but also complements the video’s overall aesthetic.
      </h3> 
      <h3> The final 10-second piece 
            is a testament to the fusion of traditional sketching, modern coding, 
            and digital animation, culminating in a visually engaging and narratively 
            compelling showcase of the all-terrain shoes
                    </h3>
            </div>
        </div>
    );
}

export default TextConclusion;
