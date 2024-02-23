'use client'
import React, { useState } from "react";
import { Place } from "@/app/interfaces/place.interface";

interface SearchBarProps {
  places: Place[];
  onFilterChange: (filteredPlaces: Place[]) => void;
}

export default function SearchBar({ places, onFilterChange }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredPlaces = places.filter(
      (place) =>
        place.Place?.toLowerCase().includes(searchTerm) ||
        (place.Address && place.Address.toLowerCase().includes(searchTerm))
    );

    onFilterChange(filteredPlaces);
  };

  return (
    <div className="relative mb-8 pl-[1.25rem] ">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-[50dvw] border border-[#bbbbbb] rounded-2xl py-3 pl-3 pr-10 focus:outline-none focus:border-[#000000] transition-all duration-300"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}