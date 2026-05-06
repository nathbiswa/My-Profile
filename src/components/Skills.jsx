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
    const cardsRef = useRef([]);

    const skills = [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Tailwind", icon: SiTailwindcss },
    ];

    useEffect(() => {
        gsap.from(cardsRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
        });
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
                My Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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