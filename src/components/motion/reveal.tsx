"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9], delay }}
    >
      {children}
    </motion.div>
  );
}