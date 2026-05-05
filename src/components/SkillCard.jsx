"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SkillCard({ skill }) {
    const ref = useRef();
    const Icon = skill.icon; // 🔥 dynamic icon

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
        });
    }, []);

    return (
        <div
            ref={ref}
            className="bg-gray-900 p-6 rounded-xl text-center hover:scale-110 transition hover:bg-purple-600"
        >
            <Icon className="text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
        </div>
    );
}