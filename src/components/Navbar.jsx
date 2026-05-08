"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
    const navRef = useRef();
    const [active, setActive] = useState("home");

    // 🔐 AUTH STATE (replace later with BetterAuth hook)
    const [user, setUser] = useState(null);
    // Example:
    // const { user, logout } = useAuth(); ← BetterAuth integration point

    useEffect(() => {
        gsap.from(navRef.current, {
            y: -60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let current = "home";

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

    const links = ["home", "about", "skills", "experience", "projects", "contact"];

    return (
        <header className="fixed top-0 w-full z-50">

            <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">

                <nav
                    ref={navRef}
                    className="flex items-center justify-between px-6 md:px-12 py-4"
                >

                    {/* LOGO */}
                    <h1 className="text-xl font-bold flex items-center gap-1">
                        <span className="bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text drop-shadow-sm">
                            DEV_
                        </span>

                        <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text drop-shadow-sm">
                            BISHWANATH
                        </span>
                    </h1>

                    {/* NAV LINKS */}
                    <div className="hidden md:flex items-center gap-6">

                        {links.map((id) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                className={`relative text-sm transition px-2 py-1
                                ${active === id
                                        ? "text-white"
                                        : "text-white/60 hover:text-white"
                                    }`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}

                                {active === id && (
                                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                                )}
                            </Link>
                        ))}

                    </div>

                    {/* 🔐 AUTH SECTION */}
                    <div className="flex items-center gap-3">

                        {!user ? (
                            <>
                                {/* SIGN IN */}
                                <Link
                                    href="/signin"
                                    className="px-4 py-2 text-sm rounded-full
                                    border border-white/20 text-white/70
                                    hover:bg-white/10 hover:text-white transition"
                                >
                                    Sign In
                                </Link>

                                {/* SIGN UP */}
                                <Link
                                    href="/signup"
                                    className="px-4 py-2 text-sm rounded-full
                                    bg-gradient-to-r from-purple-500 to-blue-500
                                    hover:scale-105 transition shadow-lg"
                                >
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <>
                                {/* PROFILE (future dashboard ready) */}
                                <Link
                                    href="/dashboard"
                                    className="px-4 py-2 text-sm rounded-full
                                    bg-white/10 border border-white/20
                                    hover:bg-white/20 transition"
                                >
                                    Dashboard
                                </Link>

                                {/* LOGOUT (BetterAuth hook ready) */}
                                <button
                                    onClick={() => {
                                        // logout() ← BetterAuth logout here
                                        setUser(null);
                                    }}
                                    className="px-4 py-2 text-sm rounded-full
                                    bg-red-500/20 text-red-300
                                    hover:bg-red-500/30 transition"
                                >
                                    Logout
                                </button>
                            </>
                        )}

                    </div>

                </nav>
            </div>

        </header>
    );
}