import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextMoving = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        textElement.innerHTML = '';

        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            span.style.display = 'inline-block';
            textElement.appendChild(span);
        });

        const handleMouseMove = (event) => {
            const boundingRect = textElement.getBoundingClientRect();
            const mouseX = event.clientX - boundingRect.left;

            gsap.to(textElement.children, {
                x: (i, target) => {
                    const deltaX = mouseX - (target.offsetLeft + target.offsetWidth / 2);
                    const pushDistance = Math.max(0, 50 - Math.abs(deltaX));
                    return deltaX < 0 ? -pushDistance : pushDistance;
                },
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        textElement.addEventListener('mousemove', handleMouseMove);

        return () => {
            textElement.removeEventListener('mousemove', handleMouseMove);
        };
    }, [text]);

    return (
        <div className="relative inline-block">
            <div className='text-2xl text-customWhite relative inline-block' ref={textRef}></div>
        </div>
    );
};

export default TextMoving;