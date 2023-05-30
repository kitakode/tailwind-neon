// tailwind - plugin
const plugin = require("tailwindcss/plugin");

// module - colors
const _colors = require("./colors/index");

// tailwind - neon
const TailwindNeon = ({

}) => {

};

/** @type {import('tailwindcss').Config} */
module.exports = plugin(TailwindNeon, {
    theme: {
        extend: {
            colors: {
                ..._colors,
            },
        },
    },
});
