import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { GithubIcon, ExternalLink, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { techIcons } from "~/config/tech-icons";

export interface DialogBodyContentProps {
  title: string;
  imageSrc: string;
  description: string;
  startDate: string;
  endDate: string;
  githubUrl?: string;
  projectUrl?: string;
  technologiesUsed: string[];
}

const DialogBodyContent = ({
  title,
  imageSrc,
  description,
  startDate,
  endDate,
  githubUrl,
  projectUrl,
  technologiesUsed,
}: DialogBodyContentProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const renderTechIcon = (techName: string) => {
    const tech = techIcons[techName];
    if (!tech) return null;

    return (
      <div className="flex flex-col items-center gap-1">
        <div className="h-10 w-10">
          {typeof tech.icon === "string" ? (
            <img src={tech.icon} alt={tech.name} className="h-full w-full" />
          ) : (
            <tech.icon className="h-full w-full" />
          )}
        </div>
        <span className="text-xs text-gray-600">{tech.name}</span>
      </div>
    );
  };

  return (
    <DialogContent className={cn("sm:max-w-[625px]")}>
      <DialogHeader>
        <DialogClose className="data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 opacity-50 transition-opacity hover:opacity-100 disabled:pointer-events-none">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            {formatDate(startDate)} - {formatDate(endDate)}
          </p>
        </div>
      </DialogHeader>
      <div className="mt-4">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={`/images${imageSrc}`}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        {technologiesUsed && technologiesUsed.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4 border-b border-gray-200 pb-4">
            {technologiesUsed.map((tech, index) => (
              <div key={index}>{renderTechIcon(tech)}</div>
            ))}
          </div>
        )}
        <div className="mt-4 space-y-4">
          <p className="text-sm leading-6">{description}</p>
          <div className="flex gap-2 pt-2">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <GithubIcon className="h-4 w-4" />
                View on GitHub
              </Button>
            )}
            {projectUrl && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(projectUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </Button>
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default DialogBodyContent;
