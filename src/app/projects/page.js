import { projectsData } from "@/data/projects.js";
import { ProjectCard } from "@/components/ProjectCard";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimatedInView } from "@/components/AnimatedInView"; // 1. Импортируем наш компонент

export const metadata = {
    title: "Проекты",
    description:
        "Портфолио работ frontend-разработчика Тамерлана Гельгаева. Лендинги, веб-приложения, мессенджеры и многое другое.",
};

export default function ProjectsPage() {
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

                {/* 3. Оборачиваем сетку проектов с небольшой задержкой */}
                <AnimatedInView delay={0.2}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </AnimatedInView>
            </main>
        </PageWrapper>
    );
}
