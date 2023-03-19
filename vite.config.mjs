import { defineConfig } from "vite";
import { URL, fileURLToPath } from 'url'

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  }
});