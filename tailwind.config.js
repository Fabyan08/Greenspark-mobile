/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        1: "#E4232A",
        2: "#CB3541",
        3: "#385A64",
        4: "#FF735C",
        5: "#3581D2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        monserrat: ["Montserrat", "sans-serif"],
        monoton: ["Monoton"],
      },
      backgroundImage: {
        video: "url('../../../public/home/Video.png')",
        about: "url('../../../public/about/main.png')",
        application: "url('../../../public/application/hero.png')",

      },
    },
  },
  plugins: [],
};
