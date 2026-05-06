import ProjectCard from "./ProjectCard";


export default function Projects({ data }) {
    return (
        <section id="projects" className="py-20 px-6">
            <h2 className="text-3xl font-bold mb-10">My Projects</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {data.slice(0, 6).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}