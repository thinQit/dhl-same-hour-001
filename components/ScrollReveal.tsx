"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children = null,
  className = "",
  delay = 0,
}: Partial<ScrollRevealProps>) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}
