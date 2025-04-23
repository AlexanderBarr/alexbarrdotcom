// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

const navItems = [
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm">
      <Link href="/" className="text-xl font-bold tracking-tight">
        alexbarr
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden gap-4 md:flex">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-green-700",
              pathname === href ? "text-green-700" : "text-gray-700",
            )}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-4">
          <DialogTitle>menu</DialogTitle>
          <div className="mt-6 flex flex-col gap-3">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-lg font-semibold hover:text-green-700",
                  pathname === href ? "text-green-700" : "text-gray-800",
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
