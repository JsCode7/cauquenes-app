import Image from "next/image";

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
  return (
    <div className="max-w-2xl mx-5">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-sky-950  dark:border-sky-800">
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
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {data.Place}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {data.Address}
          </p>
          <a
            href={data.MapsUrl}
            className="text-white bg-sky-800 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          >
            Conocer ubicación
            <svg
              className="-mr-1 ml-2 h-4 w-4"
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
