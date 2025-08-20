"use client";

import { PageTransition } from "./PageTransition";
import { Suspense, useState, useEffect, useCallback } from "react";
import { Header } from "./Header";
import { CommandMenu } from "./CommandMenu";

export function Providers({ children }) {
    const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);

    // обработчик нажатий
    const handleKeyDown = useCallback((e) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            setCommandMenuOpen((current) => !current);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, true);
        return () => {
            document.removeEventListener("keydown", handleKeyDown, true);
        };
    }, [handleKeyDown]);

    // Функция для открытия меню по клику на кнопку в шапке
    const handleOpenCommandMenu = () => {
        setCommandMenuOpen(true);
    };

    return (
        <>
            <Suspense fallback={null}>
                <PageTransition />
            </Suspense>

            <Header onOpenCommandMenu={handleOpenCommandMenu} />

            {children}

            <CommandMenu
                open={isCommandMenuOpen}
                setOpen={setCommandMenuOpen}
            />
        </>
    );
}
