import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import autoprefixer from 'autoprefixer';
import svgLoader from 'vite-svg-loader';

dotenv.config();

export default defineConfig({
  base: `/`,
  define: {
    __APP_URL: JSON.stringify(process.env.APP_URL),
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@core': path.resolve(__dirname, './src/core'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@locales': path.resolve(__dirname, './src/locales'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@public': path.resolve(__dirname, './src/public'),
      '@router': path.resolve(__dirname, './src/router'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: Number(process.env.PORT) || 8080,
    host: true,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
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
