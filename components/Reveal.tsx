"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/anim";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom, ease: EASE },
  }),
};

export default function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: variants.show,
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
