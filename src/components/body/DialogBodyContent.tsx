import {
  DialogContent,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { GithubIcon, ExternalLink, X } from "lucide-react";
import Image from "next/image";
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
        <div className="h-8 w-8 sm:h-10 sm:w-10">
          {typeof tech.icon === "string" ? (
            <Image
              src={tech.icon}
              alt={tech.name}
              className="h-full w-full"
              width={40}
              height={40}
            />
          ) : (
            <></>
          )}
        </div>
        <span className="text-muted-foreground text-xs">{tech.name}</span>
      </div>
    );
  };

  return (
    <DialogContent className="bg-background fixed top-[50%] left-[50%] w-[95vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg border p-0 shadow-lg sm:w-[85vw] sm:max-w-[700px]">
      {/* Header Section */}
      <div className="relative h-[30vh] min-h-[200px] w-full overflow-hidden rounded-t-lg sm:h-[35vh]">
        <Image
          src={`/images${imageSrc}`}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="from-background via-background/40 absolute inset-0 bg-gradient-to-t to-transparent" />

        <DialogClose className="bg-background/80 absolute top-4 right-4 z-10 rounded-full p-2 opacity-70 backdrop-blur-sm transition-opacity hover:opacity-100">
          <X className="h-4 w-4" />
        </DialogClose>

        <div className="text-foreground absolute bottom-0 w-full p-6">
          <DialogTitle className="text-xl leading-tight font-bold sm:text-2xl">
            {title}
          </DialogTitle>
          <p className="text-muted-foreground mt-1.5 text-sm">
            {formatDate(startDate)} - {formatDate(endDate)}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="space-y-4">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-2 border-none"
            >
              <AccordionItem
                value="description"
                className="border-border overflow-hidden rounded-md border"
              >
                <AccordionTrigger className="hover:bg-accent/50 px-4 py-3 text-left font-medium transition-colors duration-200">
                  Project Description
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </AccordionContent>
              </AccordionItem>

              {technologiesUsed && technologiesUsed.length > 0 && (
                <AccordionItem
                  value="technologies"
                  className="border-border overflow-hidden rounded-md border"
                >
                  <AccordionTrigger className="hover:bg-accent/50 px-4 py-3 text-left font-medium transition-colors duration-200">
                    Technologies Used
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2 pb-4">
                    <div className="flex flex-wrap gap-4">
                      {technologiesUsed.map((tech, index) => (
                        <div key={index}>{renderTechIcon(tech)}</div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      {(githubUrl ?? projectUrl) && (
        <div className="flex flex-col gap-2 p-6 sm:flex-row">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2 sm:w-auto"
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
              className="w-full gap-2 sm:w-auto"
              onClick={() => window.open(projectUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
              View Project
            </Button>
          )}
        </div>
      )}
    </DialogContent>
  );
};

export default DialogBodyContent;
