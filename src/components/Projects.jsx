"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ data = [] }) {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        if (!titleRef.current) return;

        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative py-20 px-6 md:px-16 text-white"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a40] to-[#0a0a23]" />

            {/* Subtle glow orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600 opacity-10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-10 blur-[100px] rounded-full pointer-events-none" />

            {/* Section Header */}
            <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    My Projects
                </h2>
                <p className="text-gray-400 text-base md:text-lg">
                    Here are some of my best works — click <span className="text-purple-400 font-semibold">View Details</span> to learn more about each project.
                </p>
            </div>

            {/* Project Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.length > 0 ? (
                    data.slice(0, 6).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p className="text-center text-gray-400 col-span-3">
                        No projects found
                    </p>
                )}
            </div>

        </section>
    );
}