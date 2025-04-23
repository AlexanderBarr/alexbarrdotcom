// components/MovingGridBackground.tsx
"use client";
import { useEffect, useRef, useState } from "react";

type Square = {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string | undefined;
};

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
  const speed = 0;

  const containerRef = useRef<HTMLDivElement>(null);
  const [squares, setSquares] = useState<Square[]>([]);
  const squaresRef = useRef<Square[]>([]);
  const animationRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const generateGrid = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const squareSize = Math.floor(height / rowCount);
      const totalSize = squareSize + gap;

      const cols = Math.ceil(width / totalSize) + 10;
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

      squaresRef.current = newSquares;
      setSquares(newSquares);
    };

    generateGrid();
    window.addEventListener("resize", generateGrid);
    return () => window.removeEventListener("resize", generateGrid);
  }, []);

  useEffect(() => {
    if (startedRef.current || squaresRef.current.length === 0) return;
    startedRef.current = true;

    const animate = () => {
      const prevSquares = squaresRef.current;
      const squareSize = prevSquares[0]?.size ?? 0;
      const totalSize = squareSize + gap;

      const rowMap: Record<number, Square[]> = {};
      for (const sq of prevSquares) {
        (rowMap[sq.y] ??= []).push(sq);
      }

      const updatedSquares = prevSquares.map((sq) => {
        let newX = sq.x - speed;
        if (newX < -sq.size) {
          const sameRow = rowMap[sq.y] ?? [];
          const rightmostX = Math.max(...sameRow.map((s) => s.x));
          newX = rightmostX + totalSize;
          return { ...sq, x: newX, color: getRandomGreenShade() };
        }
        return { ...sq, x: newX };
      });

      squaresRef.current = updatedSquares;
      setSquares(updatedSquares);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 opacity-50">
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
  );
}
