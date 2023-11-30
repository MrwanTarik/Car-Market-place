/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
      },
    },
    fontSize: {
      sm: ["14px", "24px"],
      base: ["16px", "21px"],
      lg: ["18px", "28px"],
      xl: ["26px", "32px"],
    },
    extend: {
      fontFamily: {
        primary: ['"Roboto"', "sans-serif"],
        secondary: ['"Poppins"', "sans-serif"],
      },
      colors: {
        primary: "#1D1A1A",
        secondary: "#6B6B6B",
        link: "#4264FD",
        red: "#F00000",
        green: "#7ED321",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        car: "url('src/assets/images/car-temp.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
