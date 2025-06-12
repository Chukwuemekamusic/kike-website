// app/components/navbar.tsx
"use client"; // This component uses client-side hooks

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react"; // For the hamburger icon

// You might need to install lucide-react if you haven't:
// npm install lucide-react

const navLinks = [
  { href: "#home", label: "Home" }, // Home will likely be the hero section
  { href: "#book", label: "Book" },
  { href: "#encouragements", label: "Encouragements" },
  { href: "#about", label: "About" },
  { href: "#youtube", label: "YouTube" },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-kikelomo-purple-dark/90 p-2 text-kikelomo-text-light shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Name/Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold text-kikelomo-gold-primary hover:text-kikelomo-gold-accent transition-colors"
        >
          Kikelomo Balogun
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium hover:text-kikelomo-gold-primary transition-colors py-2 px-3 rounded-md hover:bg-kikelomo-purple-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-kikelomo-text-light hover:bg-kikelomo-purple-medium hover:text-kikelomo-gold-primary"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-kikelomo-purple-dark text-kikelomo-text-light border-kikelomo-gold-primary"
            >
              <div className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xl font-semibold hover:text-kikelomo-gold-primary transition-colors py-3 px-4 rounded-md hover:bg-kikelomo-purple-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
