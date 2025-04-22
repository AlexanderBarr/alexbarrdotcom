"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Square = {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string | undefined;
};

export default function AnimatedHeader() {
  // === Editable Settings ===
  const rowCount = 7;
  const gap = 4;
  const speed = 0.7;
  const greenShades = [
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [squares, setSquares] = useState<Square[]>([]);
  const animationRef = useRef<number | null>(null);

  const getRandomGreenShade = useCallback(
    () => greenShades[Math.floor(Math.random() * greenShades.length)],
    [greenShades],
  );

  // === Setup Grid on Mount/Resize ===
  useEffect(() => {
    const generateGrid = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const squareSize = Math.floor(height / rowCount);
      const totalSize = squareSize + gap;

      const cols = Math.ceil(width / totalSize) + 3;
      const rows = Math.ceil(height / totalSize);

      const newSquares: Square[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          newSquares.push({
            id: `${col}-${row}`,
            x: col * totalSize,
            y: row * totalSize,
            size: squareSize,
            color: getRandomGreenShade(),
          });
        }
      }

      setSquares(newSquares);
    };

    generateGrid();
    window.addEventListener("resize", generateGrid);
    return () => window.removeEventListener("resize", generateGrid);
  }, [getRandomGreenShade]);

  // === Animation Loop ===
  useEffect(() => {
    if (squares.length === 0) return;

    const animate = () => {
      setSquares((prevSquares) => {
        const squareSize = prevSquares[0]?.size ?? 0;
        const totalSize = squareSize + gap;

        // Group squares by row
        const rowMap: Record<number, Square[]> = {};
        for (const sq of prevSquares) {
          (rowMap[sq.y] ??= []).push(sq);
        }

        return prevSquares.map((sq) => {
          let newX = sq.x - speed;

          if (newX < -sq.size) {
            const sameRow = rowMap[sq.y] ?? [];
            const xValues = sameRow.map((s) => s.x);
            const rightmostX = xValues.length > 0 ? Math.max(...xValues) : 0;

            newX = rightmostX + totalSize;

            return {
              ...sq,
              x: newX,
              color: getRandomGreenShade(),
            };
          }

          return { ...sq, x: newX };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [squares, getRandomGreenShade]);

  // === Render ===
  return (
    <header className="relative h-128 w-full overflow-hidden bg-green-50 md:h-80 lg:h-96">
      <div ref={containerRef} className="absolute inset-0">
        {squares.map((sq) => (
          <div
            key={sq.id}
            className={`absolute ${sq.color}`}
            style={{
              width: `${sq.size}px`,
              height: `${sq.size}px`,
              transform: `translate(${sq.x}px, ${sq.y}px)`,
              transition: "none",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
          Your Header Content
        </h1>
      </div>
    </header>
  );
}
