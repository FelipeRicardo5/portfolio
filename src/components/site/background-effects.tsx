"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,45,45,0.12),transparent_35%),radial-gradient(circle_at_78%_0%,rgba(255,255,255,0.08),transparent_34%)]" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0px 0px", "0px 56px"] }}
        transition={{ duration: 8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(138,138,138,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(138,138,138,0.13) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
