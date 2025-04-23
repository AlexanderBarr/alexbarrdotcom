"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import avatar from "~/assets/avatar.jpg";

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

export default function AnimatedHeader() {
  const rowCount = 7;
  const gap = 4;
  const speed = 0.7;

  const containerRef = useRef<HTMLDivElement>(null);
  const [squares, setSquares] = useState<Square[]>([]);
  const squaresRef = useRef<Square[]>([]);
  const animationRef = useRef<number | null>(null);
  const startedRef = useRef(false); // ensures one animation loop

  // === Setup Grid on Mount/Resize ===
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

  // === Animation Loop (runs only once) ===
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
      setSquares(updatedSquares); // one update per frame

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []); // ✅ no dependencies to re-trigger it

  return (
    <header className="relative h-128 w-full overflow-hidden bg-green-50 md:h-80 lg:h-96">
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

      <div className="relative z-10 flex h-full items-center justify-center space-x-6">
        <Avatar className="relative flex h-52 w-52 items-center justify-center">
          <AvatarImage
            src={avatar.src}
            alt="Avatar"
            className="h-32 w-32 rounded-full border-4 border-green-900 object-cover shadow-lg md:h-40 md:w-40 lg:h-48 lg:w-48"
          />
          <AvatarFallback className="text-xl font-semibold text-gray-500 md:text-2xl">
            CN
          </AvatarFallback>
        </Avatar>

        <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
          {"I'm a Full Stack Developer"}
        </h1>
      </div>
    </header>
  );
}
