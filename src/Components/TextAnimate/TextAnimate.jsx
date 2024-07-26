import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TextAnimate = () => {
    const textRef = useRef(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = ["Hello World!", "Welcome to GSAP", "Enjoy Animations"];

    useEffect(() => {
        const animateText = () => {
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
                        }, 2000); // Wait 2 seconds before starting the fade out animation
                    }
                }
            );
        };

        animateText();
    }, [currentTextIndex]);

    return (
        <div className="text-3xl font-font2 font-normal text-customWhite">
            <div ref={textRef}></div>
        </div>
    );
};

export default TextAnimate;