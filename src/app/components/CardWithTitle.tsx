import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardWithTitleProps {
  title: String;
  description: String;
  image: String;
}

export default function CardWithTitle({
  title,
  description,
  image,
}: CardWithTitleProps) {
  return (
    <div className="mt-8">
      <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-100 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-100">
          <Image
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-105"
            src={image.toString()}
            width={0}
            height={0}
            alt="Municipalidad de Cauquenes"
            sizes="100vw"
          />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out">
          <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
            {title}
          </h1>
          <h1 className="text-sm font-light text-gray-200 shadow-xl">
            {description}
          </h1>
        </div>
      </div>
    </div>
  );
}
