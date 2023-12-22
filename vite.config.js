import { resolve } from "path";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
    plugins: [
        ViteImageOptimizer({}),
        injectHTML({
            debug: {
                logPath: true,
            },
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                "ueber-uns/": resolve(__dirname, "ueber-uns/index.html"),
                "impressum/": resolve(__dirname, "impressum/index.html"),
                "datenschutz/": resolve(__dirname, "datenschutz/index.html"),
                "kontakt/": resolve(__dirname, "kontakt/index.html"),
                "agb/": resolve(__dirname, "agb/index.html"),
                "friseursalon/": resolve(__dirname, "friseursalon/index.html"),
                "kosmetikstudio/": resolve(__dirname, "kosmetikstudio/index.html"),
                "barbershop/": resolve(__dirname, "barbershop/index.html"),
                "nagelstudio/": resolve(__dirname, "nagelstudio/index.html"),
                "massagestudio/": resolve(__dirname, "massagestudio/index.html"),
                "fusspflege/": resolve(__dirname, "fusspflege/index.html"),
                "preise/": resolve(__dirname, "preise/index.html"),
            },
        },
    },
});
