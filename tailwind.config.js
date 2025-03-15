/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
      colors: {
        gradiant: "var(--background-gradiant)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "my-green": "var(--my-green)",
        "my-green2": "var(--my-green2)",
        "my-yellow": "var(--my-yellow)",
        "my-yellow2": "var(--my-yellow2)",
        "my-blue": "var(--my-blue)",
        "dark-blue": "var(--dark-blue)",
        "my-red": "var(--my-red)",
      },
      fontSize: {
        xxs: "10px",
        xxxs: "8px",
      },
      padding: {
        "layout-padding": "1rem",
      },
      screens:{
        xxxs: "375px",
        xxs: "425px",
        xs: "500px",
      }
    },
  },
  plugins: [],
};
