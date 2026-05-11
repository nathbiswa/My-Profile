import ProjectCard from "./ProjectCard";

export default function Projects({ data = [] }) {
    return (
        <section id="projects" className="w-full py-10">

            <h2 className="text-3xl font-bold mb-10 text-center">
                My Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                {data.length > 0 ? (
                    data.slice(0, 6).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p className="text-center text-gray-400 col-span-3">
                        No projects found
                    </p>
                )}

            </div>

        </section>
    );
}