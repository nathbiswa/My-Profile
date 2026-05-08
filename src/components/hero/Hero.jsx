"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import MagneticButton from "../MagneticButton";
import Typewriter from "typewriter-effect";
import CodingMeshBackground from "../CodingMeshBackground";
import CursorFX from "./CursorFX";
import FlowParticles from "./FlowParticles";
import WebGLGrid from "./WebGLGrid";
import HolographicFog from "./HolographicFog";


export default function ProHero() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const btnRef = useRef(null);
    const imgRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

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

        // floating image
        gsap.to(imgRef.current, {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(glowRef.current, {
            scale: 1.2,
            opacity: 0.25,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

    }, []);

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
            className="relative h-screen flex items-center justify-between px-6 md:px-14 overflow-hidden text-white"
        >
            <HolographicFog />
            <CursorFX />
            <WebGLGrid />
            {/* 🌌 BACKGROUND */}
            <CodingMeshBackground />

            <FlowParticles />

            {/* LEFT SIDE */}
            <div className="flex-1 z-10 space-y-6">

                <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold">
                    Hi, I'm Biswa 👋
                </h1>

                <div ref={textRef} className="text-xl text-gray-300">
                    <Typewriter
                        options={{
                            strings: [
                                "Frontend Developer 💻",
                                "Next.js Engineer ⚡",
                                "GSAP Animator 🚀",
                                "UI Architect 🎨",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <p className="text-gray-400 max-w-md">
                    I build high-performance animated web experiences with modern stack.
                </p>

                <div ref={btnRef}>
                    <MagneticButton className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
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