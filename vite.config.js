import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    return {
        resolve: {
            alias: {},
        },
        plugins: [vue()],
        server: {
            host: true,
        },
        // Sets window variables
        define: {
            mobile: mode === 'mobile',
        },
        base: './',
        build: {
            emptyOutDir: true,
            outDir: 'dist',
            minify: mode === 'development' ? false : 'terser',
            lib: {
                entry: path.resolve(__dirname, 'src/component-export.js'),
                name: 'EnStyle',
                fileName: `en-style`,
            },
            rollupOptions: {
                // make sure to externalize deps that shouldn't be bundled into your library
                external: ['vue'],
                output: {
                    exports: 'named',
                    // Provide global variables to use in the UMD build for externalized deps
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
        // worker: {
        //     format: 'es',
        //     rollupOptions: {
        //         output: {
        //             entryFileNames: 'workers/[name].js',
        //         },
        //     },
        // },
    };
});
