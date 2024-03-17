import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";
import PlaceList from "../components/PlacesList";
import { getEmergencyData } from "../utils/orderData";

const titleData = {
  name: "Emergencias",
  description:
    "En esta sección encontrarás información sobre los servicios de emergencia de la comuna de Cauquenes.",
};

export default async function emergency () {
  const dataEmergencies = await getEmergencyData();

  return (
    <>
      <TitleSection data={titleData} />

      <PlaceList
        places={dataEmergencies && dataEmergencies.length > 0 ? dataEmergencies : []}
      />

    </>
  );
}
