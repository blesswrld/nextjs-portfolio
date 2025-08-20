"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function PageTransition() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Эта функция будет вызываться после каждого изменения пути
        const handleComplete = () => {
            NProgress.done();
        };

        // При монтировании компонента или изменении пути
        // мы считаем, что загрузка началась
        NProgress.start();

        // Используем небольшую задержку, чтобы анимация была видна
        const timer = setTimeout(() => {
            handleComplete();
        }, 100); // 100ms - короткая, но заметная задержка

        return () => {
            clearTimeout(timer);
            handleComplete(); // Убедимся, что анимация завершится
        };
    }, [pathname, searchParams]);

    return null;
}
