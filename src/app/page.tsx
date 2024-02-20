import Image from "next/image";
import TitleSection from "./components/TitleSection";
import { placesData } from "@/app/data/data";
import PlaceCard from "./components/PlaceCard";
import SearchBar from "./components/SearchBar";

const titleData = {
  name: "Inicio",
  description:
    "En esta sección encontrarás información sobre todos los servicios de la comuna de Cauquenes.",
};

export default function Home() {
  const allPlaces = placesData;
  return (
    <>
      <TitleSection data={titleData} />
      <SearchBar places={allPlaces}/>
      
    </>
  );
}
