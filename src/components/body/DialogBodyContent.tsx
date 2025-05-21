import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { GithubIcon, ExternalLink, X } from "lucide-react";
import { cn } from "~/lib/utils";

export interface DialogBodyContentProps {
  title: string;
  imageSrc: string;
  description: string;
  startDate: string;
  endDate: string;
  githubUrl?: string;
  projectUrl?: string;
}

const DialogBodyContent = ({
  title,
  imageSrc,
  description,
  startDate,
  endDate,
  githubUrl,
  projectUrl,
}: DialogBodyContentProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
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
