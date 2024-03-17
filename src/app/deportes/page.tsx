import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";
import PlaceList from "../components/PlacesList";
import { getSportsData } from "../utils/orderData";

const titleData = {
  name: "Deportes",
  description:
    "En esta sección encontrarás información sobre las canchas de la comuna de Cauquenes.",
};

export default async function sports() {
 const dataSports = await getSportsData();

  return (
    <>
      <TitleSection data={titleData} />
      <PlaceList places={dataSports && dataSports.length > 0 ? dataSports : []} />
    </>
  );
}
