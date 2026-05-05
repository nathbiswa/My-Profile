"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({ children }) {
    const btnRef = useRef();

    const handleMouseMove = (e) => {
        const { left, top, width, height } =
            btnRef.current.getBoundingClientRect();

        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);

        gsap.to(btnRef.current, {
            x: x * 0.3,
            y: y * 0.3,
        });
    };

    const handleLeave = () => {
        gsap.to(btnRef.current, {
            x: 0,
            y: 0,
        });
    };

    return (
        <button
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            className="px-6 py-3 bg-purple-500 rounded-full"
        >
            {children}
        </button>
    );
}