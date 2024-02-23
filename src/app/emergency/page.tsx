import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";
import PlaceList from "../components/PlacesList";

const titleData = {
  name: "Emergencias",
  description:
    "En esta sección encontrarás información sobre los servicios de emergencia de la comuna de Cauquenes.",
};

export default function emergency() {
  const emergencyData = placesData.filter(
    (place) => place.Category === "Emergencias" && place.Address !== null
  );
  return (
    <>
      <TitleSection data={titleData} />

      <PlaceList
        places={emergencyData.length > 0 ? emergencyData : placesData}
      />
    </>
  );
}
