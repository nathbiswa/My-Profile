import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaLightbulb, FaExclamationTriangle } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiFirebase, SiExpress, SiRedux, SiJsonwebtokens, SiStripe, SiCloudinary, SiTypescript, SiFramer } from "react-icons/si";

// Map tech names to icons
const techIconMap = {
    "React": { icon: SiReact, color: "text-cyan-400" },
    "Next.js": { icon: SiNextdotjs, color: "text-white" },
    "Node.js": { icon: SiNodedotjs, color: "text-green-400" },
    "MongoDB": { icon: SiMongodb, color: "text-green-500" },
    "Express.js": { icon: SiExpress, color: "text-gray-300" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "text-teal-400" },
    "Firebase": { icon: SiFirebase, color: "text-orange-400" },
    "Redux Toolkit": { icon: SiRedux, color: "text-purple-400" },
    "JWT": { icon: SiJsonwebtokens, color: "text-yellow-400" },
    "Stripe": { icon: SiStripe, color: "text-indigo-400" },
    "Cloudinary": { icon: SiCloudinary, color: "text-blue-400" },
    "GSAP": { icon: null, color: "text-green-300" },
    "TypeScript": { icon: SiTypescript, color: "text-blue-500" },
    "Framer Motion": { icon: SiFramer, color: "text-pink-400" },
};

async function getProject(id) {
    const data = (await import("../../../../public/data.json")).default;
    return data.find((p) => String(p.id) === String(id)) || null;
}

export async function generateStaticParams() {
    const data = (await import("../../../../public/data.json")).default;
    return data.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = await getProject(id);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} — Bishwa Nath Roy`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }) {
    const { id } = await params;
    const project = await getProject(id);

    if (!project) notFound();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white">

            {/* 🌌 Background Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-600 opacity-10 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-32">

                {/* 🔙 Back Button */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition mb-10 group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition" />
                    Back to Portfolio
                </Link>

                {/* 🖼️ Project Hero Image */}
                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>

                {/* 📋 Project Title & Links */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-gray-400 mt-3 text-base md:text-lg max-w-2xl leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 flex-shrink-0">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition shadow-lg text-sm"
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition text-sm"
                            >
                                <FaGithub />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>

                {/* 🛠️ Tech Stack */}
                <section className="mb-10 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <h2 className="text-xl font-bold text-purple-300 mb-5">⚙️ Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech?.map((t, i) => {
                            const techInfo = techIconMap[t];
                            const IconComp = techInfo?.icon;
                            return (
                                <span
                                    key={i}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                    bg-white/5 border border-white/10 ${techInfo?.color || "text-gray-300"}`}
                                >
                                    {IconComp && <IconComp className="text-base" />}
                                    {t}
                                </span>
                            );
                        })}
                    </div>
                </section>

                {/* ⚠️ Challenges */}
                <section className="mb-8 p-6 md:p-8 rounded-2xl bg-orange-500/5 border border-orange-400/20 backdrop-blur-md">
                    <h2 className="text-xl font-bold text-orange-300 mb-4 flex items-center gap-2">
                        <FaExclamationTriangle className="text-orange-400" />
                        Challenges Faced
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        {project.challenges}
                    </p>
                </section>

                {/* 🚀 Future Improvements */}
                <section className="mb-10 p-6 md:p-8 rounded-2xl bg-blue-500/5 border border-blue-400/20 backdrop-blur-md">
                    <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                        <FaLightbulb className="text-blue-400" />
                        Future Improvements
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        {project.improvements}
                    </p>
                </section>

                {/* Bottom CTA */}
                <div className="text-center mt-14 p-8 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-gray-400 mb-4 text-lg">Want to see more of my work?</p>
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-105 transition shadow-lg"
                    >
                        <FaArrowLeft />
                        Back to All Projects
                    </Link>
                </div>

            </div>
        </div>
    );
}
