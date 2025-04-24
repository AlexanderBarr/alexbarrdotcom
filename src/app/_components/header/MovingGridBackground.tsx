"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";

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

  const containerRef = useRef<HTMLDivElement>(null);
  const [gridContent, setGridContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const squareSize = Math.floor(height / rowCount);
    const totalSize = squareSize + gap;

    const cols = Math.ceil(width / totalSize) + 2;
    const rows = Math.ceil(height / totalSize);

    const makeGrid = () => {
      const squares = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          squares.push(
            <div
              key={`${col}-${row}-${Math.random()}`}
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
      return <>{squares}</>;
    };

    setGridContent(makeGrid());
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-50"
    >
      <div
        className="animate-scroll absolute h-full bg-transparent"
        style={{
          display: "flex",
          width: "200%",
        }}
      >
        {/* Two copies of the grid for seamless looping */}
        <div className="relative" style={{ width: "50%", height: "100%" }}>
          {gridContent}
        </div>
        <div className="relative" style={{ width: "50%", height: "100%" }}>
          {gridContent}
        </div>
      </div>
    </div>
  );
}
