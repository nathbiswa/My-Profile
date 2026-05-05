"use client"
import SkillCard from "./SkillCard";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";



export default function Skills() {
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
    return (
        <section className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
                My Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                    <SkillCard key={i} skill={skill} />
                ))}
            </div>
        </section>
    );
}