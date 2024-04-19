import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import shoes_anim from './shoes_anim.json';
import './case_study.css';
import CaseText from '../CaseText/CaseText';

const CaseStudy = () => {
    const navigate = useNavigate();
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        setCursorPos({ x, y });
    };

    const handleContainerClick = () => {
        navigate('/project-overview');
    };

    useEffect(() => {
        if (cursorRef.current) {
            cursorRef.current.style.left = `${cursorPos.x}px`;
            cursorRef.current.style.top = `${cursorPos.y}px`;
        }
    }, [cursorPos]);

    return (
        <div className="case-container" onMouseMove={handleMouseMove} onClick={handleContainerClick}>
            <div className="custom-cursor" ref={cursorRef}>
                <div className="custom-cursor-text">View</div>
            </div>
            <div className="parent">
                <CaseText/>
                <div className="shoes-container">
                    <Lottie className="lottie-block" animationData={shoes_anim} loop={true} autoplay={true} />
                </div>
                <div className="logo-background">
                    <svg width="666" height="619" viewBox="0 0 666 619" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M73.5 577L335 319.5L592 577L553 618.5L335 395L115.5 618.5L73.5 577Z" fill="#F8F8F8"/>
                        <path d="M210 374V317.5H0.5V374H210Z" fill="#F8F8F8"/>
                        <path d="M360 224.5H304.5V0.5H360V224.5Z" fill="#F8F8F8"/>
                        <path d="M437 281L397.5 238.5L562.5 79.5L599 117L437 281Z" fill="#F8F8F8"/>
                        <path d="M454 374V318.5H665.5V374H454Z" fill="#F8F8F8"/>
                        <path d="M229.5 282L69.5 122L104.5 81.5L266.5 241.5L229.5 282Z" fill="#F8F8F8"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;
