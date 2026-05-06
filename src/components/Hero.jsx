"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function Hero() {
    const titleRef = useRef(null);
    const btnRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.from(titleRef.current, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(btnRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            delay: 0.4,
            ease: "power3.out",
        });

        gsap.from(imgRef.current, {
            scale: 1.2,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <section id="hero" className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10">

            {/* LEFT */}
            <div className="space-y-4 flex-1">
                <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold">
                    Hi, I'm Biswa 👋
                </h1>

                <p className="text-gray-500">
                    Frontend Developer crafting fast & modern web experiences <br />
                    I specialize in Next.js, React & modern UI/UX design <br />

                </p>

                <div ref={btnRef}>
                    <MagneticButton className=" border-t border-white/10 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full text-white hover:shadow-purple-500/30 hover:shadow-lg">
                        Explore Work
                    </MagneticButton>
                </div>
            </div>

            {/* RIGHT */}
            <div ref={imgRef} className="flex-1 mt-10 md:mt-0 flex justify-center">
                <Image
                    alt="profile"
                    src="/profile.png"
                    width={300}
                    height={300}
                    className="rounded-xl"
                />
            </div>

        </section>
    );
}