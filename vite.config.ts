import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  plugins: [tsconfigPaths()],
  define: {
    global: {},
  },
});
