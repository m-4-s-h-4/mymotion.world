import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            const scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,               
                smartphone: {                    
                    smooth: true
                },
                tablet: {                    
                    smooth: true
                }
            });

            return () => {
                scroll.destroy();
            }
        }
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
};

export default SmoothScroll;
