import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
      <div className="relative flex justify-center w-[70%] ">
        <Image
          className="rounded-2xl object-cover h-48 w-96"
          src={"/images/vinedo-cauquenes.jpg"}
          width={0}
          height={0}
          alt="Municipalidad de Cauquenes"
          sizes="100vw"
          style={{ width: "100%", height: "500px" }}
        />
        <div className="absolute bottom-0 left-10 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out">
          <h1 className="mt-1 text-[50px] font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white text-left">
            Bienvenidos a Cauquenes App
          </h1>
        </div>
    </div>

  );
}
