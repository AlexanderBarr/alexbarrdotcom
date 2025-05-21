"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ThemeToggle } from "~/components/theme-toggle";
import ScreenSizeDebugger from "../SiteMaintance/ScreenSizeDebugger";

const navItems = [
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-border bg-background flex items-center justify-between border-b px-4 py-3 shadow-sm">
      <Link
        href="/"
        className="text-foreground text-xl font-bold tracking-tight"
      >
        alexbarr
      </Link>

      {/* Centered ScreenSizeDebugger within the navbar */}
      <div className="items-start justify-center md:flex md:flex-1">
        <ScreenSizeDebugger />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden items-center gap-4 md:flex">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "hover:text-primary text-sm font-medium transition-colors",
              pathname === href ? "text-primary" : "text-muted-foreground",
            )}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-border bg-background p-4"
          >
            <DialogTitle className="text-foreground">menu</DialogTitle>
            <div className="mt-6 flex flex-col gap-3">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "hover:text-primary text-lg font-semibold transition-colors",
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
    </nav>
  );
}
