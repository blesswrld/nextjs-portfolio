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
        url: "https://gelgt-portfolio.vercel.app",
        siteName: "Портфолио Тамерлана Гельгаева",
        images: [
            {
                url: "https://gelgt-portfolio.vercel.app/preview-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
    // Для favicon
    icons: {
        icon: [
            {
                url: "/favicon/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                url: "/favicon/android-icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
        ],
        apple: [
            { url: "/favicon/apple-icon-57x57.png", sizes: "57x57" },
            { url: "/favicon/apple-icon-60x60.png", sizes: "60x60" },
            { url: "/favicon/apple-icon-72x72.png", sizes: "72x72" },
            { url: "/favicon/apple-icon-76x76.png", sizes: "76x76" },
            { url: "/favicon/apple-icon-114x114.png", sizes: "114x114" },
            { url: "/favicon/apple-icon-120x120.png", sizes: "120x120" },
            { url: "/favicon/apple-icon-144x144.png", sizes: "144x144" },
            { url: "/favicon/apple-icon-152x152.png", sizes: "152x152" },
            { url: "/favicon/apple-icon-180x180.png", sizes: "180x180" },
        ],
    },
    manifest: "/favicon/manifest.json",
    themeColor: "#ffffff",
    other: {
        // для нестандартных тегов
        "msapplication-TileColor": "#ffffff",
        "msapplication-TileImage": "/favicon/ms-icon-144x144.png",
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
