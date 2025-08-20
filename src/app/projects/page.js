"use client"; // 1. Превращаем в клиентский компонент

import { useState } from "react"; // 2. Импортируем useState
import { projectsData } from "@/data/projects.js";
import { ProjectCard } from "@/components/ProjectCard";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimatedInView } from "@/components/AnimatedInView";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
    // 3. Устанавливаем начальное количество видимых проектов
    const INITIAL_COUNT = 8;
    const PROJECTS_TO_LOAD = 8;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    // 4. Функция для загрузки следующей порции проектов
    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + PROJECTS_TO_LOAD);
    };

    return (
        <PageWrapper>
            <main className="container mx-auto py-16 px-4">
                {/* 2. Оборачиваем заголовок в AnimatedInView */}
                <AnimatedInView>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Мои Работы
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Здесь собраны проекты, которые демонстрируют мои
                            навыки в веб-разработке.
                        </p>
                    </div>
                </AnimatedInView>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 5. Отображаем только часть проектов с помощью .slice() */}
                    {projectsData
                        .slice(0, visibleCount)
                        .map((project, index) => (
                            <AnimatedInView key={project.id} className="h-full">
                                <ProjectCard project={project} />
                            </AnimatedInView>
                        ))}
                </div>

                {/* 6. Блок "Показать еще", который появляется, если есть что показывать */}
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
            </main>
        </PageWrapper>
    );
}
