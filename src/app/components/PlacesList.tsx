import React from 'react'
import PlaceCard from './PlaceCard'
import { Place } from '../interfaces/place.interface'

export default function PlaceList({ places }: { places: Place[] }) {
    return (
      <div className="grid gap-4 gap-y-8 phone:grid-cols-1 xl-phone:gap-2 xl-phone:grid-cols-1 tablet:grid-cols-2 xl-tablet:grid-cols-2 xl-tablet:gap-3 laptop:grid-cols-3 xl-laptop:grid-cols-4 desktop:grid-cols-4 xl-desktop:grid-cols-5">
        {places.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    );
  }
