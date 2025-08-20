"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedInView({ children, className, delay = 0 }) {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
