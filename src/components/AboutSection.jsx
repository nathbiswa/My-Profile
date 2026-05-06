"use client";

export default function AboutSection() {
    return (
        <section className="py-16 px-6 md:px-20">
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-6">
                    About Me
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                    I am a passionate Frontend Developer focused on building
                    modern, responsive, and user-friendly web applications.
                    I enjoy working with Next.js, React, and Tailwind CSS to
                    create clean and scalable UI designs.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg mt-4">
                    I love solving real-world problems through code and
                    continuously learning new technologies to improve my
                    development skills.
                </p>

                <div className="mt-6 flex justify-center gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        Frontend Developer
                    </span>
                    <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        React / Next.js
                    </span>
                    <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        Tailwind CSS
                    </span>
                </div>

            </div>
        </section>
    );
}