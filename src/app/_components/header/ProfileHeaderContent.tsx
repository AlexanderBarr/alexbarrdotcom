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
      <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 transform md:bottom-[-6rem] lg:bottom-[-9rem]">
        <Avatar className="h-24 w-24 bg-white shadow-lg md:h-40 md:w-40 lg:h-64 lg:w-64">
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
