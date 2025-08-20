import { Button } from "@/components/ui/button";

export function ProjectCard({ project }) {
    return (
        <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col group h-full">
            <div className="overflow-hidden">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-60 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 mt-auto">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button className="w-full">Демо</Button>
                    </a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button variant="secondary" className="w-full">
                            Код
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
