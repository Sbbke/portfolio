import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
  // base: "/portfolio/",
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  build: {
    outDir: "build/client",
    emptyOutDir: true,
  },
});
