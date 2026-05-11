"use client";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative mt-20 text-white">

            {/* 🌈 Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617]"></div>

            {/* 🌟 Glow */}
            <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

            <div className="relative z-10 border-t border-white/10 py-16 px-6 md:px-20">

                {/* ARTICLE STYLE CONTENT */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                    {/* LEFT ARTICLE */}
                    <div>

                        <h1 className="font-bold text-xl">
                            <span className="text-xl font-bold text-orange-300">
                                DEVELOPER
                            </span>
                            <span className="text-xl font-bold text-fuchsia-500">
                                BISHWANATH ✨
                            </span>
                        </h1>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            A passionate frontend developer building modern,
                            interactive and high-performance web experiences using
                            Next.js, React and GSAP animations.
                        </p>
                    </div>

                    {/* MIDDLE SOCIAL */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-4">
                            Connect With Me
                        </h4>

                        <div className="flex gap-5 text-2xl">
                            <a href="#" className="hover:text-purple-400 transition hover:scale-125">
                                <FaGithub />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition hover:scale-125">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="hover:text-blue-600 transition hover:scale-125">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT ARTICLE */}
                    <div className="text-right">
                        <h4 className="text-center md:text-right text-lg font-semibold mb-4">
                            Tech Stack
                        </h4>
                        <p className="text-gray-300 text-center md:text-right text-sm">
                            Next.js • React • Tailwind CSS • GSAP • Node.js
                        </p>

                        <p className="text-gray-400 text-center md:text-right text-xs mt-4">
                            Built with ❤️ by Dev
                        </p>
                    </div>

                </div>

                {/* BOTTOM LINE */}
                <div className="text-center mt-14 text-gray-400 text-sm">
                    © {new Date().getFullYear()} Dev_BISHWANATH. All rights reserved.
                </div>

            </div>
        </footer>
    );
}