"use client";

import { useEffect, useState } from "react";
import MovingGridBackground from "./header/MovingGridBackground";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const targetDate = new Date("2025-06-01T12:00:00Z");

function getTimeLeft() {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function UpdatingNotice() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden text-white">
      <MovingGridBackground />
      <div className="z-10 w-full max-w-xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-black/50 p-8 text-center shadow-2xl backdrop-blur-md sm:p-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            🚧 Site Offline 🚧
          </h1>
          <p className="mb-6 text-base text-gray-200 sm:text-lg">
            Currently updating my old design to better showcase my expertise.
            Hang tight — I’ll be back soon!
          </p>

          {/* Countdown */}
          <div className="mb-6 flex justify-center gap-4 text-center">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="flex w-16 flex-col">
                <span className="text-3xl font-bold">
                  {timeLeft[unit as keyof typeof timeLeft]
                    .toString()
                    .padStart(2, "0")}
                </span>
                <span className="text-xs text-gray-400 uppercase">{unit}</span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6 text-white">
            <a
              href="https://www.linkedin.com/in/alex-b-950725113/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-green-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/AlexanderBarr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-green-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="mailto:business@alexbarr.com.au"
              className="transition hover:text-green-400"
              aria-label="Email"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
