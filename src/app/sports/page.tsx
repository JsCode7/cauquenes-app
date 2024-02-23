import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";
import PlaceList from "../components/PlacesList";

const titleData = {
  name: "Deportes",
  description:
    "En esta sección encontrarás información sobre las canchas de la comuna de Cauquenes.",
};

export default function sports() {
  const sportsData = placesData.filter(
    (place) => place.Category === "Cancha" && place.Address !== null
  );

  return (
    <>
      <TitleSection data={titleData} />
      <PlaceList places={sportsData.length > 0 ? sportsData : placesData} />
    </>
  );
}
