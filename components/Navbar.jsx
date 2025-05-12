"use client";

import * as React from "react";
import Link from "next/link";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building2, Search, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Home, Building2, Search, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const mainNavItems = [
  {
    title: "Browse Properties",
    href: "/rent",
    description: "Find your perfect rental property",
  },
  {
    title: "About",
    href: "/About",
    description: "Explore properties for sale",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "List your property for sale",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    description: "List your property for sale",
  },
];

const dashboardItems = [
  {
    title: "My Properties",
    href: "/dashboard/properties",
    description: "Manage your listed properties",
  },
  {
    title: "Favorites",
    href: "/dashboard/favorites",
    description: "View your saved properties",
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    description: "Check your messages",
  },
];
const mainNavItems = [
  {
    title: "Browse Properties",
    href: "/rent",
    description: "Find your perfect rental property",
  },
  {
    title: "About",
    href: "/About",
    description: "Explore properties for sale",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "List your property for sale",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    description: "List your property for sale",
  },
];

const dashboardItems = [
  {
    title: "My Properties",
    href: "/dashboard/properties",
    description: "Manage your listed properties",
  },
  {
    title: "Favorites",
    href: "/dashboard/favorites",
    description: "View your saved properties",
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    description: "Check your messages",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky px-6 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
    <header className="sticky px-6 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className=" font-bold sm:inline-block">Tenord</span>
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className=" font-bold sm:inline-block">Tenord</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Browse Properties</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Building2 className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Find Your Dream Home
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Browse through thousands of rental properties
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none">
                            Apartments
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Modern apartments in prime locations
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href=""
                        >
                          <div className="text-sm font-medium leading-none">
                            Houses
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Spacious houses for families
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>{" "}
              <NavigationMenuItem>
                <Link
                  href="/dashboard"
                  className={navigationMenuTriggerStyle()}
                >
                  Dashboard
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Browse Properties</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Building2 className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Find Your Dream Home
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Browse through thousands of rental properties
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none">
                            Apartments
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Modern apartments in prime locations
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href=""
                        >
                          <div className="text-sm font-medium leading-none">
                            Houses
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Spacious houses for families
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>{" "}
              <NavigationMenuItem>
                <Link
                  href="/dashboard"
                  className={navigationMenuTriggerStyle()}
                >
                  Dashboard
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          <div className="hidden md:flex md:gap-2">
            <Link href="/login">
              <Button variant="outline" className="cursor-pointer" size="lg">
                Sign In
              </Button>
            </Link>

            <Link href="/signup">
              <Button size="lg" className="cursor-pointer">
                {" "}
                Sign Up{" "}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Tenord</SheetTitle>
                <SheetDescription>
                  Rent Homes, Apartments, and more
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href &&
                        "bg-accent text-accent-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Home className="h-4 w-4" />
                    {item.title}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  <Button className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Tenord</SheetTitle>
                <SheetDescription>
                  Rent Homes, Apartments, and more
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href &&
                        "bg-accent text-accent-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Home className="h-4 w-4" />
                    {item.title}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  <Button className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
   
  );
}
