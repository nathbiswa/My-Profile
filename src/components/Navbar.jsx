"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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
        <nav
            ref={navRef}
            className=" container mx-auto fixed top-0  backdrop-blur-md bg-black/40 z-50 p-4 flex justify-between"
        >
            <h1 className="font-bold text-xl">Coder</h1>
            <div className="flex gap-4">
                <button>Home</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        </nav>
    );
}