import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: {
          0: "#FF9E51"
        }
      },

      keyframes: {
        up: {
          '0%': { position: 'relative', top: '-100px' },
          '100%': { position: 'relative', top: '0px' },
        }
      },

      animation: {
        up: 'up 1s ease-in-out infinite',
      }
    },
    
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
