import { Github, Send } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border mt-16 py-8">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
                    © {currentYear} Все права защищены.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://t.me/timammn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Send size={20} />
                    </a>
                    <a
                        href="https://github.com/blesswrld"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
