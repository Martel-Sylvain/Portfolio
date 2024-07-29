import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseCircle = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const circle = circleRef.current;
            const circleWidth = circle.offsetWidth;
            const circleHeight = circle.offsetHeight;
            const maxX = window.innerWidth - circleWidth;
            const maxY = window.innerHeight - circleHeight;

            let x = event.clientX - circleWidth / 2;
            let y = event.clientY - circleHeight / 2;

            // Limitez la position pour éviter que le cercle ne sorte de la fenêtre
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (x > maxX) x = maxX;
            if (y > maxY) y = maxY;

            gsap.to(circle, {
                duration: 0.8,
                x: x,
                y: y,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={circleRef} className="w-[50px] h-[50px] border border-solid border-customBlue rounded-full absolute pointer-events-none"></div>;
};

export default MouseCircle;