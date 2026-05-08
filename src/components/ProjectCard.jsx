"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function ProjectCard({ project }) {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!cardRef.current) return;

        gsap.from(cardRef.current, {
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 85%",
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    return (
        <div
            ref={cardRef}
            className="w-full group relative rounded-2xl overflow-hidden
            bg-white/5 border border-white/10 backdrop-blur-md"
        >

            {/* IMAGE */}
            <div className="relative w-full h-56">

                <Image
                    src={project?.image || "/fallback.jpg"}
                    alt={project?.title || "project"}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* CONTENT */}
            <div className="p-5">

                <h3 className="text-xl font-bold text-white">
                    {project?.title || "No Title"}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                    {project?.description || "No description"}
                </p>

                <div className="mt-4 flex gap-3">

                    <a
                        href={project?.live}
                        target="_blank"
                        className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                    >
                        Live
                    </a>

                    <a
                        href={project?.github}
                        target="_blank"
                        className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/70"
                    >
                        GitHub
                    </a>

                </div>

            </div>
        </div>
    );
}