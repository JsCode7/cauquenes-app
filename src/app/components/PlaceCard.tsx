'use client'
import Image from "next/image";
import react, { useState } from "react";

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="max-w-[19rem] mx-5">
      <div className="bg-white max-w-sm">
        <a href="#" className="block w-full h-48 overflow-hidden">
          <Image
            className="object-cover h-full rounded-t-lg"
            src={data.ImagePath || "/images/abcdin.png"}
            width={500}
            height={500}
            priority={true}
            quality={100}
            alt=""
          />
        </a>
        <div className="py-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-1xl tracking-tight mb-2">
              {data.Place}
            </h5>
          </a>
          <p className="font-normal text-[#9ca3af] mb-3">{data.Address}</p>
          <a
            href={data.MapsUrl}
            id="map-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-white font-medium text-sm py-2 text-center inline-flex items-center"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
