// tailwind - colors
const colors = require("tailwindcss/colors");

// module - colors
let _colors = {
    'neon-blue': colors.blue[500],
    'neon-pink': colors.pink[500],
    'neon-cyan': colors.cyan[500],
};

/** @type {import('tailwindcss').Config} */
module.exports = _colors;
