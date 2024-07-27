import React, { useEffect, useRef } from 'react';

const DigitalRain = () => {
    const canvasRef = useRef(null);
    const chars = "ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿ";


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let drops = Array(Math.floor(canvas.width / 20)).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ffff';
            ctx.font = '20px monospace';

            drops.forEach((drop, i) => {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * 20, drop * 20);
                drops[i] = drop * 20 > canvas.height && Math.random() > 0.975 ? 0 : drop + 1;
            });
        };
        const intervalId = setInterval(draw, 70);
        return () => clearInterval(intervalId);
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full fixed top-0 left-0"></canvas>;
};

export default DigitalRain;