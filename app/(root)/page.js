import React from "react";
import Hero from "@/components/Hero";
import HeroSection2 from "@/components/Hero2";
import PropertyCardV2 from "@/components/PropertyCard";
import CardsLayout from "@/components/cards-layout";



export default async function Home() {
  return <div>
    <Hero/>
    <HeroSection2/>




    <CardsLayout/>




              {/* <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Property Listings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PropertyCardV2
          imageUrl="/flat 4.jpeg"
          price="2,095"
          name="goriber bari 1"
          address="borolok 1 er barir pase"
          beds={3}
          baths={2}
          area="5x7"
          isPopular={true}
        />

        <PropertyCard
          imageUrl="/flat 3.jpeg"
          price="1,850"
          name="goriber bari 2"
          address="borolok 2 er barir pase"
          beds={2}
          baths={2}
          area="6x7"
        />

        <PropertyCard
          imageUrl="/flat 2.jpeg"
          price="2,700"
          name="goriber bari 3"
          address="borolok 3 er barir pase"
          beds={4}
          baths={3}
          area="8x10"
          isFavorite={true}
        />
      </div>
    </main> */}













    </div>;
}