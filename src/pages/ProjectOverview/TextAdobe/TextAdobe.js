import React from 'react';
import styles from './TextAdobe.module.css'; // Import the CSS module

const TextAdobe = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
                <h3 className={styles.whiteText}>
The animation process started with tracing my initial sketch using a pen tool. I carefully applied trim paths to each line, timing the adjustments to create the illusion of the lines drawing themselves into the shape of a foot.</h3>
            </div>
            <div className={styles.div2}>
                <h3>This technique set the stage for a visually engaging opening sequence in the 10-second promotional video, capturing the viewer's attention right from the start.
                    </h3>
            </div>
        </div>
    );
}

export default TextAdobe;
