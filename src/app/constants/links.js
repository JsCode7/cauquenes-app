import { BiHomeAlt, BiStore } from 'react-icons/bi';
import { BsFillTreeFill } from 'react-icons/bs';
import { FaBriefcaseMedical } from 'react-icons/fa';

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
  ];