"use client";

import { useEffect, useRef } from "react";
import SkillCard from "./SkillCard";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    const skills = [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });

        tl.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
        })
            .from(cardsRef.current, {
                opacity: 0,
                y: 60,
                stagger: 0.1,
                duration: 0.6,
            }, "-=0.4");

    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative py-24 px-6 md:px-16 text-white 
            bg-gradient-to-br from-[#020617] via-[#1e1b4b] to-[#0f172a] overflow-hidden"
        >

            {/* Glow Background */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

            {/* Title */}
            <h2
                ref={titleRef}
                className="text-3xl md:text-5xl font-bold text-center mb-14 relative z-10"
            >
                My Skills ⚡
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardsRef.current[i] = el)}
                    >
                        <SkillCard skill={skill} />
                    </div>
                ))}
            </div>

        </section>
    );
}