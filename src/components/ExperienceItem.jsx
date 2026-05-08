"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExperienceItem({ item, index }) {
    const ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
            },
            x: index % 2 === 0 ? -140 : 140,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }, [index]);

    return (
        <div
            ref={ref}
            className={`relative mb-20 flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
        >

            {/* 🔵 NODE */}
            <div className="absolute left-1/2 top-8 w-4 h-4 bg-purple-500 rounded-full 
            transform -translate-x-1/2 shadow-lg shadow-purple-500/50 animate-pulse" />

            {/* 🧾 CARD */}
            <div
                className="relative w-full md:w-[45%] p-6 rounded-2xl
                bg-white/5 backdrop-blur-md border border-white/10
                hover:bg-white/10 transition group cursor-pointer"
            >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 
                bg-purple-500 blur-2xl rounded-2xl transition"></div>

                {/* CONTENT */}
                <div className="relative z-10">

                    <h3 className="text-xl font-bold group-hover:text-purple-300 transition">
                        {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                        {item.company} • {item.year}
                    </p>

                    <p className="mt-4 text-gray-300 leading-relaxed">
                        {item.desc}
                    </p>

                </div>

            </div>

        </div>
    );
}