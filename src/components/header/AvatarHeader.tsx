import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import avatar from "~/assets/avatar.jpg";

const AvatarHeader: React.FC = () => {
  return (
    <div className="mx-auto -mt-24 flex justify-center md:-mt-32 lg:-mt-36 xl:-mt-40">
      <Avatar className="border-background bg-background h-48 w-48 shadow-xl md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-84 xl:w-84">
        <AvatarImage
          src={avatar.src}
          alt="Avatar"
          className="h-full w-full rounded-full object-cover"
        />
        <AvatarFallback className="text-muted-foreground text-xl font-semibold md:text-2xl">
          AB
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarHeader;
