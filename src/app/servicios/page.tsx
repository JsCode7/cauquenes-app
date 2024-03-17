import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/data.js";
import TitleSection from "../components/TitleSection";
import SwitchDarkMode from "@/app/components/SwitchDarkMode";
import PlaceList from "../components/PlacesList";
import { getServicesData } from "../utils/orderData";

const titleData = {
  name: "Servicios",
  description:
    "En esta sección encontrarás información sobre los servicios de la comuna de Cauquenes.",
};

export default async function services() {
  const dataServices = await getServicesData();

  return (
    <>
      <TitleSection data={titleData} />

      <PlaceList places={dataServices && dataServices.length > 0 ? dataServices : []} />
    </>
  );
}
