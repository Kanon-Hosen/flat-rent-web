import { useState } from "react";
const PropertyButtons = () => {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <div className="flex flex-row flex-nowrap gap-6 md:gap-10  overflow-hidden mt-7 mb-10 ">
      {/* Buy Button */}
      <div className="flex flex-col gap-3 relative group min-w-[120px]">
        <button
          className={`py-3 px-5 rounded-md text-base font-medium transition-all duration-300 ease-in-out flex items-center justify-center gap-2 min-w-[120px] relative overflow-hidden bg-primary text-white shadow-sm hover:-translate-y-1 hover:shadow-md active:translate-y-0.5 active:shadow-sm ${
            activeButton === "buy" ? "transform -translate-y-1 scale-105 shadow-lg" : ""
          }`}
          onClick={() => setActiveButton(activeButton === "buy" ? null : "buy")}
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
            Buy
          </span>
          <span className="relative z-10 text-sm opacity-0 w-0 -translate-x-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:w-auto group-hover:translate-x-0">
            🏠
          </span>
        </button>
        <div
          className={`relative mt-2 opacity-0 translate-y-2.5 transition-all duration-300 ${
            activeButton === "buy" ? "opacity-100 translate-y-0" : ""
          } group-hover:opacity-100 group-hover:translate-y-0`}
        >
          <div className="absolute left-1/2 -top-2 w-4 h-4 bg-pink-100 transform -translate-x-1/2 rotate-45 z-[1]"></div>
          <div className="text-gray-700 text-xs sm:text-sm p-3 rounded-md shadow-sm relative z-10 bg-pink-100 max-w-[250px] transition-all duration-300 hover:translate-y-0.5 hover:shadow-md">
            <span className="font-medium text-primary">Buy your next home.</span> Find the
            perfect property that fits your needs.
          </div>
        </div>
      </div>
      {/* Sell Button */}
      <div className="flex flex-col gap-3 relative group min-w-[120px]">
        <button
          className={`py-3 px-5 rounded-md text-base font-medium transition-all duration-300 ease-in-out flex items-center justify-center gap-2 min-w-[120px] relative overflow-hidden bg-white border border-black text-pink-black shadow-sm hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md active:translate-y-0.5 active:shadow-sm ${
            activeButton === "sell" ? "transform -translate-y-1 scale-105 shadow-lg" : ""
          }`}
          onClick={() => setActiveButton(activeButton === "sell" ? null : "sell")}
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
            Sell
          </span>
          <span className="relative z-10 text-sm opacity-0 w-0 -translate-x-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:w-auto group-hover:translate-x-0">
            💰
          </span>
        </button>
        <div
          className={`relative mt-2 opacity-0 translate-y-2.5 transition-all duration-300 ${
            activeButton === "sell" ? "opacity-100 translate-y-0" : ""
          } group-hover:opacity-100 group-hover:translate-y-0`}
        >
          <div className="absolute left-1/2 -top-2 w-4 h-4 bg-pink-100 transform -translate-x-1/2 rotate-45 z-[1]"></div>
          <div className="text-gray-700 text-xs sm:text-sm p-3 rounded-md shadow-sm relative z-10 bg-pink-100 max-w-[250px] transition-all duration-300 hover:translate-y-0.5 hover:shadow-md">
            <span className="font-medium text-pink-600">
              Become a seller and rent your flat.
            </span>{" "}
            List your property and find tenants quickly.
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyButtons;