'use client'
import Image from "next/image";
import react, { useState } from "react";
import Link from "next/link";

interface PlaceCardProps {
  data: {
    Place?: string;
    Address?: string | null;
    MapsUrl?: string;
    Category?: string;
    ImagePath?: string;
  };
}

const PlaceCard = ({ data }: PlaceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const slugWithDashes = data.Place?.replace(/ /g, '-') || '';

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="max-w-[19rem] mx-5">
      <div className="bg-white max-w-sm dark:bg-[#1f2937]">
        <Link href={`${slugWithDashes}`} className="block w-full h-64 overflow-hidden">
          <Image
            className="object-cover h-64 rounded-lg"
            src={data.ImagePath || "/images/abcdin.png"}
            width={500}
            height={500}
            priority={true}
            quality={100}
            alt={data.Place || "Imagen del lugar"}
          />
        </Link>
        <div className="pt-3 pb-5">
          <Link href={`${slugWithDashes}`}>
            <h5 className="text-gray-900 font-bold text-1xl tracking-tight mb-2 dark:text-white">
              {data.Place}
            </h5>
          </Link>
          <p className="font-normal text-[#bfc1c6] mb-3">{data.Address}</p>
          <Link
            href={data.MapsUrl || "/"}
            id="map-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="dark:text-white font-medium text-sm py-2 text-center inline-flex items-center"
          >
            Conocer ubicación
            <svg
              className={`-mr-1 ml-2 h-[14px] w-[14px] transition-transform duration-300 transform-gpu ${
                isHovered ? "translate-x-4" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
