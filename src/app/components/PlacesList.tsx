import React from 'react'
import PlaceCard from './PlaceCard'
import { Place } from '../interfaces/place.interface'

export default function PlaceList({ places }: { places: Place[] }) {
    return (
      <div className="grid grid-cols-5 gap-4 gap-y-8">
        {places.map((place) => (
          <PlaceCard key={place.Place} data={place} />
        ))}
      </div>
    );
  }
