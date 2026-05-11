"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPro() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.from(".about-animate", {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative border-t border-t-gray-200 py-20 px-6 md:px-16 text-white"
        >
            {/* 🔥 BACKGROUND GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a40] to-[#0a0a23] -z-10" />

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="about-animate text-3xl md:text-5xl font-bold mb-4">
                    About Me
                </h2>
                <p className="about-animate text-gray-400">
                    Not just code — I build experiences 🚀
                </p>
            </div>

            {/* STORY */}
            <div className="max-w-4xl mx-auto space-y-6 text-center md:text-left">

                <p className="about-animate text-gray-300 leading-relaxed">
                    I started my journey in web development with curiosity and passion.
                    What began as simple HTML & CSS turned into a deep love for building
                    interactive and high-performance web applications.
                </p>

                <p className="about-animate text-gray-300 leading-relaxed">
                    Today, I specialize in <span className="text-purple-400">Next.js</span>,
                    <span className="text-blue-400"> React</span> and modern UI/UX design.
                    I enjoy crafting smooth animations, scalable interfaces, and clean code architecture.
                </p>

                <p className="about-animate text-gray-300 leading-relaxed">
                    Outside of coding, I enjoy learning new technologies, exploring design ideas,
                    and sometimes watching tech content or playing games 🎮.
                </p>

            </div>

            {/* 🔢 STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-16">

                {[
                    { num: "2+", label: "Years Experience" },
                    { num: "25+", label: "Projects" },
                    { num: "15+", label: "Clients" },
                    { num: "100%", label: "Dedication" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="about-animate p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-bold text-purple-400">{item.num}</h3>
                        <p className="text-gray-400">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* 🧠 SKILLS SNAPSHOT */}
            <div className="max-w-3xl mx-auto mt-16">

                {[
                    { name: "React / Next.js", width: "90%" },
                    { name: "GSAP Animation", width: "85%" },
                    { name: "Tailwind CSS", width: "95%" },
                ].map((skill, i) => (
                    <div key={i} className="about-animate mb-6">
                        <p className="mb-2 text-sm text-gray-300">{skill.name}</p>
                        <div className="w-full bg-white/10 h-2 rounded">
                            <div
                                className="h-2 rounded bg-gradient-to-r from-purple-500 to-blue-500"
                                style={{ width: skill.width }}
                            />
                        </div>
                    </div>
                ))}

            </div>

            {/* 🎯 HOBBIES / INTERESTS */}
            <div className="mt-16 text-center">
                <h3 className="about-animate text-2xl font-bold mb-4">
                    Beyond Coding
                </h3>

                <div className="flex flex-wrap justify-center gap-3">

                    {[
                        "🎮 Gaming",
                        "🎨 UI Design",
                        "📚 Learning",
                        "🎧 Music",
                    ].map((hobby, i) => (
                        <span
                            key={i}
                            className="about-animate px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
                        >
                            {hobby}
                        </span>
                    ))}

                </div>
            </div>

        </section>
    );
}