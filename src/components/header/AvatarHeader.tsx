import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import avatar from "~/assets/avatar.jpg";

const AvatarHeader: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="mx-auto -mt-16 flex justify-center md:-mt-20 lg:-mt-24">
        <Avatar className="border-background bg-background h-32 w-32 border-4 shadow-xl md:h-48 md:w-48 lg:h-56 lg:w-56">
          <AvatarImage
            src={avatar.src}
            alt="Avatar"
            className="h-full w-full rounded-full object-cover"
          />
          <AvatarFallback className="text-muted-foreground text-lg font-semibold md:text-xl">
            AB
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default AvatarHeader;
