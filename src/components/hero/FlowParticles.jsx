"use client";

import { useEffect, useRef } from "react";

export default function FlowParticles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        // 🌌 particles array
        const particles = Array.from({ length: 90 }).map(() => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
        }));

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // background soft fade
            ctx.fillStyle = "rgba(0,0,0,0.4)";
            ctx.fillRect(0, 0, w, h);

            particles.forEach((p, i) => {
                // movement
                p.x += p.vx;
                p.y += p.vy;

                // bounce
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                // draw node
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(168,85,247,0.6)";
                ctx.fill();

                // 🔗 connections (brain network)
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = "rgba(59,130,246,0.08)";
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

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