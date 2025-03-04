import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [tailwindcss(), vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    base: "./",
    build: {
      emptyOutDir: true,
      outDir: "dist",
    //   minify: mode === "development" ? false : "terser",
      lib: {
        entry: path.resolve(__dirname, "src/component-export.js"),
        name: "en-style",
        fileName: `en-style`,
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled into your library
        external: [
          // "vue",
          // "goose",
          // "axios",
          // "ag-grid-community",
          // "ag-grid-enterprise",
        ],
        output: {
          exports: "named",
          // Provide global variables to use in the UMD build for externalized deps
          globals: {
            //   vue: "Vue",
            //   axios: "axios",
            //   "ag-grid-community": "ag-grid-community",
            //   "ag-grid-enterprise": "ag-grid-enterprise",
            //   goose: "goose",
          },
        },
      },
    },
  };
});
