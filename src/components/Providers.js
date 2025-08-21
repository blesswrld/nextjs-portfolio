"use client";

import { PageTransition } from "./PageTransition";
import { Suspense, useEffect, useCallback } from "react";
import { Header } from "./Header";
import { CommandMenu } from "./CommandMenu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useCommandMenu } from "@/hooks/use-command-menu"; // 2. Импортируем хук

export function Providers({ children }) {
    // 3. Получаем функцию `toggle` из нашего глобального хранилища
    const { toggle } = useCommandMenu();

    // Используем хук, чтобы определить, является ли экран десктопным (шире 768px)
    const isDesktop = useMediaQuery("(min-width: 768px)");

    // Обработчик нажатий
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                toggle(); // 4. Используем `toggle` вместо `setCommandMenuOpen`
            }
        },
        [toggle]
    ); // Добавляем toggle в зависимости

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, true);
        return () => {
            document.removeEventListener("keydown", handleKeyDown, true);
        };
    }, [handleKeyDown]);

    return (
        <>
            <Suspense fallback={null}>
                <PageTransition />
            </Suspense>

            <Header />

            {children}

            <CommandMenu isDesktop={isDesktop} />
        </>
    );
}
