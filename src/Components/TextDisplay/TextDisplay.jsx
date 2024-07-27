import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './textDisplay.css';

const randomPosition = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 500));
    const y = Math.floor(Math.random() * (window.innerHeight - 200));
    return { x, y };
};

const TextDisplay = () => {
    const texts = ["Code with passion...", "Innovate every day...", "Build, test, repeat...", "Design with purpose...", "Create, iterate, enhance...", "Empower through technology...", "Solve challenges creatively...", "Dream big, code more..."];
    const [currentText, setCurrentText] = useState(0);
    const [position, setPosition] = useState(randomPosition());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length);
            setPosition(randomPosition());
        }, 1600);
        return () => clearInterval(interval);
    }, []);

    return (
        <TransitionGroup>
            <CSSTransition
                key={currentText}
                timeout={500}
                classNames="fade"
            >
                <div
                    className="absolute"
                    style={{ top: `${position.y}px`, left: `${position.x}px` }}
                >
                    <p className="text-6xl text-customWhite opacity-5 font-font30 p-2 rounded z-10">
                        {texts[currentText]}
                    </p>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default TextDisplay;