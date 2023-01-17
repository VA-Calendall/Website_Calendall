import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                "about-us": resolve(__dirname, "about-us/index.html"),
                impressum: resolve(__dirname, "impressum/index.html"),
                "ueber-uns": resolve(__dirname, "ueber-uns/index.html"),
                datenschutz: resolve(__dirname, "datenschutz/index.html"),
            },
        },
    },
});
