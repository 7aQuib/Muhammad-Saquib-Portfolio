"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Cursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Accessibility & Device checks
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return; // Disable on mobile
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={36}
      color="255, 255, 255"
      outerAlpha={0} // Handled by outerStyle border
      innerScale={2.5}
      outerScale={0}
      trailingSpeed={6}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '[data-cursor]'
      ]}
      innerStyle={{
        mixBlendMode: 'difference',
        backgroundColor: '#ffffff'
      }}
      outerStyle={{
        mixBlendMode: 'difference',
        border: '1.5px solid rgba(255, 255, 255, 0.5)',
        backgroundColor: 'transparent'
      }}
    />
  );
}
