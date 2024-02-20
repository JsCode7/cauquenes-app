import { BiHomeAlt, BiStore } from 'react-icons/bi';
import { BsFillTreeFill } from 'react-icons/bs';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { IoFootballOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";

export const links = [
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
    {
      label: 'Deportes',
      route: '/sports',
      icon: IoFootballOutline,
    },
    {
      label: 'Servicios',
      route: '/services',
      icon: FiMapPin,
    },

  ];