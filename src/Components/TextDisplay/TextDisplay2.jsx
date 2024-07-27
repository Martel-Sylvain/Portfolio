import React, { useState, useEffect } from 'react';
import './textDisplay.css';

const randomPosition = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 500));
    const y = Math.floor(Math.random() * (window.innerHeight - 250));
    return { x, y };
};

const TextDisplay2 = () => {
    const texts = ["Transform ideas into reality...", "Lead with innovation...", "Develop, deploy, deliver...", "Craft exceptional experiences...", "Engineer the future...", "Harmonize form and function...", "Pioneer cutting-edge solutions...", "Optimize for impact..."];
    const [currentText, setCurrentText] = useState(0);
    const [position, setPosition] = useState(randomPosition());
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentText((prev) => (prev + 1) % texts.length);
                setPosition(randomPosition());
                setFade(true);
            }, 500); // Durée de la transition CSS
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div
            className={`absolute ${fade ? 'fade-in' : 'fade-out'}`}
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
        >
            <p className="text-4xl text-customWhite opacity-15 font-font21 p-2 rounded z-10">
                {texts[currentText]}
            </p>
        </div>

    );
};

export default TextDisplay2;