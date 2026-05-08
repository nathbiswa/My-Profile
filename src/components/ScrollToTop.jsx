"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [show, setShow] = useState(false);
    const circleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = scrollY / docHeight;

            // show/hide button
            setShow(scrollY > 200);

            // 🔵 progress ring animation
            if (circleRef.current) {
                const offset = 100 - progress * 100;
                circleRef.current.style.strokeDashoffset = offset;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
            `}
        >
            {/* 🔮 GLOW BACKGROUND */}
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-30 animate-pulse" />

            {/* 🧿 BUTTON */}
            <button
                onClick={scrollToTop}
                className="relative w-14 h-14 flex items-center justify-center
                rounded-full bg-black/60 backdrop-blur-md
                border border-white/10 hover:scale-110 transition"
            >
                {/* 🔵 PROGRESS CIRCLE */}
                <svg className="absolute w-16 h-16 -rotate-90">
                    <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="rgba(168,85,247,0.5)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="180"
                        strokeDashoffset="180"
                        ref={circleRef}
                    />
                </svg>

                {/* ⬆ ICON */}
                <FaArrowUp className="text-white text-sm z-10" />
            </button>
        </div>
    );
}