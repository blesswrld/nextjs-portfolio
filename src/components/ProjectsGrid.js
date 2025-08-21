"use client"; // Этот компонент будет интерактивным

import { useState } from "react";
import { projectsData } from "@/data/projects.js";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedInView } from "@/components/AnimatedInView";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ProjectsGrid() {
    const INITIAL_COUNT = 8;
    const PROJECTS_TO_LOAD = 8;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + PROJECTS_TO_LOAD);
    };

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.slice(0, visibleCount).map((project, index) => (
                    <AnimatedInView key={project.id} className="h-full">
                        <ProjectCard project={project} />
                    </AnimatedInView>
                ))}
            </div>

            {visibleCount < projectsData.length && (
                <AnimatedInView delay={0.3}>
                    <div className="text-center mt-12 space-y-4">
                        <p className="text-muted-foreground">
                            Показано{" "}
                            {Math.min(visibleCount, projectsData.length)} из{" "}
                            {projectsData.length} проектов
                        </p>
                        <Button onClick={handleShowMore} variant="outline">
                            <Plus className="mr-2 h-4 w-4" />
                            Загрузить еще
                        </Button>
                    </div>
                </AnimatedInView>
            )}
        </>
    );
}
