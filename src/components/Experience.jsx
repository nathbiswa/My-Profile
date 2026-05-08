"use client";

import ExperienceItem from "./ExperienceItem";

const experiences = [
    {
        title: "Frontend Developer",
        company: "Freelancer",
        year: "2024 - Present",
        desc: "Building modern web apps with React, Next.js and GSAP animations.",
    },
    {
        title: "Web Designer",
        company: "Self Learning",
        year: "2023 - 2024",
        desc: "Created responsive UI designs using Tailwind CSS and modern design systems.",
    },
    {
        title: "Learning Phase",
        company: "Programming Hero",
        year: "2022 - 2023",
        desc: "Learned JavaScript, HTML, CSS and core programming fundamentals.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-28 px-6 md:px-16 text-white overflow-hidden
            bg-gradient-to-br from-[#020617] via-[#1e1b4b] to-[#0f172a]"
        >

            {/* 🌟 Glow Background */}
            <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
                My Journey 🚀
            </h2>

            {/* TIMELINE WRAPPER */}
            <div className="relative max-w-5xl mx-auto">

                {/* Animated line */}
                <div className="absolute left-1/2 top-0 w-[2px] h-full 
                bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 
                transform -translate-x-1/2 opacity-60" />

                {experiences.map((item, i) => (
                    <ExperienceItem key={i} item={item} index={i} />
                ))}

            </div>

        </section>
    );
}