import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,  
      },
      backgroundImage: {
        'banner-gradient': 'linear-gradient(to right, #FCD6FF, #29D8FF, #FFFD80, #F89ABF, #FCD6FF)',
        'icon-gradient': 'linear-gradient(to right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)',
        'hero-gradient': 'linear-gradient(to bottom, #000, #200D42 35%, #4F21A1 65%, #A46EDB 82%)',
        'hero-link-gradient': 'linear-gradient(to right, #F87AFF, #FB93D0, #FFDD99, #C3F0B2, #2FD8FE)',
        'hero-radial-gradient': 'radial-gradient(closest-side, #000 82%, #9560EB)',
      },
    },
  },
  plugins: [],
};
export default config;
