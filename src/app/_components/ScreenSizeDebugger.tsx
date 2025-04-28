"use client";

import { useEffect, useState } from "react";

function getSizeLabel(width: number) {
  if (width < 768) return "Small";
  if (width < 1024) return "Medium";
  return "Largee";
}

export default function ScreenSizeDebugger() {
  const [width, setWidth] = useState<number | null>(null); // Use null initially

  useEffect(() => {
    // Only access window after hydration
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Set initial width after component mounts
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width === null) return null; // Prevent rendering until width is determined

  const sizeLabel = getSizeLabel(width);

  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex items-start justify-center pt-1">
      <div className="bg-opacity-40 rounded-md bg-black px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
        {sizeLabel} - {width}px
      </div>
    </div>
  );
}
