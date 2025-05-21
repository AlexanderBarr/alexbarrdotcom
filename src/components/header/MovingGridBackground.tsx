"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

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

// Debounce function
function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function MovingGridBackground() {
  const rowCount = 8;
  const gap = 6;
  const multiplier = 2;
  const maxCols = 100;
  const MIN_SQUARE_SIZE = 16;
  const COPIES = 3; // Number of copies to ensure continuous content

  const containerRef = useRef<HTMLDivElement>(null);
  const [colorGrid, setColorGrid] = useState<string[][]>([]);
  const [gridContent, setGridContent] = useState<React.ReactNode>(null);
  const [gridDimensions, setGridDimensions] = useState({ width: 0, height: 0 });
  const previousContentRef = useRef<React.ReactNode>(null);

  // Generate color grid once and store it
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

  // Memoize grid generation function
  const generateGrid = useCallback(() => {
    const container = containerRef.current;
    if (!container || colorGrid.length === 0) return;

    const containerWidth = Math.max(container.offsetWidth, 320);
    const containerHeight = container.offsetHeight;

    const calculatedSquareSize = Math.floor(
      (containerHeight - gap * (rowCount + 1)) / rowCount,
    );
    const squareSize = Math.max(calculatedSquareSize, MIN_SQUARE_SIZE);
    const totalSize = squareSize + gap;

    const colsNeeded = Math.min(
      Math.max(2, Math.ceil((containerWidth * multiplier) / totalSize)),
      maxCols,
    );

    const gridWidth = Math.max(containerWidth, colsNeeded * totalSize);
    setGridDimensions({ width: gridWidth, height: containerHeight });

    const squares: React.ReactNode[] = [];
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colsNeeded; col++) {
        squares.push(
          <div
            key={`${col}-${row}`}
            className={`absolute ${colorGrid[row]?.[col] ?? "bg-green-500"}`}
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              left: `${gap + col * totalSize}px`,
              top: `${gap + row * totalSize}px`,
              borderRadius: "7px",
              minWidth: `${MIN_SQUARE_SIZE}px`,
              minHeight: `${MIN_SQUARE_SIZE}px`,
              transform: "translateZ(0)",
            }}
          />,
        );
      }
    }

    previousContentRef.current = gridContent;
    setGridContent(squares);
  }, [colorGrid, gridContent]);

  useEffect(() => {
    const debouncedGenerateGrid = debounce(generateGrid, 100);

    const handleResize = () => {
      generateGrid();
      debouncedGenerateGrid();
    };

    generateGrid();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [generateGrid]);

  const currentContent = gridContent ?? previousContentRef.current;

  // Create array of copies for continuous scrolling
  const copies = Array(COPIES).fill(null);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full overflow-hidden opacity-50"
      style={{ minWidth: "320px", minHeight: "200px" }}
    >
      <div className="animate-scroll whitespace-nowrap">
        {copies.map((_, index) => (
          <div
            key={index}
            className="relative inline-block shrink-0"
            style={{
              width: `${gridDimensions.width}px`,
              height: `${gridDimensions.height}px`,
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          >
            {currentContent}
          </div>
        ))}
      </div>
    </div>
  );
}
