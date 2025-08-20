"use client";

import React from "react";
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

// компонент принимает `open` и `setOpen` как props
export function CommandMenu({ open, setOpen }) {
    const router = useRouter();

    const runCommand = (command) => {
        setOpen(false); // Закрываем меню
        command();
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Поиск..." />
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
