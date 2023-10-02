import { resolve, join } from "path";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import Sitemap from 'vite-plugin-sitemap'


export default defineConfig({
    plugins: [
        Sitemap({
            hostname: "https://www.calendall.net"
        }),
        injectHTML({
            debug: {
                logPath: true,
            },
        })
    ],
    build: {
        outDir: join(__dirname, "_site"),
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                impressum: resolve(__dirname, "impressum/index.html"),
                "ueber-uns": resolve(__dirname, "ueber-uns/index.html"),
                datenschutz: resolve(__dirname, "datenschutz/index.html"),
                kontakt: resolve(__dirname, "kontakt/index.html"),
                agb: resolve(__dirname, "agb/index.html"),
                friseursalon: resolve(__dirname, "friseursalon/index.html"),
                kosmetikstudio: resolve(__dirname, "kosmetikstudio/index.html"),
                barbershop: resolve(__dirname, "barbershop/index.html"),
                nagelstudio: resolve(__dirname, "nagelstudio/index.html"),
                massagestudio: resolve(__dirname, "massagestudio/index.html"),
                Fußpflegepraxis: resolve(__dirname, "fusspflege/index.html"),
            },
        },
    },
});
