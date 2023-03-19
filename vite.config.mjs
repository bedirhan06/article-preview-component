import { defineConfig } from "vite";
import { URL, fileURLToPath } from "url";

export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : "/article-preview-component/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
