import React from "react";
import { Building2, KeyRound } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-background">
      {/* Main loading container */}
      <div className="flex flex-col items-center gap-6">
        {/* Animated building and key */}
        <div className="relative">
          <div className="relative h-20 w-20">
            <Building2 className="h-20 w-20 animate-bounce text-primary" />
            <div className="absolute inset-0 animate-pulse">
              <div className="h-full w-full rounded-full bg-primary/20" />
            </div>
          </div>
          <div className="absolute -right-6 -top-6">
            <KeyRound className="h-10 w-10 animate-spin text-primary" />
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">Loading...</h1>
          <p className="text-muted-foreground">Finding your perfect home</p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-3 w-3 animate-bounce rounded-full bg-primary"
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
      </div>
    </div>
  );
}
