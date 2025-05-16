import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const BUTTONS = [
  {
    key: "buy",
    label: "Find a Home",
    icon: "🏠",
    tooltipTitle: "Find your next home.",
    tooltipDesc: "Discover the perfect property for you and your family.",
    variant: "default",
  },
  {
    key: "sell",
    label: "List Your Property",
    icon: "💰",
    tooltipTitle: "List your property for rent or sale.",
    tooltipDesc: "Reach thousands of potential buyers and tenants quickly.",
    variant: "outline",
  },
];

export default function PropertyButtons() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8 w-full  mt-7 md:mb-10">
      {BUTTONS.map((btn) => (
        <div
          key={btn.key}
          className="group  w-full md:w-auto md:min-w-[160px] md:flex flex-col"
        >
          <Button
            type="button"
            aria-label={btn.label}
            variant={btn.variant}
            size="xl"
            className="w-full shadow-lg cursor-pointer md:w-auto flex items-center justify-center gap-3 rounded-full text-lg font-semibold px-7 py-3 transition-transform duration-300 ease-in-out will-change-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 focus:scale-105 focus:shadow-2xl focus:-translate-y-1"
          >
            <Link href="/signup" className="w-full flex items-center gap-2 justify-center">
              <span className="text-xl " aria-hidden="true">
                {btn.icon}
              </span>
              <span>{btn.label}</span>
            </Link>
          </Button>
          {/* Tooltip: show on hover/focus only */}
          <div className=" hidden  mt-2  translate-y-2.5 transition-all duration-300 z-20 md:group-hover:absolute md:group-hover:flex -bottom-7 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
            <Card className="bg-pink-100 border border-primary/10 shadow-lg rounded-xl max-w-[260px] min-w-[180px] mx-auto">
              <CardContent className="p-4 text-sm sm:text-md text-gray-700">
                <span className="font-semibold text-primary block mb-1">
                  {btn.tooltipTitle}
                </span>
                {btn.tooltipDesc}
              </CardContent>
            </Card>
            <div className="absolute left-1/2 -top-2 w-4 h-4 bg-pink-100 border border-primary/10 transform -translate-x-1/2 rotate-45 z-[1]" />
          </div>
        </div>
      ))}
    </div>
  );
}
