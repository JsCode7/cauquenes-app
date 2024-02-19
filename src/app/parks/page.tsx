import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";

const titleData = {
  name: 'Parques',
  description: 'En esta sección encontrarás información sobre los parques de la comuna de Cauquenes.'
}

export default function parks() {
  const parksData = placesData.filter((place) => place.Category === "Parques" && place.Address !== null );
  
  return (
    <>
    <TitleSection data={titleData} />
  
      <div className="flex">
        {parksData.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    </>
  );
}
