import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";

export default function parks() {
  const parksData = placesData.filter((place) => place.Category === "Parques" && place.Address !== null );
  
  return (
    <>
      <h1 className="text-white text-2xl font-bold mb-4">Parques</h1>
      <p className="text-white mb-4">
        En esta sección encontrarás información sobre los parques de la comuna
        de Cauquenes.
      </p>
      <div className="flex">
        {parksData.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    </>
  );
}
