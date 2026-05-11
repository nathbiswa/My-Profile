"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SkillCard({ skill }) {
    const ref = useRef(null);
    const Icon = skill.icon;

    useEffect(() => {
        const card = ref.current;

        const handleMove = (e) => {
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

        const handleLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
            card.removeEventListener("mousemove", handleMove);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="relative group p-6 rounded-2xl text-center cursor-pointer
            bg-white/5 backdrop-blur-md border border-white/10
            transition duration-300 hover:bg-white/10 hover:scale-105"
        >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-purple-500 blur-2xl rounded-2xl transition"></div>

            {/* Icon */}
            <div className="relative z-10 flex justify-center mb-4">
                <Icon
                    className={`text-4xl ${skill.color} group-hover:scale-125 group-hover:rotate-6 transition duration-300`}
                />
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-lg font-semibold text-white">
                {skill.name}
            </h3>
        </div>
    );
}