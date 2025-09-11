import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import * as path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["Chrome >= 63", "Firefox >= 60", "Safari >= 15.3", "Edge >= 79"],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/shared/assets/images/icons")],
      symbolId: "icon-[dir]-[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__",
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
