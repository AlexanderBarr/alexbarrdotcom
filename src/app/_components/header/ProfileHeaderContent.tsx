// components/ProfileHeaderContent.tsx
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import avatar from "~/assets/avatar.jpg";
import { useTypewriter } from "~/hooks/useTypewriter";

const descriptors = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "React Wizard",
  "Problem Solver",
  "Code Gardener 🌱",
];
export default function ProfileHeaderContent() {
  const typedText = useTypewriter(descriptors);
  return (
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

      {/* <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
        I`&apos;`m a{" "}
        <span className="animate-fade-in text-green-900 transition-opacity duration-300">
          {typedText}
        </span>
        <span className="animate-pulse">|</span>
      </h1> */}
      <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
        {"Turning Ideas into Interactive Experiences."}
      </h1>
    </div>
  );
}
