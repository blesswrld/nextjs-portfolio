"use client";

import React, { useRef, useEffect } from "react"; // 1. Добавляем useRef
import { useRouter } from "next/navigation";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Home,
    FolderGit2,
    User,
    Send,
    Github,
    Mail,
    Briefcase,
} from "lucide-react";
import { useCommandMenu } from "@/hooks/use-command-menu"; // Импортируем хук

// Принимаем проп isDesktop
export function CommandMenu({ open, setOpen, isDesktop }) {
    const router = useRouter();
    const inputRef = useRef(null); // 2. Создаем ref для поля ввода
    const { isOpen, close } = useCommandMenu();

    const runCommand = (command) => {
        close(); // Используем close из хранилища
        command();
    };

    // 3. Используем useEffect для управления фокусом
    useEffect(() => {
        if (!isDesktop && open && inputRef.current) {
            // Если это мобильное устройство и меню открыто,
            // явно убираем фокус с поля ввода.
            inputRef.current.blur();
        }
    }, [open, isDesktop]);

    return (
        <CommandDialog open={isOpen} onOpenChange={close}>
            {/* 
              4.Мы передаем ref в CommandInput, чтобы получить к нему прямой доступ.
              `onFocusCapture` предотвращает попытки повторной фокусировки.
            */}
            <CommandInput
                ref={inputRef}
                placeholder="Поиск..."
                onFocusCapture={(e) => {
                    if (!isDesktop) {
                        e.preventDefault();
                        e.target.blur();
                    }
                }}
            />
            <CommandList>
                <CommandEmpty>Ничего не найдено.</CommandEmpty>

                <CommandGroup heading="Навигация">
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/"))}
                    >
                        <Home className="mr-2 h-4 w-4" />
                        <span>Главная</span>
                    </CommandItem>
                    <CommandItem
                        onSelect={() =>
                            runCommand(() => router.push("/projects"))
                        }
                    >
                        <FolderGit2 className="mr-2 h-4 w-4" />
                        <span>Проекты</span>
                    </CommandItem>
                    <CommandItem
                        onSelect={() =>
                            runCommand(() => router.push("/services"))
                        }
                    >
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>Услуги</span>
                    </CommandItem>
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/about"))}
                    >
                        <User className="mr-2 h-4 w-4" />
                        <span>Обо мне</span>
                    </CommandItem>
                    <CommandItem
                        onSelect={() =>
                            runCommand(() => router.push("/contact"))
                        }
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Контакты</span>
                    </CommandItem>
                </CommandGroup>

                <CommandGroup heading="Контакты">
                    <CommandItem
                        onSelect={() =>
                            runCommand(() =>
                                window.open("https://t.me/timammn", "_blank")
                            )
                        }
                    >
                        <Send className="mr-2 h-4 w-4" />
                        <span>Telegram</span>
                    </CommandItem>
                    <CommandItem
                        onSelect={() =>
                            runCommand(() =>
                                window.open(
                                    "https://github.com/blesswrld",
                                    "_blank"
                                )
                            )
                        }
                    >
                        <Github className="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
