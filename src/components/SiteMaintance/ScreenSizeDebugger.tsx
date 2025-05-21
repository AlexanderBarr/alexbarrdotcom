"use client";

import { useEffect, useState } from "react";

function getSizeLabel(width: number) {
  if (width < 640) return "xs (<640px)";
  if (width < 768) return "sm (640px–767px)";
  if (width < 1024) return "md (768px–1023px)";
  if (width < 1280) return "lg (1024px–1279px)";
  return "xl+ (1280px+)";
}

export default function ScreenSizeDebugger() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width === null) return null;

  const sizeLabel = getSizeLabel(width);

  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex items-start justify-center pt-1">
      <div className="bg-opacity-40 rounded-md bg-black px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
        {sizeLabel} - {width}px
      </div>
    </div>
  );
}
