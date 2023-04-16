import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from 'vite-plugin-dts'
import { fileURLToPath } from "url";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, './src/components/build.ts'),
      name: "vue3-tailwind-tabs",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `vue3-tailwind-tabs.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    dts()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
});
