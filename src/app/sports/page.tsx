import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";

const titleData = {
  name: 'Deportes',
  description: 'En esta sección encontrarás información sobre las canchas de la comuna de Cauquenes.'
}

export default function sports() {
  const sportsData = placesData.filter((place) => place.Category === "Cancha" && place.Address !== null );
  
  return (
    <>
    <TitleSection data={titleData} />
  
      <div className="grid grid-cols-5 gap-4 gap-y-8">
        {sportsData.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    </>
  );
}
