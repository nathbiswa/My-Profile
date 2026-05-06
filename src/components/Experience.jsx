import ExperienceItem from "./ExperienceItem";

const experiences = [
    {
        title: "Frontend Developer",
        company: "Freelancer",
        year: "2024 - Present",
        desc: "Building modern web apps with React & Next.js",
    },
    {
        title: "Web Designer",
        company: "Self Learning",
        year: "2023 - 2024",
        desc: "Designed responsive UI with Tailwind CSS",
    },
    {
        title: "Learning Phase",
        company: "Programming Hero",
        year: "2022 - 2023",
        desc: "Learned JavaScript, HTML, CSS deeply",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                My Experience
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* timeline line */}
                <div className="absolute left-1/2 top-0 w-1 bg-gray-700 h-full transform -translate-x-1/2" />

                {experiences.map((item, i) => (
                    <ExperienceItem key={i} item={item} index={i} />
                ))}
            </div>
        </section>
    );
}