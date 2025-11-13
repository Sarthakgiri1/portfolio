import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["yt6d9j-5173.csb.app", "localhost"]
  },
  preview: {
    allowedHosts: ["yt6d9j-5173.csb.app"]
  }
});
