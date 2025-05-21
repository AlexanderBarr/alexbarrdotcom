"use client";
import React, { useEffect, useRef, useState } from "react";

const greenShades = [
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
  "bg-green-700",
] as const;

function getRandomGreenShade(): string {
  return greenShades[Math.floor(Math.random() * greenShades.length)]!;
}

export default function MovingGridBackground() {
  const rowCount = 8;
  const gap = 4;
  const multiplier = 5;
  const maxCols = 200; // arbitrary large number to cover big screens

  const containerRef = useRef<HTMLDivElement>(null);
  const [colorGrid, setColorGrid] = useState<string[][]>([]);
  const [gridContent, setGridContent] = useState<React.ReactNode>(null);

  // Generate color grid once
  useEffect(() => {
    const tempGrid: string[][] = [];
    for (let row = 0; row < rowCount; row++) {
      const rowColors: string[] = [];
      for (let col = 0; col < maxCols; col++) {
        rowColors.push(getRandomGreenShade());
      }
      tempGrid.push(rowColors);
    }
    setColorGrid(tempGrid);
  }, []);

  // Generate layout on load and resize
  useEffect(() => {
    if (colorGrid.length === 0) return;

    const generateGrid = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth * multiplier;
      const height = container.offsetHeight;
      const squareSize = Math.floor(height / rowCount);
      const totalSize = squareSize + gap;

      const cols = Math.ceil(width / totalSize);
      const rows = rowCount;

      const squares = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          squares.push(
            <div
              key={`${col}-${row}`}
              className={`absolute ${colorGrid[row]?.[col] ?? "bg-green-500"}`}
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
    };

    generateGrid();
    window.addEventListener("resize", generateGrid);
    return () => window.removeEventListener("resize", generateGrid);
  }, [colorGrid]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full opacity-50">
      <div
        className="absolute bg-transparent"
        style={{
          display: "inline-block",
          width: "500%",
          animation: "scrollLeft 50s linear infinite",
        }}
      >
        <div className="relative h-full">{gridContent}</div>
      </div>
    </div>
  );
}
