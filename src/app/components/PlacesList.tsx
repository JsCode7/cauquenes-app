import React from "react";
import PlaceCard from "./PlaceCard";
import { FormattedPlaceProps } from "../interfaces/place.interface";
import { joinPhotosUri } from "../utils/joinPhotosUri";

export default function PlaceList({
  places,
}: {
  places: FormattedPlaceProps[];
}) {
  return (
    <div className="grid gap-4 gap-y-8 phone:grid-cols-1 xl-phone:gap-2 xl-phone:grid-cols-1 tablet:grid-cols-2 xl-tablet:grid-cols-2 xl-tablet:gap-3 laptop:grid-cols-3 xl-laptop:grid-cols-4 desktop:grid-cols-4 xl-desktop:grid-cols-5">
      {places.map((place) => {
        const dataPlaceCard = {
          name: place.name?.text || "",
          url: place.google_maps_uri || "",
          image: joinPhotosUri(place.photos),
          address: place.formatted_address || "",
        };
        return (
          <PlaceCard
            key={place.name?.text}
            data={dataPlaceCard}
          />
        );
      })}
    </div>
  );
}
