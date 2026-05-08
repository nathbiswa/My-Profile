"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorFX() {
    const glowRef = useRef(null);

    useEffect(() => {
        const move = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // 🔮 glow follows cursor
            gsap.to(glowRef.current, {
                x: x - 150,
                y: y - 150,
                duration: 0.4,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            ref={glowRef}
            className="fixed w-[300px] h-[300px] rounded-full
            bg-purple-500 blur-3xl opacity-20
            pointer-events-none z-10"
        />
    );
}