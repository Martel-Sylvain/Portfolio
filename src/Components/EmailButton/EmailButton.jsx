import React from 'react';
import { gsap } from "gsap";

const EmailButton = () => {
    const handleMouseEnter = (index) => {
        // Anime la lettre actuelle
        gsap.to(`#letter-${index}`, { color: '#1AD2F6', duration: 0.2 });

        // Anime la lettre à gauche si elle existe
        if (index > 0) {
            gsap.to(`#letter-${index - 1}`, { color: '#5adeed', duration: 0.2 });
        }

        // Anime la lettre à gauche gauche si elle existe
        if (index > 1) {
            gsap.to(`#letter-${index - 2}`, { color: '#a3e5ed', duration: 0.2 });
        }

        // Anime la lettre à droite si elle existe
        if (index < 14) {
            gsap.to(`#letter-${index + 1}`, { color: '#5adeed', duration: 0.2 });
        }

        // Anime la lettre à droite droite si elle existe
        if (index < 13) {  // Changement de 14 à 13 pour éviter les index invalides
            gsap.to(`#letter-${index + 2}`, { color: '#a3e5ed', duration: 0.2 });
        }
    };

    const handleMouseLeave = (index) => {
        gsap.to(`#letter-${index}`, { color: '#f5f5f5', duration: 0.2 });
        if (index > 0) {
            gsap.to(`#letter-${index - 1}`, { color: '#f5f5f5', duration: 0.2 });
        }
        if (index > 1) {  // Changement de 0 à 1 pour éviter les index invalides
            gsap.to(`#letter-${index - 2}`, { color: '#f5f5f5', duration: 0.2 });
        }
        if (index < 14) {
            gsap.to(`#letter-${index + 1}`, { color: '#f5f5f5', duration: 0.2 });
        }
        if (index < 13) {  // Changement de 14 à 13 pour éviter les index invalides
            gsap.to(`#letter-${index + 2}`, { color: '#f5f5f5', duration: 0.2 });
        }
    };

    return (
        <button className="bg-transparent text-customWhite text-5xl font-font30 font-bold border border-solid border-customBlue pt-4 px-8 rounded-xl"
            style={{ opacity: 1, transition: 'opacity 5s ease-in-out' }}
            onClick={() => window.location.href = "mailto:example@example.com?subject=Mail from Our Website&body=Please send me more information"}>
            {'Send me an Email'.split('').map((char, index) => (
                <span key={index} id={`letter-${index}`} className="letter" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} style={{ transition: 'color 0.2s ease-out', color: '#f5f5f5' }}>
                    {char}
                </span>
            ))}
        </button>
    );
};

export default EmailButton;
