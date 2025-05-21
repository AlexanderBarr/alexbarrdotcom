import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "~/lib/utils";

interface DialogBodyContentProps {
  title: string;
  imageSrc: string;
  className?: string;
}

const DialogBodyContent = ({
  title,
  imageSrc,
  className,
}: DialogBodyContentProps) => {
  return (
    <DialogContent className={cn("sm:max-w-[425px]", className)}>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogHeader>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            opacity: 0.6,
          }}
        />
      </div>
      <div className="mt-4">
        <p className="text-lg">
          Additional information about {title} can go here.
        </p>
      </div>
    </DialogContent>
  );
};

export default DialogBodyContent;
