"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Menu, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = {
  main: [
    { name: "Rent", href: "/rent" },
    { name: "Buy", href: "/buy" },
  ],
  dashboard: [
    { name: "Seller Dashboard", href: "/seller" },
    { name: "Buyer Dashboard", href: "/buyer" },
  ],
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleItemClick = async (item) => {
    setActiveItem(item === activeItem ? "" : item);
    setIsMenuOpen(false);

    if (item.includes("Dashboard")) {
      setIsLoading(true);
      // Simulate API call or auth check
      await new Promise((resolve) => setTimeout(resolve, 500));
      alert("Please sign up to access this feature");
      setIsLoading(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full shadow-sm bg-transparent transition-all duration-300 hover:shadow-md">
      <div className=" mx-auto backdrop-blur-lg flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-primary to-[#5a4fd1] text-white transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
            <Home className="h-5 w-5" />
          </div>
          <span className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#1e293b] to-primary bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-[#1e293b]">
            Tenord
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-wrap items-center gap-8">
          {navigationItems.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-2 py-1 text-[#1e293b] transition-all duration-300 hover:text-primary text-sm md:text-base lg:text-lg",
                activeItem === item.name && "text-primary"
              )}
              onClick={() => handleItemClick(item.name)}
            >
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-[#5a4fd1] transition-all duration-300",
                  activeItem === item.name ? "w-full" : "hover:w-full"
                )}
              />
            </Link>
          ))}

          {navigationItems.dashboard.map((item) => (
            <button
              key={item.name}
              className={cn(
                "relative px-2 py-1 text-[#1e293b] transition-all duration-300 hover:text-primary text-sm md:text-base lg:text-lg",
                activeItem === item.name && "text-primary",
                isLoading && "cursor-not-allowed opacity-70"
              )}
              onClick={() => handleItemClick(item.name)}
              disabled={isLoading}
            >
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-[#5a4fd1] transition-all duration-300",
                  activeItem === item.name ? "w-full" : "hover:w-full"
                )}
              />
            </button>
          ))}
        </div>

        {/* Auth Buttons + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="outline">Login</Button>
          <Button variant="default">Sign up</Button>

          {/* Mobile Menu Button */}
          <button
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-md text-[#1e293b] transition-all duration-300 hover:bg-primary hover:text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-72 bg-white p-6 shadow-xl transform transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isMenuOpen}
      >
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-900 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col space-y-6 pt-16">
          {navigationItems.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-lg font-medium text-[#1e293b] transition-all duration-300 hover:text-primary hover:translate-x-2 md:text-xl",
                activeItem === item.name && "text-primary"
              )}
              onClick={() => handleItemClick(item.name)}
            >
              {item.name}
            </Link>
          ))}

          {navigationItems.dashboard.map((item) => (
            <button
              key={item.name}
              className={cn(
                "text-left text-lg font-medium text-[#1e293b] transition-all duration-300 hover:text-primary hover:translate-x-2 md:text-xl",
                activeItem === item.name && "text-primary",
                isLoading && "cursor-not-allowed opacity-70"
              )}
              onClick={() => handleItemClick(item.name)}
              disabled={isLoading}
            >
              {item.name}
              {isLoading && (
                <Loader2 className="ml-2 h-4 w-4 animate-spin inline" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300 lg:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
    </nav>
  );
}
