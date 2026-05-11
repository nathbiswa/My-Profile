"use client";

export default function Education() {
    const educationData = [
        {
            title: "SSC",
            institute: "Bondiara High School",
            group: "Science",
            desc: "Built a strong foundation in mathematics and science, which later helped me understand programming logic easily.",
            type: "education",
        },
        {
            title: "HSC",
            institute: "D.N Degree College",
            group: "Science",
            desc: "Developed analytical thinking and gained interest in technology and problem solving.",
            type: "education",
        },
        {
            title: "Degree (BSS)",
            institute: "Pirganj Government College",
            group: "BSS",
            desc: "Expanded my academic knowledge while focusing more on practical skills and real-world applications.",
            type: "education",
        },
        {
            title: "ICT Course",
            institute: "Programming Hero",
            group: "6 Months",
            desc: "Learned modern web development including React, Next.js, and real project building.",
            type: "course",
        },
        {
            title: "ICT Course",
            institute: "Freedom IT Institute",
            group: "6 Months",
            desc: "Focused on frontend development, UI design, and building responsive websites.",
            type: "course",
        },
    ];

    return (
        <section className="relative py-20 px-6 md:px-16 text-white">

            {/* 🎨 Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />

            {/* 🧾 Intro */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Education & Learning Journey
                </h2>

                <p className="text-gray-400">
                    My journey started with academic education and evolved into practical
                    skill development through modern web technologies and real-world projects.
                </p>
            </div>

            {/* 🧊 Cards */}
            <div className="grid md:grid-cols-3 gap-6">

                {educationData.map((item, i) => (
                    <div
                        key={i}
                        className={`relative group p-6 rounded-2xl backdrop-blur-md border transition duration-300 hover:scale-105
                        
                        ${item.type === "course"
                                ? "bg-blue-500/10 border-blue-400/30"
                                : "bg-white/5 border-white/10"
                            }`}
                    >

                        {/* Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-purple-500 blur-2xl rounded-2xl transition"></div>

                        {/* Icon */}
                        <div className="text-3xl mb-4">
                            {item.type === "course" ? "💻" : "🎓"}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-purple-300">
                            {item.title}
                        </h3>

                        {/* Institute */}
                        <p className="text-gray-300 mt-1">
                            {item.institute}
                        </p>

                        {/* Group Badge */}
                        <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                            {item.group}
                        </span>

                        {/* Description */}
                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                            {item.desc}
                        </p>

                        {/* Course Badge */}
                        {item.type === "course" && (
                            <span className="inline-block mt-4 px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                                Professional Training
                            </span>
                        )}

                    </div>
                ))}

            </div>

        </section>
    );
}