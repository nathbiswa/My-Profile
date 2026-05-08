"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import Typewriter from "typewriter-effect";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

gsap.registerPlugin(ScrollTrigger);

export default function ProHero() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const btnRef = useRef(null);
    const imgRef = useRef(null);
    const glowRef = useRef(null);

    // 🎬 GSAP ANIMATION
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });

        tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
            .from(textRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.7,
            }, "-=0.5")
            .from(btnRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
            }, "-=0.4");

        // 🌊 INFINITE FLOAT IMAGE
        gsap.to(imgRef.current, {
            y: -18,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(imgRef.current, {
            rotate: 2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // 💜 GLOW ANIMATION
        gsap.to(glowRef.current, {
            scale: 1.2,
            opacity: 0.25,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

    }, []);

    // 🌌 PARTICLES
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    // 🧭 MOUSE PARALLAX
    const handleMouseMove = (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 30;
        const y = (window.innerHeight / 2 - e.clientY) / 30;

        gsap.to(imgRef.current, {
            x,
            y,
            duration: 0.5,
        });

        gsap.to(glowRef.current, {
            x: x * 1.5,
            y: y * 1.5,
            duration: 0.5,
        });
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-14 overflow-hidden bg-black text-white"
        >

            {/* 🌌 PARTICLES BACKGROUND */}
            <Particles
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: { color: "#000" },
                    particles: {
                        number: { value: 60 },
                        move: { enable: true, speed: 1 },
                        size: { value: 2 },
                        opacity: { value: 0.5 },
                        links: { enable: true, color: "#ffffff" },
                    },
                }}
                className="absolute inset-0"
            />

            {/* LEFT SIDE */}
            <div className="flex-1 z-10 space-y-6">

                {/* TITLE */}
                <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold">
                    Hi, I'm Biswa 👋
                </h1>

                {/* TYPEWRITER */}
                <div ref={textRef} className="text-xl text-gray-300">
                    <Typewriter
                        options={{
                            strings: [
                                "Frontend Developer 💻",
                                "Next.js Specialist ⚡",
                                "GSAP Animation Expert 🚀",
                                "UI/UX Designer 🎨",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <p className="text-gray-400 max-w-md">
                    I build modern, fast & animated web experiences with Next.js, React and GSAP.
                </p>

                {/* BUTTON */}
                <div ref={btnRef}>
                    <MagneticButton className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:shadow-purple-500/40 transition">
                        Explore Work
                    </MagneticButton>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex justify-center relative z-10">

                {/* GLOW */}
                <div
                    ref={glowRef}
                    className="absolute w-72 h-72 bg-purple-500 blur-3xl opacity-20 rounded-full"
                />

                {/* IMAGE */}
                <div ref={imgRef} className="relative">
                    <Image
                        src="/mylogo.png"
                        alt="profile"
                        width={340}
                        height={340}
                        className="rounded-2xl border border-white/10 shadow-2xl"
                    />
                </div>

            </div>

        </section>
    );
}