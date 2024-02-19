import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";

const titleData = {
  name: 'Emergencias',
  description: 'En esta sección encontrarás información sobre los servicios de emergencia de la comuna de Cauquenes.'
}

export default function emergency() {
    const emergencyData = placesData.filter(
        (place) => place.Category === "Emergencias" && place.Address !== null
      );
    return (
        <>
        <TitleSection data={titleData} />  
        
        <div className="flex">
        {emergencyData.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
        </>
    )
}