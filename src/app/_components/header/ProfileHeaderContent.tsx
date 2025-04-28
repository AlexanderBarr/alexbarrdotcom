"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import avatar from "~/assets/avatar.jpg";

export default function ProfileHeaderContent() {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
        Full Stack Developer based in Sydney
      </h1>

      {/* Avatar positioned at the bottom center */}
      <div className="absolute bottom-[-6.5rem] left-1/2 -translate-x-1/2 transform md:bottom-[-8rem] lg:bottom-[-9rem]">
        <Avatar className="h-48 w-48 bg-white shadow-lg md:h-64 md:w-64 lg:h-72 lg:w-72">
          <AvatarImage
            src={avatar.src}
            alt="Avatar"
            className="h-full w-full rounded-full object-cover"
          />
          <AvatarFallback className="text-xl font-semibold text-gray-500 md:text-2xl">
            CN
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
