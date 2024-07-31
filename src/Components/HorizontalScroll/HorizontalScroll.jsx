import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const sections = gsap.utils.toArray('.horizontal-section');
        const containerWidth = containerRef.current.scrollWidth - containerRef.current.clientWidth;

        const animation = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + containerWidth,
                onLeave: () => ScrollTrigger.refresh()
            }
        });

        return () => {
            animation.kill(); // Nettoie l'animation lorsque le composant est démonté
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Nettoie tous les ScrollTriggers
        };
    }, []);

    return (
        <div>
            <div ref={containerRef} className="w-screen h-full bg-customBlack overflow-hidden">
                <div className="flex w-[300vw]">
                    <div className="horizontal-section w-screen h-screen flex items-center justify-center">
                        <h1 className="text-white text-6xl">Page 1</h1>
                    </div>
                    <div className="horizontal-section w-screen h-screen flex items-center justify-center">
                        <h1 className="text-white text-6xl">Page 2</h1>
                    </div>
                    <div className="horizontal-section w-screen h-screen flex items-center justify-center">
                        <h1 className="text-white text-6xl">Page 3</h1>
                    </div>
                </div>
            </div>
            <div className="vertical-section w-screen h-screen flex items-center justify-center bg-customBlack">
                <h1 className="text-white text-6xl">Page 4</h1>
            </div>
        </div>
    );
};

export default HorizontalScroll;







