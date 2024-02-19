"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { links } from "@/app/constants/links";
import Image from "next/image";

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
        return "hover:text-[#2ecc71] transition-all duration-20";
      case "Emergencias":
        return "hover:text-[#c0392b] transition-all duration-20";
      case "Supermercados":
        return "hover:text-[#2980b9] transition-all duration-20";
      default:
        return "hover:text-[#7f8c8d] transition-all duration-20";
    }
  };

  return (
    <div ref={menuRef} className="absolute">
      <div
        className={`transition-all duration-300 ${
          abierto ? "w-64 bg-[white]" : "w-20"
        } h-screen px-2 pt-[5px] shadow-xl`}
      >
        <div
          className={`${
            abierto ? "items-end" : "items-center"
          } w-4/5 flex flex-col`}
        >
          <HiMenuAlt3
            size={26}
            className="cursor-pointer fill-[#6b7280]"
            onClick={handleToggleMenu}
          />
        </div>
        <ul
          className={`pt-6 leading-[1]`}
        >
          {links.map(({ label, route, icon }) => {
            return (
            <li key={route} className="flex">
              <a href={route} className={` flex m-4 items-end ${getLinkColorClass(label)} hover:text-opacity-80 `}>
                <span className="w-5 h-5 flex items-center">
                  {React.createElement(icon, { size: "23", className: getLinkColorClass(label) })}
                </span>
                <div
                  className={`origin-left whitespace-pre duration-500 pl-5 justify-center align-middle ${
                    !abierto && "hidden"
                  }`}
                >
                  {label}
                </div>
              </a>
            </li>
          )})}
        </ul>
      </div>
    </div>
  );
}
