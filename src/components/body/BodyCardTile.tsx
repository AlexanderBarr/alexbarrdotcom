"use client";
import { Card } from "~/components/ui/card";
import growingTeams from "~/assets/ai_growingteams2.png";
import { Dialog } from "~/components/ui/dialog";
import { useState } from "react";
import DialogBodyContent from "~/components/body/DialogBodyContent";

const BodyCardTile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const title = "APPROACH SOLUTIONS";

  return (
    <>
      <Card
        className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-none border-none shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url(${growingTeams.src})`,
            backgroundSize: "cover",
            backfaceVisibility: "hidden",
            opacity: 0.6,
          }}
        />
        <div className="absolute bottom-0 z-10 p-4 text-black">
          <h3 className="relative inline-block text-3xl font-bold after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
            {title}
          </h3>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogBodyContent title={title} imageSrc={growingTeams.src} />
      </Dialog>
    </>
  );
};

export default BodyCardTile;
