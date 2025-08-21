"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner"; // Импортируем toast

export function ContactForm() {
    // Инициализация react-hook-form для управления состоянием формы и валидации
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // Состояние для отслеживания процесса отправки (чтобы блокировать кнопку)
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Функция, которая вызывается при отправке формы
    const onSubmit = async (data) => {
        setIsSubmitting(true);

        // Формируем объект с данными для шаблона EmailJS
        const templateParams = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        // Забираем ключи API из переменных окружения
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        try {
            // Отправляем письмо с помощью EmailJS
            await emailjs.send(
                serviceID,
                templateID,
                templateParams,
                publicKey
            );
            // Показываем уведомление об успехе
            toast.success("Сообщение успешно отправлено!", {
                description: "Я свяжусь с вами в ближайшее время.",
            });
            reset(); // Очищаем форму
        } catch (error) {
            console.error("ОШИБКА EmailJS:", error);
            // Показываем уведомление об ошибке
            toast.error("Что-то пошло не так.", {
                description: "Пожалуйста, попробуйте еще раз позже.",
            });
        } finally {
            // В любом случае (успех или ошибка) завершаем состояние отправки
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
            <div>
                <Input
                    placeholder="Ваше имя"
                    {...register("name", {
                        required: "Имя обязательно для заполнения",
                    })}
                    className="glass-input"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.name.message}
                    </p>
                )}
            </div>
            <div>
                <Input
                    type="email"
                    placeholder="Ваш Email"
                    {...register("email", {
                        required: "Email обязателен",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Неверный формат email",
                        },
                    })}
                    className="glass-input"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div>
                <Textarea
                    placeholder="Ваше сообщение"
                    rows={5}
                    {...register("message", {
                        required: "Сообщение не может быть пустым",
                    })}
                    className="glass-input"
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.message.message}
                    </p>
                )}
            </div>
            <Button
                type="submit"
                className="w-full"
                variant="default"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Отправка..." : "Отправить сообщение"}
            </Button>
        </form>
    );
}
