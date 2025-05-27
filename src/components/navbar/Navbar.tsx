"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { useEffect, useState } from "react";
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
          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-6">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                className={cn(
                  "hover:text-primary text-sm font-medium text-white transition-colors",
                  pathname === href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {label}
              </Link>
            ))}
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
