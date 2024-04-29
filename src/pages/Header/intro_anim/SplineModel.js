import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import styles from './SplineModel.module.css'; 

function SplineModel() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const app = new Application(canvas);
        app.load('https://prod.spline.design/gsHyBjNjA0WgPlho/scene.splinecode');

        return () => {
            app.dispose();
        };
    }, []);

    return <div className={styles.container}>
        <canvas ref={canvasRef} className={styles.canvas}></canvas>
    </div>;
}

export default SplineModel;
