module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          violet: "#5964E0",
          "light-violet": "#939BF4",
          "very-dark-blue": "#19202D",
          midnight: "#121721",
          white: "#FFFFFF",
          "light-grey": "#F4F6F8",
          grey: "#9DAEC2",
          "dark-grey": "#6E8098",
        },
      },
      fontFamily: {
        kumbhsans: ["Kumbh Sans"],
      },
      fontSize: {
        h1: ["28px", "34px"],
        h2: ["24px", "29px"],
        h3: ["20px", "24px"],
        h4: ["14px", "18px"],
        body: ["16px", "26px"],
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
