// tailwind - colors
const colors = require("tailwindcss/colors");

// module - colors
let _colors = {
    // 'neon-slate': colors.slate[500],
    // 'neon-gray': colors.gray[500],
    // 'neon-zinc': colors.zinc[500],
    // 'neon-neutral': colors.neutral[500],
    // 'neon-stone': colors.stone[500],
    // 'neon-red': colors.red[500],
    // 'neon-orange': colors.orange[500],
    // 'neon-amber': colors.amber[500],
    // 'neon-yellow': colors.yellow[500],
    // 'neon-lime': colors.lime[500],
    // 'neon-green': colors.green[500],
    // 'neon-emerald': colors.emerald[500],
    // 'neon-teal': colors.teal[500],
    // 'neon-cyan': colors.cyan[500],
    // 'neon-sky': colors.sky[500],
    // 'neon-blue': colors.blue[500],
    // 'neon-indigo': colors.indigo[500],
    // 'neon-violet': colors.violet[500],
    // 'neon-purple': colors.purple[500],
    // 'neon-fuchsia': colors.fuchsia[500],
    // 'neon-pink': colors.pink[500],
    // 'neon-rose': colors.rose[500],
};

Object.keys(colors).forEach(name => {
    if (typeof colors[name][500] != undefined && [
        // deprecated
        'lightBlue',
        'warmGray',
        'trueGray',
        'coolGray',
        'blueGray',
    ].includes(name) == false) {
        _colors['neon-' + name] = colors[name][500];
    }
});

/** @type {import('tailwindcss').Config} */
module.exports = _colors;
