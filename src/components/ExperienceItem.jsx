"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExperienceItem({ item, index }) {
    const ref = useRef();

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
        });
    }, [index]);

    return (
        <div
            ref={ref}
            className={`mb-10 flex ${index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
        >
            <div className="bg-gray-900 p-6 rounded-xl w-[45%] shadow-lg">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400">
                    {item.company} • {item.year}
                </p>
                <p className="mt-2 text-gray-300">{item.desc}</p>
            </div>
        </div>
    );
}