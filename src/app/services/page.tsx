import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";

const titleData = {
  name: 'Servicios',
  description: 'En esta sección encontrarás información sobre los servicios de la comuna de Cauquenes.'
}

export default function services() {
  const servicesData = placesData.filter((place) => place.Category === "Servicios" && place.Address !== null );
  
  return (
    <>
    <TitleSection data={titleData} />
  
      <div className="grid grid-cols-5 gap-4 gap-y-8">
        {servicesData.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    </>
  );
}
