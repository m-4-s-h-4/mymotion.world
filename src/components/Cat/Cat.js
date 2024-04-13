import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

function Cat() {
  const canvasRef = useRef(null); 

  useEffect(() => {
    let app;
    if (canvasRef.current) {
      app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/g0QX-9fVAUec-nql/scene.splinecode');
    }

    return () => {
      if (app) {
        app.dispose();
      }
    };
  }, []);

  return (
    <div style={{ height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '70%' }}></canvas>
    </div>
  );
}

export default Cat;
