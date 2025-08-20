import { PageWrapper } from "@/components/PageWrapper";
import { ArrowUp } from "lucide-react";

export default function HomePage() {
    return (
        <PageWrapper>
            <main className="flex min-h-[90vh] md:min-h-screen flex-col items-center justify-center p-8">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                        Тамерлан Гельгаев
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-slate-400">
                        Frontend Разработчик
                    </p>
                </div>

                <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
                    <ArrowUp className="h-5 w-5 text-slate-500" />
                    <p className="text-sm text-slate-500">
                        Начните с поиска вверху
                    </p>
                </div>
            </main>
        </PageWrapper>
    );
}
