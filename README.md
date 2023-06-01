# Tailwind-Neon 1.0
A neonaised user interface based on Tailwind CSS.

[![](https://github.com/kitakode/tailwind-neon/workflows/Node.js/badge.svg)](https://github.com/kitakode/tailwind-neon/actions/workflows/nodejs.yml)
[![](https://github.com/kitakode/tailwind-neon/workflows/Publish/badge.svg)](https://github.com/kitakode/tailwind-neon/actions/workflows/publish.yml)

## Prerequisites
Usage of `@kitakode/tailwind-neon` requires the following:

- A [Tailwind CSS 3.x](https://tailwindcss.com/) based interface's project
- [NPM](https://nodejs.org/en) for package management
- Node 14+ | 16+ | 18+

## Installation
Use the package manager [Node.js](https://nodejs.org/en) to install.

```bash
npm i -D @kitakode/tailwind-neon
```

## Usage
Add Tailwind-Neon to your `tailwind.config.js`:

```javascript
module.exports = {
    plugins: [
        require("@kitakode/tailwind-neon"),
    ],
};
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
