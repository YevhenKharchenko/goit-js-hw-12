import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
      // 'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    optimizeDeps: {
      include: [
        'axios',
        'izitoast',
        'simplelightbox',
        'vite-plugin-full-reload',
        'vite-plugin-html-inject',
      ],
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
