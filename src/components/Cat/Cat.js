import React, { useEffect, forwardRef } from 'react';
import { Application } from '@splinetool/runtime';

const Cat = forwardRef((props, ref) => {
  useEffect(() => {
    let app;
    if (ref.current) {
      app = new Application(ref.current);
      app.load('https://prod.spline.design/g0QX-9fVAUec-nql/scene.splinecode');
    }

    return () => {
      if (app) {
        app.dispose();
      }
    };
  }, [ref]);

  return (
    <div style={{ height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
      <canvas ref={ref} style={{ width: '100%', height: '70%' }}></canvas>
    </div>
  );
});

export default Cat;
