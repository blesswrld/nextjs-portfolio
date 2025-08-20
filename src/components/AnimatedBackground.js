"use client";
import { motion } from "framer-motion";

export function AnimatedBackground() {
    return (
        <motion.div
            style={{
                // Стили для самого градиента
                background:
                    "linear-gradient(135deg, #0d1117, #161b22, #1f2a40, #003d4d)",
                backgroundSize: "400% 400%",
                // Фиксируем фон на всю страницу и помещаем его на самый задний план
                position: "fixed",
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                zIndex: -1, // Очень важно: помещаем фон за всем контентом
            }}
            // Анимация с помощью Framer Motion
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 20, // Длительность одного цикла анимации (20 секунд)
                ease: "easeInOut",
                repeat: Infinity, // Бесконечное повторение
            }}
        />
    );
}
