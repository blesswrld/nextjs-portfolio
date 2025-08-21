import { PageWrapper } from "@/components/PageWrapper";
import { AnimatedInView } from "@/components/AnimatedInView";
import { ProjectsGrid } from "@/components/ProjectsGrid"; // 1. Импортируем наш компонент

// 2. Теперь мы можем безопасно экспортировать metadata
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

                {/* 3. Просто вставляем наш интерактивный компонент */}
                <ProjectsGrid />
            </main>
        </PageWrapper>
    );
}
