"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [isActive, setIsActive] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { damping: 28, stiffness: 180, mass: 0.6 });
  const cursorY = useSpring(mouseY, { damping: 28, stiffness: 180, mass: 0.6 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsActive(true);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
      <motion.div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[110px]"
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ left: cursorX, top: cursorY }}
      />
    </div>
  );
}
