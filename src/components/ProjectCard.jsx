"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Card } from "@heroui/react";

export default function ProjectCard({ project }) {
    const cardRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(cardRef.current, {
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
        });
    }, []);

    return (
        <Card
            ref={cardRef}
            className="bg-gray-400 p-4 rounded-xl hover:scale-105 transition"
        >
            <div className="w-full md:w-96 md:h-50 aspect-square">
                <Image
                    src={project?.image}
                    fill
                    alt="project.title"
                    className="object-cover rounded-lg mb-3"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 text-sm">{project.description}</p>

            </div>

            <div className="mt-3 flex gap-2">
                <a href={project.live} className="text-purple-400">
                    Live
                </a>
                <a href={project.github} className="text-gray-400">
                    GitHub
                </a>
            </div>
        </Card>
    );
}