import "./globals.css";
import { Providers } from "@/components/Providers"; // 1. Импортируем наш провайдер
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { AnimatedBackground } from "@/components/AnimatedBackground"; //  Импортируем компонент

export const metadata = {
    title: {
        default: "Тамерлан Гельгаев | Frontend Разработчик",
        template: "%s | Тамерлан Гельгаев", // Шаблон для дочерних страниц
    },
    description:
        "Портфолио frontend-разработчика из Грозного. Создаю быстрые, адаптивные и красивые веб-приложения с фокусом на React и Next.js.",
    keywords:
        "frontend-разработчик, веб-разработчик, портфолио, React, Next.js, JavaScript, TypeScript, Тамерлан Гельгаев",
    authors: [
        { name: "Тамерлан Гельгаев", url: "https://github.com/blesswrld" },
    ],
    // Open Graph теги для красивых превью в соцсетях
    openGraph: {
        title: "Тамерлан Гельгаев | Frontend Разработчик",
        description:
            "Портфолио frontend-разработчика. Проекты, навыки и контакты.",
        url: "https://your-domain.com", // <-- ЗАМЕНИТЬ НА ДОМЕН
        siteName: "Портфолио Тамерлана Гельгаева",
        // images: [
        //   {
        //     url: 'https://your-domain.com/og-image.png', // Ссылка на картинку для превью
        //     width: 1200,
        //     height: 630,
        //   },
        // ],
        locale: "ru_RU",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className="flex flex-col min-h-screen">
                <AnimatedBackground />
                {/* Добавляем фон в самое начало */}
                <Providers>
                    {/* 2. Добавляем `flex-grow` чтобы контент занимал все место */}
                    <div className="flex-grow">{children}</div>
                    <Footer />
                    <Toaster theme="dark" position="bottom-right" />
                </Providers>
            </body>
        </html>
    );
}
