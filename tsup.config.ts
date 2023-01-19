import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    dts: false,
    entry: ['./src/plugin/index.ts'],
    outDir: 'dist',
    sourcemap: false,
    skipNodeModulesBundle: true,
    minify: true,
    keepNames: true,
    format: ['cjs'],
    tsconfig: './tsconfig.node.json',
    target: 'ES6'
});
