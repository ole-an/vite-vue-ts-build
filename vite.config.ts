import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import autoprefixer from 'autoprefixer';

dotenv.config();

export default defineConfig({
  base: `/build`,
  define: {
    __APP_URL: JSON.stringify(process.env.APP_URL),
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@app/styles/index.scss";',
      },
    },
  },
  server: {
    port: Number(process.env.PORT) || 8080,
    host: process.env.APP_HOSTNAME || 'localhost',
    open: true,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(jpeg | jpg | webp | png | svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  preview: {
    port: Number(process.env.PORT) || 8080,
  },
});
