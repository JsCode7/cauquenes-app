import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data";

export default function markets() {
  const marketsData = placesData.filter(
    (place) => place.Category === "Supermercado" && place.Address !== null
  );
  return (
    <>
      <h1 className="text-white text-2xl font-bold mb-4">
        Supermercados o negocios
      </h1>
      <p className="text-white mb-4">
        En esta sección encontrarás información sobre los supermercados o
        negocios de la comuna de Cauquenes.
      </p>
      <div className="flex">
        {marketsData.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    </>
  );
}
