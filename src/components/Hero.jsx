"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function Hero() {
    const titleRef = useRef();
    const btnRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        gsap.from(titleRef.current, {
            y: 80,
            opacity: 0,
            duration: 1,
        });

        gsap.from(btnRef.current, {
            scale: 0.8,
            opacity: 0,
            delay: 0.5,
        });

        gsap.from(imgRef.current, {
            scale: 1.2,
            opacity: 0,
            duration: 1,
        });
    }, []);

    return (
        <section className="h-screen flex items-center justify-between px-10">
            {/* LEFT */}
            <div className="space-y-4 flex-1">
                <h1 ref={titleRef} className="text-5xl font-bold">
                    Hi, I'm Biswa 👋
                </h1>

                <p className="text-gray-400">
                    Frontend Developer building modern UI
                </p>
                <MagneticButton ref={btnRef} className="bg-purple-500 px-6 py-3 rounded-full">
                    Explore Work
                </MagneticButton>

            </div>

            {/* RIGHT */}
            <div className=" flex-1">
                <Image
                    ref={imgRef}
                    alt="profile.title"
                    src="/profile.png"
                    width={300}
                    height={300}
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </section>
    );
}