import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default {
  plugins: [
    react(),
    ssr()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  }
};
