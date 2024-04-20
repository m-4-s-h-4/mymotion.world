import React from 'react';
import './header.css'; 

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <h1>frontend</h1>
                <div className="inline-container">
                <svg className="svg-one" width="133" height="134" viewBox="0 0 133 134" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path d="M73 132.5H61.5L61.5 78.2643C61.5 73.9255 57.1667 72.2845 55 72.0064H1.5L1.5 61.5764H55C58.6 61.5764 60.8333 57.4045 61.5 55.3185L61.5 1.5H73C73.1667 17.6316 73.4 50.9796 73 55.3185C72.6 59.6573 77.5 61.2983 80 61.5764H131.5V72.0064L80 72.0064C74.4 72.0064 73 76.1783 73 78.2643V132.5Z" fill="#212121" stroke="#212121" strokeWidth="2"/>
                    </svg>
                    <h1>motion</h1>
                </div>
                <h1>designer</h1>
                <h1 class="typewriter">for hire</h1>
                <div className="center-left">
                    <svg className="svg-two" width="164" height="131" viewBox="0 0 164 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 31.5H14.5C30.5 52.3333 63.9 95.2 69.5 100C75.1 104.8 76.8333 101 77 98.5V2H86.5C85.8333 31.6667 84.9 92.5 86.5 98.5C88.1 104.5 92.1667 102 94 100L150 31.5H160L81.5 128.5L4 31.5Z" fill="#212121" stroke="#212121" stroke-width="3"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;
