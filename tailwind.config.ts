import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'sm-phone': '375px',

      'phone': '420px',
      // => @media (min-width: 420px) { ... }

      'xl-phone': '640px', 
      // => @media (min-width: 640px) { ... }

      'tablet': '800px',
      // => @media (min-width: 800px) { ... }

      'xl-tablet': '900px',
      // => @media (min-width: 900px) { ... }

      'laptop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl-laptop': '1360px',
      // => @media (min-width: 1360px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }

      'xl-desktop': '1560px',
      // => @media (min-width: 1560px) { ... }
    },
  },
  plugins: [],
};
export default config;
