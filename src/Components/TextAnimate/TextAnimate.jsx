import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TextAnimate = () => {
    const textRef = useRef(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = ["Front-End Developer", "Back-End Developer", "Full Stack Developer"];

    useEffect(() => {
        const animateText = () => {
            if (!textRef.current) return; // Ajout de la vérification

            const text = texts[currentTextIndex];
            textRef.current.innerHTML = "";

            const chars = text.split("");
            chars.forEach((char, index) => {
                const span = document.createElement("span");
                span.textContent = char;
                textRef.current.appendChild(span);
            });

            gsap.fromTo(
                textRef.current.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    onComplete: () => {
                        setTimeout(() => {
                            if (!textRef.current) return; // Ajout de la vérification
                            gsap.to(textRef.current.children, {
                                opacity: 0,
                                y: -20,
                                duration: 0.5,
                                stagger: 0.1,
                                ease: "power2.in",
                                onComplete: () => {
                                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                                }
                            });
                        }, 1500); // Wait 1.5 seconds before starting the fade out animation
                    }
                }
            );
        };

        animateText();
    }, [currentTextIndex]);

    return (
        <div className="text-3xl mt-6 font-font21 font-normal text-customWhite">
            <div ref={textRef}></div>
        </div>
    );
};

export default TextAnimate;