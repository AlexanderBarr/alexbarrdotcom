import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import avatar from "~/assets/avatar.jpg";

interface Props {}

const AvatarHeader: React.FC<Props> = ({}) => {
  return (
    <div className="absolute bottom-[-7.5rem] left-1/2 -translate-x-1/2 transform md:bottom-[-9rem] lg:bottom-[-10rem] xl:bottom-[-12rem]">
      <Avatar className="h-48 w-48 border-green-700 bg-white shadow-lg md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-84 xl:w-84">
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
  );
};

export default AvatarHeader;
