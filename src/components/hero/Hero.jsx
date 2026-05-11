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
            className="w-full min-h-screen  relative flex flex-col md:flex-row items-center justify-between py-10 md:py-2 px-6 md:px-14 overflow-hidden text-white"
        >
            <HolographicFog />
            <CursorFX />
            <WebGLGrid />
            <CodingMeshBackground />
            <FlowParticles />

            {/* 🖼 IMAGE (TOP on mobile) */}
            <div className=" flex-1  flex justify-center relative z-10 order-1 md:order-2 mb-6 md:mb-0">

                {/* GLOW */}
                <div
                    ref={glowRef}
                    className="absolute w-full md:w-72 h-52 md:h-72 bg-purple-500 blur-3xl opacity-20 rounded-full"
                />

                {/* IMAGE */}
                <div ref={imgRef} className="relative">
                    <Image
                        src="/mylogo.png"
                        alt="profile"
                        width={260}
                        height={260}
                        className=" mt-20 md:mt-0 md:w-[340px] md:h-[340px] rounded-2xl border border-white/10 shadow-2xl"
                    />
                </div>

            </div>

            {/* 📝 TEXT (BOTTOM on mobile) */}
            <div className=" w-full flex-1 z-10 space-y-4 text-center md:text-left order-2 md:order-1">

                <h1 ref={titleRef} className="text-2xl md:text-6xl font-bold">
                    Hi, I'm Bishwa 👋
                </h1>

                <div ref={textRef} className="text-sm md:text-xl text-gray-300">
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

                <p className="text-sm md:text-lg text-gray-400 max-w-md mx-auto md:mx-0">
                    I build high-performance animated web experiences with modern stack.
                </p>

                <div ref={btnRef} className="flex justify-center md:justify-start">
                    <MagneticButton className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                        Explore Work
                    </MagneticButton>
                </div>

            </div>

        </section>
    );
}