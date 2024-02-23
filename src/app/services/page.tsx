import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";
import SwitchDarkMode from "@/app/components/SwitchDarkMode";
import PlaceList from "../components/PlacesList";

const titleData = {
  name: "Servicios",
  description:
    "En esta sección encontrarás información sobre los servicios de la comuna de Cauquenes.",
};

export default function services() {
  const servicesData = placesData.filter(
    (place) => place.Category === "Servicios" && place.Address !== null
  );

  return (
    <>
      <TitleSection data={titleData} />

      <PlaceList places={servicesData.length > 0 ? servicesData : placesData} />
    </>
  );
}
