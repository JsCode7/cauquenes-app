'use client'
import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BiHomeAlt, BiStore } from 'react-icons/bi';
import { BsFillTreeFill } from 'react-icons/bs';
import { FaBriefcaseMedical } from 'react-icons/fa';

import Image from 'next/image';

const links = [
  {
    label: 'Inicio',
    route: '/',
    icon: BiHomeAlt,
  },
  {
    label: 'Parques',
    route: '/parks',
    icon: BsFillTreeFill,
  },
  {
    label: 'Emergencias',
    route: '/emergency',
    icon: FaBriefcaseMedical,
  },
  {
    label: 'Supermercados',
    route: '/markets',
    icon: BiStore,
  },
];

export function Menu() {
  const [abierto, setAbierto] = useState(false);

  const handleToggleMenu = () => {
    setAbierto(!abierto);
  };

  return (
    <div className="absolute left-0">
      <div className={`${abierto ? 'w-72' : 'w-20'} h-screen bg-sky-950 p-2`}>
        <div className={`${abierto ? 'items-end' : 'items-center'} w-4/5 flex flex-col`}>
          <HiMenuAlt3 size={26} className="cursor-pointer mt-4 fill-white" onClick={handleToggleMenu} />
        </div>
        <ul className="pt-6">
          {links.map(({ label, route, icon }) => (
            <li key={route} className="flex">
              <a href={route} className="flex m-4">
                <span className="w-4 h-5">{React.createElement(icon, { size: '23', fill: 'white' })}</span>
                <div
                  className={`origin-left whitespace-pre duration-500 pl-5 justify-center align-middle text-white ${
                    !abierto && 'hidden'
                  }`}
                >
                  {label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
