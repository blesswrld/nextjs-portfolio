"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

// Мы передаем `onOpen` как prop, чтобы управлять открытием CommandMenu из родителя
export function Header({ onOpenCommandMenu }) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-[var(--header-height)] max-w-screen-2xl items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-lg">TG</span>{" "}
                    {/* Инициалы как лого */}
                </Link>
                <Button
                    variant="outline"
                    onClick={onOpenCommandMenu} // При клике вызываем функцию
                    className="h-9 w-9 p-0 md:w-auto md:px-4 md:py-2"
                >
                    <Search className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline-block text-muted-foreground">
                        Поиск...
                    </span>
                    <kbd className="hidden md:inline-flex ml-4 items-center gap-1 rounded border border-slate-700 bg-slate-800 px-1.5 font-mono text-[10px] font-medium text-slate-300">
                        <span className="text-xs">Ctrl</span>K
                    </kbd>
                </Button>
            </div>
        </header>
    );
}
