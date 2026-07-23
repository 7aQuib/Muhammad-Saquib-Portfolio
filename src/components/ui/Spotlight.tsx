"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (opacity === 0) setOpacity(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [opacity]);

  if (!isMounted) return null;

  // Use a subtle white glow for dark mode, and a subtle dark glow for light mode
  const glowColor = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        opacity,
        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
      }}
    />
  );
}
