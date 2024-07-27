import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HoveredText = ({ text, isActive }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const chars = text.split('');
        textElement.innerHTML = '';

        chars.forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            span.classList.add('inline-block');
            span.style.transformStyle = 'preserve-3d';
            textElement.appendChild(span);
        });

        const handleMouseEnter = () => {
            Array.from(textElement.children).forEach((span, index) => {
                gsap.to(span, {
                    rotateX: 90,
                    duration: 0.3,
                    delay: index * 0.1,
                    onComplete: () => {
                        span.style.fontFamily = 'SquareSpace'; // Change to your desired font
                        gsap.to(span, {
                            rotateX: 0,
                            duration: 0.3
                        });
                    }
                });
            });
        };

        const handleMouseLeave = () => {
            Array.from(textElement.children).forEach((span, index) => {
                gsap.to(span, {
                    rotateX: 90,
                    duration: 0.3,
                    delay: index * 0.1,
                    onComplete: () => {
                        span.style.fontFamily = 'KanitMedium'; // Change to your original font
                        gsap.to(span, {
                            rotateX: 0,
                            duration: 0.3
                        });
                    }
                });
            });
        };

        textElement.addEventListener('mouseenter', handleMouseEnter);
        textElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            textElement.removeEventListener('mouseenter', handleMouseEnter);
            textElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [text]);

    return (
        <div className={`relative flex justify-center items-center perspective-[1000px] w-[170px] h-[50px] ${isActive ? 'text-customBlue' : 'text-customWhite'}`}>
            <div className='text-2xl relative' ref={textRef}>
                {text}
            </div>
        </div>
    );
};

export default HoveredText;