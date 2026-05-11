"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EducationItem({ item, index }) {
    const ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }, [index]);

    return (
        <div
            ref={ref}
            className={`mb-10 flex ${index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
        >
            <div className="relative w-full md:w-[45%]">

                {/* 🔵 DOT */}
                <div className="absolute -left-3 md:left-auto md:-right-3 top-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg" />

                {/* CARD */}
                <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl hover:scale-105 transition">

                    <h3 className="text-xl font-bold text-purple-300">
                        {item.degree}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                        {item.institute} • {item.year}
                    </p>

                    <p className="mt-3 text-gray-300">
                        {item.desc}
                    </p>

                </div>

            </div>
        </div>
    );
}