'use client'
import React, { useState } from "react";

interface Place {
    Place?: string;
    Address?: string | null;
    MapsUrl?: string;
    Category?: string;
    ImagePath?: string | undefined;
  }

interface SearchBarProps {
  places: Place[];
}
export default function SearchBar({ places }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlaces = places.filter(
    (place) =>
      place.Place?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.Address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full border rounded-md py-2 pl-3 pr-10 focus:outline-none focus:border-blue-500"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className="absolute z-10 bg-white w-full border border-gray-300 rounded-b-md mt-1 overflow-hidden">
        {filteredPlaces.map((place, index) => (
          <li
            key={index}
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <a href={place.MapsUrl} target="_blank" rel="noopener noreferrer">
              <div>{place.Place}</div>
              <div className="text-xs text-gray-500">{place.Address}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
