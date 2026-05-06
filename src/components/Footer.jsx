"use client";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t py-10 px-6 md:px-20 mt-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left side */}
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Dev Portfolio. All rights reserved.
                </p>

                {/* Middle */}
                <div className="flex gap-4 text-xl">
                    <a href="#" className="hover:text-blue-600">
                        <FaGithub />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        <FaFacebook />
                    </a>
                </div>

                {/* Right side */}
                <p className="text-gray-500 text-sm">
                    Built with Next.js & Tailwind CSS
                </p>

            </div>
        </footer>
    );
}