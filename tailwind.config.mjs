/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      /* Font Family */
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        paytone: ["Paytone One", "sans-serif"],
      },

      /* Font Sizes */
      fontSize: {
        custom54: ["3.375rem"], // 54px
        custom40: ["2.5rem"], // 40px
        custom32: ["2rem"], // 32px
      },

      /* Corner Radius */
      borderRadius: {
        custom50px: "50px",
      },

      /* Colors */
      colors: {
        transparent: "transparent",
        current: "currentColor",
        BarkingAtTheMoon: {
          opacity50: "#E2EBF4",
          50: "#E2EBF4",
          100: "#C6D6EA",
          200: "#89ABD3",
          300: "#5283BD",
          400: "#35577F",
          500: "#1C2E44",
          600: "#162435",
          700: "#111C29",
          800: "#0B121A",
          900: "#060A0F",
          950: "#030507",
        },

        GoldenRetriever: {
          100: "#FEFAF6",
          200: "#FCF3E6",
          300: "#FBEEDD",
          400: "#FAE9D3",
          500: "#F9E3C8",
          600: "#F0B670",
          700: "#E68A00",
          800: "#A05B00",
          900: "#522F01",
          950: "#291801",
        },

        FluffyCloud: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FEFBFB",
          300: "#FEFBFB",
          400: "#FCF8F6",
          500: "#FCF6F4",
          600: "#E9B19F",
          700: "#D76C4A",
          800: "#A13B18",
          900: "#521E0D",
          950: "#281007",
        },
      },

      spacing: {
        custom90: "90px",
        custom104: "104px",
      },
    },

    boxShadow: {
      dropshadow: "0 4px 4px rgba(89, 89, 89, 0.25)",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
