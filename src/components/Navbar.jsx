"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
    const navRef = useRef();
    const [active, setActive] = useState("");

    useEffect(() => {
        // GSAP animation
        gsap.from(navRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
        });

        // Scroll active logic
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let current = "";

            sections.forEach((section) => {
                const top = section.offsetTop - 120;
                const height = section.clientHeight;

                if (
                    window.scrollY >= top &&
                    window.scrollY < top + height
                ) {
                    current = section.getAttribute("id");
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = (id) =>
        active === id
            ? "text-orange-300 font-bold"
            : "text-white/70 hover:text-white";

    return (
        <div className="w-full px-10 py-4 fixed top-0 backdrop-blur-md bg-black/40 z-50">
            <nav ref={navRef}>
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <h1 className="font-bold text-xl">
                        <span className="text-2xl font-bold text-orange-300">
                            DEVELOPER
                        </span>
                        <span className="text-2xl font-bold text-fuchsia-500">
                            BISHWANATH
                        </span>
                    </h1>

                    {/* Links */}
                    <div className="flex items-center gap-6">

                        <Link href="#home" className={linkClass("home")}>
                            Home
                        </Link>

                        <Link href="#about" className={linkClass("about")}>
                            About
                        </Link>

                        <Link href="#skills" className={linkClass("skills")}>
                            Skills
                        </Link>

                        <Link href="#experience" className={linkClass("experience")}>
                            Experience
                        </Link>

                        <Link href="#projects" className={linkClass("projects")}>
                            Projects
                        </Link>

                        <Link href="#contact" className={linkClass("contact")}>
                            Contact
                        </Link>

                    </div>
                </div>
            </nav>
        </div>
    );
}