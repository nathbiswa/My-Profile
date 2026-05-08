"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutProMax() {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);
    const skillsRef = useRef([]);
    const cardsRef = useRef([]);

    useEffect(() => {
        // 🔢 COUNT-UP STATS
        statsRef.current.forEach((el) => {
            const end = +el.getAttribute("data-value");

            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: end,
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                }
            );
        });

        // 🧠 SKILL BARS
        skillsRef.current.forEach((bar) => {
            const width = bar.getAttribute("data-width");

            gsap.fromTo(
                bar,
                { width: "0%" },
                {
                    width: width,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bar,
                        start: "top 85%",
                    },
                }
            );
        });

        // 🎮 TIMELINE
        gsap.from(".timeline-item", {
            y: 80,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top 80%",
            },
        });

        // 🧊 3D TILT CARDS
        cardsRef.current.forEach((card) => {
            if (!card) return;

            const handleMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = -(y - rect.height / 2) / 10;
                const rotateY = (x - rect.width / 2) / 10;

                gsap.to(card, {
                    rotateX,
                    rotateY,
                    transformPerspective: 600,
                    duration: 0.3,
                });
            };

            const handleLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.5,
                    ease: "power3.out",
                });
            };

            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);
        });

    }, []);

    return (
        <section id="about"
            ref={sectionRef}
            className="relative text-white py-24 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617] overflow-hidden"
        >

            {/* 🌟 Glow Background */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

            {/* 🧾 INTRO */}
            <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    About Me
                </h2>
                <p className="text-gray-300">
                    I build modern, high-performance and animated web experiences.
                </p>
            </div>

            {/* 🔢 STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20 relative z-10">
                {[
                    { num: 2, label: "Years Experience" },
                    { num: 25, label: "Projects" },
                    { num: 15, label: "Clients" },
                    { num: 100, label: "Dedication" },
                ].map((item, i) => (
                    <div key={i} className="p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10">
                        <h3
                            ref={(el) => (statsRef.current[i] = el)}
                            data-value={item.num}
                            className="text-3xl font-bold text-purple-400"
                        >
                            0
                        </h3>
                        <p className="text-gray-300">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* 🧠 SKILLS */}
            <div className="max-w-3xl mx-auto mb-20 relative z-10">
                {[
                    { name: "React / Next.js", width: "90%" },
                    { name: "GSAP Animation", width: "85%" },
                    { name: "Tailwind CSS", width: "95%" },
                ].map((skill, i) => (
                    <div key={i} className="mb-6">
                        <p className="mb-2 text-gray-200">{skill.name}</p>
                        <div className="w-full bg-white/10 h-2 rounded">
                            <div
                                ref={(el) => (skillsRef.current[i] = el)}
                                data-width={skill.width}
                                className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* 🎮 TIMELINE */}
            <div className="timeline max-w-3xl mx-auto mb-20 relative z-10">
                {[
                    "Started Web Development Journey",
                    "Learned React & Next.js",
                    "Built Real Projects",
                    "Working with Clients",
                ].map((item, i) => (
                    <div key={i} className="timeline-item mb-6 border-l-2 border-purple-500 pl-4 text-gray-300">
                        {item}
                    </div>
                ))}
            </div>

            {/* 🧊 3D CARDS */}
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
                {["Performance", "UI Design", "Animations"].map((item, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardsRef.current[i] = el)}
                        className="p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 cursor-pointer transition hover:bg-white/10"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-white">{item}</h3>
                        <p className="text-gray-300">
                            Modern approach for {item.toLowerCase()}.
                        </p>
                    </div>
                ))}
            </div>

            {/* 🎥 STORY */}
            <div className="mt-32 text-center relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                    My Journey 🚀
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    From learning basics to building modern web applications with animation,
                    my journey is all about growth, creativity and problem solving.
                </p>
            </div>

        </section>
    );
}