import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data";
import TitleSection from "../components/TitleSection";

const titleData = {
  name: 'Supermercados y negocios',
  description: 'En esta sección encontrarás información sobre los supermercados o negocios de la comuna de Cauquenes.'
}

export default function markets() {
  const marketsData = placesData.filter(
    (place) => place.Category === "Supermercado" && place.Address !== null
  );
  return (
    <>
      <TitleSection data={titleData} />  

      <div className="flex">
        {marketsData.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    </>
  );
}
