"use client";
import { useState } from "react";
import TitleSection from "./components/TitleSection";
import { placesData } from "@/app/data/data";
import { Place } from "@/app/interfaces/place.interface";
import SearchBar from "./components/SearchBar";
import PlaceList from "./components/PlacesList";
import SwitchDarkMode from "./components/SwitchDarkMode";
import { getDataCard } from "./utils/orderData";

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
    <>
      <TitleSection data={titleData} />
      <SearchBar places={allPlaces} onFilterChange={handleFilterChange} />
      <PlaceList places={filteredPlaces.length > 0 ? filteredPlaces : allPlaces} />
    </>
  );
}
