"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { links } from "@/app/constants/links";
import Image from "next/image";
import Link from "next/link";
import SwitchDarkMode from "./SwitchDarkMode";

export function Menu() {
  const [abierto, setAbierto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setAbierto(!abierto);
  };

  useEffect(() => {
    const cerrarMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setAbierto(false);
      }
    };
    document.addEventListener("mousedown", cerrarMenu);
    return () => {
      document.removeEventListener("mousedown", cerrarMenu);
    };
  }, []);

  const getLinkColorClass = (label: string) => {
    switch (label) {
      case "Parques":
        return "hover:text-[#2ecc71] dark:text-white dark:hover:text-[#2ecc71]";
      case "Emergencias":
        return "hover:text-[#c0392b] dark:text-white dark:hover:text-[#c0392b]";
      case "Supermercados":
        return "hover:text-[#2980b9] dark:text-white dark:hover:text-[#2980b9]";
      case "Deportes":
        return "hover:text-[#16a085] dark:text-white dark:hover:text-[#16a085]";
      case "Servicios":
        return "hover:text-[#d35400] dark:text-white dark:hover:text-[#d35400]";
      default:
        return "hover:text-[#7f8c8d] dark:text-white dark:hover:text-[#7f8c8d]";
    }
  };

  return (
    <div ref={menuRef} className="py-8 z-10 fixed left-0 dark:bg-[#1f2937]">
      <div
        className={`${
          abierto ? "w-64 bg-[white] dark:bg-[#1f2937] dark:text-white" : "w-20"
        } h-screen px-2 pt-[5px] shadow-xl dark:shadow-xl dark:shadow-white`}
      >
        <div
          className={`${
            abierto ? "items-end" : "items-center"
          } w-4/5 flex flex-col`}
        >
          <div className="flex">
            {abierto ? <span className="mr-4">Cauquenes App</span> : ""}
            <HiMenuAlt3
              size={26}
              className="cursor-pointer fill-[#6b7280] dark:fill-white"
              onClick={handleToggleMenu}
            />
          </div>
        </div>
        <div className="h-full">
          <ul className={`pt-6 leading-[1]`}>
            {links.map(({ label, route, icon }) => {
              return (
                <li key={route} className="flex">
                  <Link
                    href={route}
                    className={` flex m-4 items-end ${getLinkColorClass(
                      label
                    )}  `}
                  >
                    <span className="w-5 h-5 flex items-center">
                      {React.createElement(icon, {
                        size: "23",
                      })}
                    </span>
                    <div
                      className={`origin-left  pl-5 justify-center align-middle ${
                        !abierto && "hidden"
                      }`}
                    >
                      {label}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mt-[50dvh]">
            <SwitchDarkMode />
          </ul>
        </div>
      </div>
    </div>
  );
}
