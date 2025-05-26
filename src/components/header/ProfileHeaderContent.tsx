"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileHeaderContent() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
      <h1 className="space-y-2 text-center sm:space-y-3">
        <div className="text-foreground text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Alex Barr
        </div>
        <div className="text-xl text-white opacity-80 sm:text-2xl md:text-3xl lg:text-4xl">
          A Full Stack Developer based in Sydney, Australia
        </div>
      </h1>
      <div className="mt-1 flex gap-3 sm:mt-6 md:mt-8">
        <a
          href="https://github.com/AlexanderBarr"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center"
          aria-label="GitHub Profile"
        >
          <div className="bg-background/80 hover:bg-background rounded-full p-2 shadow-md backdrop-blur-sm transition-all duration-200 group-hover:scale-105 md:p-2.5">
            <Github className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/alex-b-950725113/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center"
          aria-label="LinkedIn Profile"
        >
          <div className="bg-background/80 hover:bg-background rounded-full p-2 shadow-md backdrop-blur-sm transition-all duration-200 group-hover:scale-105 md:p-2.5">
            <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:business@alexbarr.com.au"
          className="group flex items-center"
          aria-label="Email Contact"
        >
          <div className="bg-background/80 hover:bg-background rounded-full p-2 shadow-md backdrop-blur-sm transition-all duration-200 group-hover:scale-105 md:p-2.5">
            <Mail className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  );
}
