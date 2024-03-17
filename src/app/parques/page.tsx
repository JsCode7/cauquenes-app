import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";
import PlaceList from "../components/PlacesList";
import { getParksData } from "../utils/orderData";

const titleData = {
  name: "Parques",
  description:
    "En esta sección encontrarás información sobre los parques de la comuna de Cauquenes.",
};

export default async function parks() {
  const dataParks = await getParksData();

  return (
    <>
      <TitleSection data={titleData} />
      <PlaceList places={dataParks && dataParks.length > 0 ? dataParks : []} />
    </>
  );
}
