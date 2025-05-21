"use client";
import { Card } from "~/components/ui/card";
import { Dialog } from "~/components/ui/dialog";
import { useState } from "react";
import DialogBodyContent from "~/components/body/DialogBodyContent";
import type { Project } from "~/types/project";

interface BodyCardTileProps {
  project: Project;
}

const BodyCardTile = ({ project }: BodyCardTileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-none border-none shadow-md transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url(/images${project.image})`,
            backgroundSize: "cover",
            backfaceVisibility: "hidden",
            opacity: 0.8,
          }}
        />
        <div className="from-background/80 absolute bottom-0 z-10 w-full bg-gradient-to-t to-transparent p-4">
          <h3 className="text-foreground relative w-full text-3xl leading-tight font-bold">
            <span className="after:bg-primary relative inline-block w-fit after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
              {project.title}
            </span>
          </h3>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogBodyContent
          title={project.title}
          imageSrc={project.image}
          description={project.description}
          startDate={project.startDate}
          endDate={project.endDate}
          githubUrl={project.githubUrl}
          projectUrl={project.projectUrl}
          technologiesUsed={project.technologiesUsed || []}
        />
      </Dialog>
    </>
  );
};

export default BodyCardTile;
