"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
// import { ThemeToggle } from "~/components/theme-toggle";
// import ScreenSizeDebugger from "../SiteMaintance/ScreenSizeDebugger";
import { useEffect, useRef, useState } from "react";
import { ContactDialog } from "~/components/contact/ContactDialog";

const navItems = [
  { label: "projects", href: "projects" },
  { label: "about", href: "about" },
  { label: "contact", href: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const projectsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    if (href === "projects") {
      handleProjectsClick();
    } else if (href === "about") {
      handleAboutClick();
    } else if (href === "contact") {
      setIsContactDialogOpen(true);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur-sm transition-all duration-200",
          scrolled
            ? "border-border/40 bg-background/80 shadow-sm"
            : "bg-background/0 border-transparent",
        )}
      >
        <div className="flex h-16 max-w-screen items-center justify-center sm:px-6">
          {/* <Link
            href="/"
            className="text-foreground hover:text-foreground/80 text-xl font-bold tracking-tight transition-colors"
          >
            alexbarr
          </Link> */}

          {/* Centered ScreenSizeDebugger within the navbar */}
          {/* <div className="items-start justify-center md:flex md:flex-1">
            <ScreenSizeDebugger />
          </div> */}

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                className={cn(
                  "hover:text-primary text-sm font-medium transition-colors",
                  pathname === href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {label}
              </Link>
            ))}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            {/* <ThemeToggle /> */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-border/40 bg-background/95 w-[80vw] p-6 backdrop-blur-sm"
              >
                <DialogTitle className="text-foreground text-lg font-semibold">
                  Menu
                </DialogTitle>
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map(({ label, href }) => (
                    <Link
                      key={href}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(href);
                      }}
                      className={cn(
                        "hover:text-primary text-lg font-medium transition-colors",
                        pathname === href
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Contact Dialog */}
      <ContactDialog
        isOpen={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
    </>
  );
}
