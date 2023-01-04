import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve("src/"),
      assets: path.resolve("src/assets/"),
      components: path.resolve("src/components/"),
      layout: path.resolve("src/layout/"),
      pages: path.resolve("src/pages/"),
      providers: path.resolve("src/providers/"),
      public: path.resolve("src/public/"),
      styles: path.resolve("src/styles/"),
      themes: path.resolve("src/themes/"),
      utils: path.resolve("src/utils/"),
    },
  },
});
