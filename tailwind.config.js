module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        "btn-primary": "var(--color-btn-primary)",
        "step-bar": "var(--color-step-bar)",
      },
      backgroundImage: {
        "brand-logo": "var(--logo-imgurl)",
        "brand-gradient": "var(--brand-gradient)",
      },
      boxShadow: {
        custom: "3px 0px 19px #00000029",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
