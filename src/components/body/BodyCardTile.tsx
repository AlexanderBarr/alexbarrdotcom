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
import { ArrowUpRight } from "lucide-react";

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
          "group relative cursor-pointer overflow-hidden border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
          featured ? "aspect-[21/9]" : "aspect-[16/10]",
        )}
        onClick={() => setIsOpen(true)}
      >
        {/* Project Image */}
        <div className="absolute inset-0 bg-black/20">
          <Image
            src={`/images${project.image}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.02]"
          />
        </div>

        {/* Overlay Gradient */}
        <div className="from-background/90 via-background/30 absolute inset-0 bg-gradient-to-t to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          {/* Tech Badges */}
          <div className="mb-3 flex translate-y-4 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {displayTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-background/50 backdrop-blur-sm"
              >
                {techIcons[tech]?.name ?? tech}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="relative w-full">
              <span
                className={cn(
                  "text-foreground group-hover:text-primary inline-block leading-tight font-bold transition-colors",
                  featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
                )}
              >
                {project.title}
              </span>
            </h3>
            <ArrowUpRight className="h-6 w-6 flex-shrink-0 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
          </div>

          {/* Description Preview */}
          {featured && (
            <p className="text-muted-foreground group-hover:text-foreground mt-2 line-clamp-2 text-sm transition-opacity duration-300 sm:text-base">
              {project.description}
            </p>
          )}

          {/* Interaction Hint */}
          <div className="bg-background/50 absolute top-4 right-4 rounded-full p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <span className="text-xs font-medium">Click to View</span>
          </div>
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
