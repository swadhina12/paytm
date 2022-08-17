/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        colors: {
            "paytm-blue": "#00baf2",
        },
        screens: {
            md: "1110px",
            925: "925px",
        },
    },
},
plugins: [],
};
