import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data";
import TitleSection from "../components/TitleSection";
import PlaceList from "../components/PlacesList";
import { getMarketsData } from "../utils/orderData";

const titleData = {
  name: "Supermercados y negocios",
  description:
    "En esta sección encontrarás información sobre los supermercados o negocios de la comuna de Cauquenes.",
};

export default async function markets() {
  const dataMarkets = await getMarketsData();

  return (
    <>
      <TitleSection data={titleData} />
      <PlaceList places={dataMarkets && dataMarkets.length > 0 ? dataMarkets : []} />
    </>
  );
}
