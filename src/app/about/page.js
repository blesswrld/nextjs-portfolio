import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimatedInView } from "@/components/AnimatedInView";

export const metadata = {
    title: "Обо мне",
    description:
        "Узнайте больше о Тамерлане Гельгаеве, frontend-разработчике из Грозного. Стек технологий, подход к работе и цели.",
};

export default function AboutPage() {
    const skills = [
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "TailwindCSS",
        "Sass",
        "HTML5",
        "CSS3",
        "Git",
        "Webpack",
        "Figma",
    ];

    return (
        <PageWrapper>
            <main className="container mx-auto py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* 2. Анимируем первый блок (без задержки) */}
                    <AnimatedInView className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
                        {/* Вы закомментировали фото, я оставляю как есть */}
                        {/* <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary/50">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Тамерлан Гельгаев"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div> */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                                Немного обо мне
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Увлеченный Frontend разработчик, погруженный в
                                мир JavaScript и React.
                            </p>
                        </div>
                    </AnimatedInView>

                    {/* 3. Анимируем второй блок (с задержкой 0.2с) */}
                    <AnimatedInView
                        delay={0.2}
                        className="space-y-6 text-foreground/90 text-lg leading-relaxed"
                    >
                        <p>
                            Привет! Меня зовут Тамерлан, и я живу в городе
                            Грозный. Мне нравится превращать идеи в живые,
                            интерактивные интерфейсы. Особое внимание я уделяю
                            чистоте кода, адаптивности и производительности
                            веб-приложений.
                        </p>
                        <p>
                            Моя цель — создавать не просто работающие, но и
                            удобные, приятные для пользователя продукты. Я
                            всегда открыт для интересных задач и готов вносить
                            свой вклад в проекты, которые меняют мир к лучшему.
                        </p>
                    </AnimatedInView>

                    {/* 4. Анимируем третий блок (с задержкой 0.4с) */}
                    <AnimatedInView delay={0.4} className="mt-12">
                        <h2 className="text-3xl font-bold mb-6 text-center">
                            Технологии, с которыми я работаю
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 text-base font-medium bg-secondary text-secondary-foreground rounded-md shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </AnimatedInView>
                </div>
            </main>
        </PageWrapper>
    );
}
