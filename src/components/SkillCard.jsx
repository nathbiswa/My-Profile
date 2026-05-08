"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SkillCard({ skill }) {
    const ref = useRef(null);
    const Icon = skill.icon;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Scroll Animation
        gsap.from(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
        });

        // 3D Tilt
        const card = ref.current;

        const move = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 12;
            const rotateY = (x - rect.width / 2) / 12;

            gsap.to(card, {
                rotateX,
                rotateY,
                transformPerspective: 600,
                duration: 0.3,
            });
        };

        const leave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
            });
        };

        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);

        return () => {
            card.removeEventListener("mousemove", move);
            card.removeEventListener("mouseleave", leave);
        };

    }, []);

    return (
        <div
            ref={ref}
            className="relative group p-6 rounded-2xl text-center cursor-pointer
            bg-white/10 backdrop-blur-md border border-white/20
            transition duration-300 hover:bg-white/20"
        >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-purple-500 blur-2xl rounded-2xl z-0"></div>

            {/* ICON */}
            <div className="relative z-10 flex justify-center mb-4">
                <Icon
                    className={`text-4xl ${skill.color} 
                    group-hover:scale-125 group-hover:rotate-6 
                    transition duration-300`}
                />
            </div>

            {/* TITLE */}
            <h3 className="relative z-10 text-lg font-semibold text-white group-hover:text-purple-300 transition">
                {skill.name}
            </h3>

        </div>
    );
}