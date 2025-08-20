import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimatedInView } from "@/components/AnimatedInView"; // 1. Импортируем компонент

export const metadata = {
    title: "Контакты",
    description:
        "Свяжитесь со мной для обсуждения проектов и предложений. Я всегда открыт для новых возможностей.",
};

export default function ContactPage() {
    return (
        <PageWrapper>
            <main className="container mx-auto py-16 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* 2. Оборачиваем заголовок */}
                    <AnimatedInView>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Связаться со мной
                        </h1>
                        <p className="text-lg text-muted-foreground mb-12">
                            Есть интересный проект или предложение? Заполните
                            форму ниже, и я отвечу вам в ближайшее время.
                        </p>
                    </AnimatedInView>

                    {/* 3. Оборачиваем форму с задержкой */}
                    <AnimatedInView delay={0.2}>
                        <ContactForm />
                    </AnimatedInView>
                </div>
            </main>
        </PageWrapper>
    );
}
