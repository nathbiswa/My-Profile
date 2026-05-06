"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
    const navRef = useRef();

    useEffect(() => {
        gsap.from(navRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
        });
    }, []);

    return (

        <div className="w-full px-10 py-4 fixed top-0  backdrop-blur-md bg-black/40 z-50">
            <nav
                ref={navRef}

            >
                <div className=" flex justify-between">
                    <h1 className="font-bold text-xl">
                        <span className="text-2xl font-bold text-orange-300">DEVELOPER</span>
                        <span className="text-2xl font-bold text-fuchsia-500">BISHWANATH</span>
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link href={"/"}> <button>Home</button></Link>

                        <button>Projects</button>
                        <button>Contact</button>
                    </div>
                </div>

            </nav>
        </div>

    );
}