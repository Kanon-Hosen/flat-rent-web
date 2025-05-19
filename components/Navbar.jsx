"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
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
import {
  Menu,
  Building2,
  Search,
  User,
  LogOut,
  Home,
  Info,
  MessageSquare,
  Heart,
  KeyRound,
  Phone,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useAuth from "@/lib/hooks/UserAuth";
import { ScrollArea } from "@/components/ui/scroll-area";

const mainNavItems = [
  {
    title: "Browse Properties",
    href: "/rent",
    description: "Find your perfect rental property",
  },
  {
    title: "About",
    href: "/about",
    description: "Learn more about us",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us",
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
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoading, refetch } = useAuth();

  useEffect(() => {
    refetch();
  }, [pathname, refetch]);

  const handleLogout = useCallback(async () => {
    try {
      setIsLoggingOut(true);
      const response = await fetch("/api/v1/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        await refetch();
        router.push("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  }, [refetch, router]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/rent?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const renderAuthButtons = () => {
    if (isLoading) {
      return (
        <div className="flex items-center gap-4">
          <div className="h-10 w-20 animate-pulse bg-gray-200 rounded-md" />
          <div className="h-10 w-24 animate-pulse bg-gray-200 rounded-md" />
        </div>
      );
    }

    if (user) {
      return (
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="ghost"
              className="hidden md:flex cursor-pointer hover:bg-primary/10"
            >
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="cursor-pointer hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
          >
            <LogOut className="mr-2 h-4 w-4" />
            {isLoggingOut ? "Signing Out..." : "Sign Out"}
          </Button>
        </div>
      );
    }

    if (!user) {
      return (
        <div className="hidden md:flex md:gap-3">
          <Link href="/login">
            <Button
              variant="outline"
              className="cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary"
              size="lg"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="lg"
              className="cursor-pointer bg-primary hover:bg-primary/90"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      );
    }

    return null;
  };

  const getIconForItem = (title) => {
    switch (title) {
      case "Browse Properties":
        return <KeyRound className="h-5 w-5 shrink-0" />;
      case "About":
        return <Info className="h-5 w-5 shrink-0" />;
      case "Contact":
        return <Phone className="h-5 w-5 shrink-0" />;
      case "My Properties":
        return <Building2 className="h-5 w-5 shrink-0" />;
      case "Favorites":
        return <Heart className="h-5 w-5 shrink-0" />;
      case "Messages":
        return <MessageSquare className="h-5 w-5 shrink-0" />;
      default:
        return <Home className="h-5 w-5 shrink-0" />;
    }
  };

  return (
    <header className="sticky  flex justify-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg sm:inline-block">Tenord</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex hover:bg-primary/10 hover:text-primary"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
          {renderAuthButtons()}

          {/* Search Dialog */}
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Search Properties</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by location, property type..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Search</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-primary/10 hover:text-primary"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="space-y-2">
                <SheetTitle className="text-2xl">Tenord</SheetTitle>
                <SheetDescription className="text-base">
                  Find Your Perfect Home
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search properties..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </div>
              <ScrollArea className="h-[calc(100vh-12rem)] pb-10">
                <div className="flex flex-col gap-4">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary text-left",
                        pathname === item.href && "bg-primary/10 text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {getIconForItem(item.title)}
                      <span className="flex-1">{item.title}</span>
                    </Link>
                  ))}
                  {user && (
                    <>
                      <div className="my-2 h-px bg-border" />
                      {dashboardItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary text-left",
                            pathname === item.href &&
                              "bg-primary/10 text-primary"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {getIconForItem(item.title)}
                          <span className="flex-1">{item.title}</span>
                        </Link>
                      ))}
                    </>
                  )}
                  <div className="my-2 h-px bg-border" />
                  {!user && (
                    <div className="flex flex-col gap-3 px-4">
                      <Link href="/login" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full justify-start gap-3 px-4 py-3 text-base hover:bg-primary/10 hover:text-primary hover:border-primary"
                        >
                          <User className="h-5 w-5 shrink-0" />
                          <span className="flex-1 text-left">Sign In</span>
                        </Button>
                      </Link>
                      <Link href="/signup" className="w-full">
                        <Button className="w-full justify-start gap-3 px-4 py-3 text-base bg-primary hover:bg-primary/90">
                          <User className="h-5 w-5 shrink-0" />
                          <span className="flex-1 text-left">Sign Up</span>
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
