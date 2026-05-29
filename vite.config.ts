import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      target: 'esnext',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Group core React orchestration packages into a stable framework chunk
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'vendor-core';
            }
            // Group motion/animation logic which is dynamically triggered on user interaction
            if (id.includes('node_modules/motion/') || id.includes('node_modules/@motionone/')) {
              return 'vendor-motion';
            }
            // Separate Lucide indicators to enable granular parallel HTTP caching limits
            if (id.includes('node_modules/lucide-react/') || id.includes('node_modules/@lucide/')) {
              return 'vendor-icons';
            }
            // Separate Heavy SDK dependencies from runtime client logic
            if (id.includes('node_modules/@google/genai/')) {
              return 'vendor-google-genai';
            }
            // Capture generic 3rd party vendor libraries
            if (id.includes('node_modules/')) {
              return 'vendor-utils';
            }
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
  };
});
