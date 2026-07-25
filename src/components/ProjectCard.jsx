"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ project }) {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!cardRef.current) return;

        gsap.from(cardRef.current, {
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 85%",
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    return (
        <div
            ref={cardRef}
            className="w-full group relative flex flex-col rounded-2xl
            bg-white/5 border border-white/10 backdrop-blur-md
            hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
            transition-all duration-300 overflow-hidden"
        >

            {/* IMAGE */}
            <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
                <Image
                    src={project?.image || "/fallback.jpg"}
                    alt={project?.title || "project"}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Tech Badge (first tech item) */}
                {project?.tech?.[0] && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold
                    bg-purple-500/30 backdrop-blur-md border border-purple-400/30 text-purple-200">
                        {project.tech[0]}
                    </span>
                )}
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-1">

                <h3 className="text-xl font-bold text-white mb-2">
                    {project?.title || "No Title"}
                </h3>

                <p className="text-gray-400 text-sm flex-1 line-clamp-3 leading-relaxed">
                    {project?.description || "No description"}
                </p>

                {/* Tech Tags (first 3) */}
                {project?.tech && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tech.slice(0, 3).map((t, i) => (
                            <span
                                key={i}
                                className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400"
                            >
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500">
                                +{project.tech.length - 3} more
                            </span>
                        )}
                    </div>
                )}

                {/* BUTTONS */}
                <div className="mt-5 space-y-3">

                    {/* 🔍 VIEW DETAILS — Primary CTA (Assignment Required) */}
                    <Link
                        href={`/projects/${project?.id}`}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl
                        bg-gradient-to-r from-purple-500 to-blue-500
                        text-white text-sm font-semibold
                        hover:scale-[1.03] transition shadow-lg"
                    >
                        View Details
                        <FaArrowRight className="text-xs" />
                    </Link>

                    {/* Secondary links */}
                    <div className="flex gap-3">
                        {project?.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 text-sm py-2 rounded-lg
                                bg-purple-500/10 text-purple-300 border border-purple-500/20
                                hover:bg-purple-500/25 transition"
                            >
                                <FaExternalLinkAlt className="text-xs" />
                                Live
                            </a>
                        )}
                        {project?.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 text-sm py-2 rounded-lg
                                bg-white/5 text-white/70 border border-white/10
                                hover:bg-white/15 transition"
                            >
                                <FaGithub className="text-xs" />
                                GitHub
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}