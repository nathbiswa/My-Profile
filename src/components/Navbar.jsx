"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const navRef = useRef();
    const glowRef = useRef();
    const indicatorRef = useRef();
    const menuRef = useRef();

    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = ["home", "about", "skills", "experience", "education", "projects", "contact"];

    // 🚀 ENTRY
    useEffect(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
        });
    }, []);

    // 🌊 SCROLL + ACTIVE
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);

            let current = "home";
            document.querySelectorAll("section").forEach((section) => {
                const top = section.offsetTop - 120;
                const height = section.clientHeight;

                if (window.scrollY >= top && window.scrollY < top + height) {
                    current = section.id;
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔮 ACTIVE INDICATOR (energy bar)
    useEffect(() => {
        const el = document.querySelector(`[data-id="${active}"]`);
        if (!el || !indicatorRef.current) return;

        const rect = el.getBoundingClientRect();

        gsap.to(indicatorRef.current, {
            x: rect.left - 8,
            width: rect.width,
            duration: 0.4,
            ease: "power3.out",
        });
    }, [active]);

    // 🌈 CURSOR PROXIMITY GLOW
    useEffect(() => {
        const move = (e) => {
            const rect = navRef.current.getBoundingClientRect();

            const distX = e.clientX - rect.left;
            const distY = e.clientY - rect.top;

            gsap.to(glowRef.current, {
                x: distX - 150,
                y: distY - 150,
                opacity: 0.25,
                duration: 0.4,
            });
        };

        const leave = () => {
            gsap.to(glowRef.current, { opacity: 0, duration: 0.5 });
        };

        navRef.current.addEventListener("mousemove", move);
        navRef.current.addEventListener("mouseleave", leave);

        return () => {
            navRef.current.removeEventListener("mousemove", move);
            navRef.current.removeEventListener("mouseleave", leave);
        };
    }, []);

    // 🧲 MAGNETIC LINKS
    const handleMove = (e, el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
            x: x * 0.25,
            y: y * 0.25,
            duration: 0.3,
        });
    };

    const resetMove = (el) => {
        gsap.to(el, { x: 0, y: 0, duration: 0.4 });
    };

    // 📱 MOBILE MENU
    useEffect(() => {
        if (menuOpen) {
            gsap.fromTo(menuRef.current, { x: "100%" }, { x: "0%" });
        } else {
            gsap.to(menuRef.current, { x: "100%" });
        }
    }, [menuOpen]);

    return (
        <header className="fixed w-full flex justify-center z-50">

            <nav
                ref={navRef}
                className={`relative transition-all duration-500
                ${scrolled
                        ? "w-[90%] md:w-[70%] bg-black/70 backdrop-blur-2xl shadow-2xl scale-[0.97]"
                        : "w-[95%] md:w-[85%] bg-black/30 backdrop-blur-xl"
                    }
                border border-white/10 rounded-3xl px-8 py-4 flex items-center justify-between overflow-hidden`}
            >

                {/* 🌈 ENERGY GLOW */}
                <div
                    ref={glowRef}
                    className="absolute w-[300px] h-[300px] bg-purple-500 blur-3xl opacity-0 pointer-events-none"
                />

                {/* 🔥 LOGO */}
                <h1 className="font-bold flex gap-1 text-sm md:text-lg z-10">
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text">
                        DEV_
                    </span>
                    <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
                        BISHWANATH
                    </span>
                </h1>

                {/* 💻 NAV LINKS */}
                <div className="hidden md:flex relative gap-8 z-10">

                    <span
                        ref={indicatorRef}
                        className="absolute bottom-0 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />

                    {links.map((id) => (
                        <Link
                            key={id}
                            data-id={id}
                            href={`#${id}`}
                            onMouseMove={(e) => handleMove(e, e.currentTarget)}
                            onMouseLeave={(e) => resetMove(e.currentTarget)}
                            className={`text-sm transition
                            ${active === id
                                    ? "text-white"
                                    : "text-white/60 hover:text-white"
                                }`}
                        >
                            {id.toUpperCase()}
                        </Link>
                    ))}
                </div>

                {/* 🍔 MOBILE */}
                <button
                    className="md:hidden text-white text-xl z-10"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* 📱 MOBILE MENU */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 w-[75%] h-screen bg-black/95 backdrop-blur-xl p-6 flex flex-col gap-6 md:hidden"
                style={{ transform: "translateX(100%)" }}
            >
                {links.map((id) => (
                    <Link key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                        {id.toUpperCase()}
                    </Link>
                ))}
            </div>
        </header>
    );
}