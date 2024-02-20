import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data";
import TitleSection from "../components/TitleSection";

const titleData = {
  name: 'Supermercados y negocios',
  description: 'En esta sección encontrarás información sobre los supermercados o negocios de la comuna de Cauquenes.'
}

export default function markets() {
  const marketsData = placesData.filter(
    (place) => place.Category === "Supermercado" || place.Category === "Negocios" && place.Address !== null
  );
  return (
    <>
      <TitleSection data={titleData} />  

      <div className="grid grid-cols-5 gap-4 gap-y-8">
        {marketsData.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    </>
  );
}
