"use client";
import React, { useEffect, useRef, useState } from "react";

const greenShades = [
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
  "bg-green-700",
];

function getRandomGreenShade() {
  return greenShades[Math.floor(Math.random() * greenShades.length)];
}

export default function MovingGridBackground() {
  const rowCount = 7;
  const gap = 4;
  const multiplier = 3; // How many screen widths to fill
  const containerRef = useRef<HTMLDivElement>(null);
  const [gridContent, setGridContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth * multiplier;
    const height = container.offsetHeight;

    // Adjust square size so that all rows fit evenly
    const squareSize = Math.floor((height + gap) / rowCount) - gap;

    const totalSize = squareSize + gap;
    const rows = rowCount;
    const cols = Math.ceil(width / totalSize);

    const squares = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        squares.push(
          <div
            key={`${col}-${row}`}
            className={`absolute ${getRandomGreenShade()}`}
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              left: `${col * totalSize}px`,
              top: `${row * totalSize}px`,
            }}
          />,
        );
      }
    }

    setGridContent(squares);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-50"
    >
      <div
        className="absolute h-full bg-transparent"
        style={{
          display: "inline-block",
          width: "300%", // match multiplier
          animation: "scrollLeft 20s linear infinite",
        }}
      >
        <div className="relative h-full w-full">{gridContent}</div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
