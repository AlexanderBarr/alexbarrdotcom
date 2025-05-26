"use client";
import { Card } from "~/components/ui/card";
import { Dialog } from "~/components/ui/dialog";
import { useState } from "react";
import DialogBodyContent from "~/components/body/DialogBodyContent";
import type { Project } from "~/types/project";
import { Badge } from "~/components/ui/badge";
import { techIcons } from "~/config/tech-icons";
import Image from "next/image";
import { cn } from "~/lib/utils";

interface BodyCardTileProps {
  project: Project;
  featured?: boolean;
}

const BodyCardTile = ({ project, featured = false }: BodyCardTileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Display at most 3 tech badges
  const displayTechnologies = project.technologiesUsed?.slice(0, 3) || [];

  return (
    <>
      <Card
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-lg border-0 shadow-md",
          featured ? "aspect-[21/9]" : "aspect-[16/10]",
        )}
        onClick={() => setIsOpen(true)}
      >
        {/* Project Image */}
        <div className="absolute inset-0">
          <Image
            src={`/images${project.image}`}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700 will-change-transform",
              featured
                ? "scale-[1.01] group-hover:scale-[1.03]"
                : "group-hover:scale-[1.02]",
              "overflow-hidden rounded-lg",
            )}
          />
        </div>

        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0",
            featured
              ? "bg-black/40 transition-colors duration-300 group-hover:bg-black/60"
              : "bg-black/40 transition-colors duration-300 group-hover:bg-black/60",
          )}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 will-change-transform" />
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          {/* Mobile-only tech badges */}
          <div className="mb-3 flex flex-wrap gap-2 sm:hidden">
            {displayTechnologies.map((tech) => {
              const techIcon = techIcons[tech];
              if (!techIcon) return null;

              return (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="relative isolate flex items-center overflow-hidden rounded-none p-1"
                >
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 ring-1 ring-white/10" />
                  {/* Container to properly scale and contain the icon */}
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <div className="relative flex h-4 w-4 items-center justify-center">
                      <Image
                        src={techIcon.icon}
                        alt={techIcon.name}
                        width={20}
                        height={20}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </Badge>
              );
            })}
          </div>

          {/* Desktop-only tech badges */}
          <div className="mb-3 hidden translate-y-4 flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
            {displayTechnologies.map((tech) => {
              const techIcon = techIcons[tech];
              if (!techIcon) return null;

              return (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="relative isolate flex items-center gap-2 overflow-hidden rounded-sm px-3 py-1 text-sm"
                >
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 ring-1 ring-white/10" />
                  <div className="relative flex items-center gap-2">
                    <Image
                      src={techIcon.icon}
                      alt={techIcon.name}
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                    <span className="text-foreground">{techIcon.name}</span>
                  </div>
                </Badge>
              );
            })}
          </div>

          {/* Title */}
          <h3 className="relative">
            <span
              className={cn(
                "inline-block leading-tight font-bold",
                "text-white transition-colors",
                featured
                  ? "text-xl sm:text-3xl"
                  : "sm:group-hover:text-primary text-xl sm:text-2xl",
              )}
            >
              {project.title}
            </span>
          </h3>

          {/* Description - Featured projects only */}
          {featured && (
            <p className="mt-2 line-clamp-2 rounded-md py-1 text-base text-white">
              {project.description}
            </p>
          )}
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
