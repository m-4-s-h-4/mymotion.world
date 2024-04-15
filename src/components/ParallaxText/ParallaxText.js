import React, { useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useViewportScroll, useSpring, useReducedMotion } from 'framer-motion';
import styles from './ParallaxText.module.css';

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const prefersReducedMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollYProgress } = useViewportScroll();
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  const x = useTransform(baseX, latestX => `${latestX}%`);

  const adjustForReducedMotion = useCallback(value => (prefersReducedMotion ? 0 : value), [prefersReducedMotion]);

  useEffect(() => {
    const unsubscribeX = scrollYProgressSpring.onChange(v => {
      baseX.set(adjustForReducedMotion(-v * baseVelocity * 20));
    });

    return () => {
      unsubscribeX();
    };
  }, [adjustForReducedMotion, baseVelocity, baseX, scrollYProgressSpring]);

  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        {Array(35)
          .fill(null)
          .map((_, index) => (
            <span key={index} className={styles.parallaxSpan}>
              {children}
            </span>
          ))}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
