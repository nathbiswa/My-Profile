"use client";

import { useEffect, useRef } from "react";

export default function CodingMeshBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const grid = 45;
        let offset = 0;

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // background
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, w, h);

            offset += 0.6;

            // GRID (neon purple)
            ctx.strokeStyle = "rgba(168, 85, 247, 0.15)";
            ctx.lineWidth = 1;

            for (let x = -grid; x < w + grid; x += grid) {
                ctx.beginPath();
                ctx.moveTo(x + (offset % grid), 0);
                ctx.lineTo(x + (offset % grid), h);
                ctx.stroke();
            }

            for (let y = -grid; y < h + grid; y += grid) {
                ctx.beginPath();
                ctx.moveTo(0, y + (offset % grid));
                ctx.lineTo(w, y + (offset % grid));
                ctx.stroke();
            }

            // FLOW LINES (blue energy)
            ctx.strokeStyle = "rgba(59,130,246,0.08)";
            for (let i = 0; i < 25; i++) {
                ctx.beginPath();
                ctx.moveTo(0, (i * 70 + offset * 2) % h);
                ctx.lineTo(w, (i * 70 + offset * 2 + 200) % h);
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };

        animate();

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-70"
        />
    );
}