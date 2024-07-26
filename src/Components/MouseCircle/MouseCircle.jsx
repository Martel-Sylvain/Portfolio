import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseCircle = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            gsap.to(circleRef.current, {
                duration: 0.8,
                x: event.clientX - circleRef.current.offsetWidth / 2,
                y: event.clientY - circleRef.current.offsetHeight / 2,
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