"use client";

import { useEffect, useRef } from "react";
import SkillCard from "./SkillCard";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
                { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
                { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
                { name: "React", icon: FaReact, color: "text-cyan-400" },
                { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
                { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
                { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
            ],
        },
        {
            title: "Tools",
            skills: [
                { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
            ],
        },
    ];

    useEffect(() => {
        gsap.from(cardsRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            scale: 0.9,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out",
        });
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative py-20 px-6 md:px-16 text-white"
        >
            {/* 🎨 Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                My Skills
            </h2>

            {/* Categories */}
            <div className="space-y-16">
                {skillCategories.map((category, ci) => (
                    <div key={ci}>
                        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-purple-400">
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {category.skills.map((skill, i) => {
                                const index = ci * 10 + i; // unique index
                                return (
                                    <div
                                        key={i}
                                        ref={(el) => (cardsRef.current[index] = el)}
                                    >
                                        <SkillCard skill={skill} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}