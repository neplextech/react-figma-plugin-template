const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const { viteSingleFile } = require('vite-plugin-singlefile');

module.exports = defineConfig({
    plugins: [react(), viteSingleFile()],
    root: `${__dirname}/src/ui`,
    base: './',
    build: {
        emptyOutDir: true,
        outDir: `${__dirname}/build`
    }
});
