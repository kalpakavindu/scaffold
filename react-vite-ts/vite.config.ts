import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      strictPort: true,
      host: env.VITE_CLIENT_HOST || "localhost",
      port: parseInt(env.VITE_CLIENT_PORT) || 5173,
    },
    proxy: {
      "/api": {
        target: env.VITE_SERVER_URI,
        changeOrigin: true,
      },
    },
  };
});
