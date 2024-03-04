"use client";
import { useState } from "react";
import { placesData } from "@/app/data/data";
import { Place } from "@/app/interfaces/place.interface";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import SectionCards from "./components/SectionCards";


const titleData = {
  name: "Inicio",
  description:
    "En esta sección encontrarás información sobre todos los servicios de la comuna de Cauquenes.",
};

export default function Home() {
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);
  const allPlaces = placesData;
  //const dataCard = getDataCard();

  const handleFilterChange = (filteredPlaces: Place[]) => {
    setFilteredPlaces(filteredPlaces);
  };
  return (
    <div className="pl-10">
      <SearchBar places={allPlaces} onFilterChange={handleFilterChange} />
      <HeroSection />
      <SectionCards />
    </div>
  );
}
