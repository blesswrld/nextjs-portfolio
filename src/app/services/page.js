import { servicesData } from "@/data/services";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimatedInView } from "@/components/AnimatedInView";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Услуги",
    description:
        "Услуги frontend-разработчика: создание лендингов, многостраничных сайтов, веб-приложений, верстка по макетам и поддержка проектов.",
};

export default function ServicesPage() {
    return (
        <PageWrapper>
            <main className="container mx-auto py-16 px-4">
                <AnimatedInView>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Что я могу предложить
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Готов взяться за интересные задачи и предоставить
                            качественный результат. Ниже приведены основные
                            направления работы и ориентировочные цены.
                        </p>
                    </div>
                </AnimatedInView>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <AnimatedInView key={service.id}>
                            <div className="bg-card border border-border rounded-lg p-6 flex flex-col h-full">
                                <h3 className="text-xl font-bold mb-3 text-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground flex-grow mb-4">
                                    {service.description}
                                </p>
                                <div className="mt-auto text-2xl font-bold text-primary">
                                    {service.price}*
                                </div>
                            </div>
                        </AnimatedInView>
                    ))}
                </div>

                <AnimatedInView delay={0.5}>
                    <div className="text-center mt-12 p-6 bg-secondary rounded-lg">
                        <p className="text-muted-foreground">
                            * Указанные цены являются ориентировочными и
                            обсуждаются индивидуально.
                        </p>
                        <p className="mt-3">
                            <Link href="/contact" passHref>
                                <Button>Обсудить ваш проект</Button>
                            </Link>
                        </p>
                    </div>
                </AnimatedInView>
            </main>
        </PageWrapper>
    );
}
