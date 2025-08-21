/// <reference types="vitest/config" />
import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    visualizer({
      filename: './dist/report.html',
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,
  ],
  define: {
    __IS_MAKERS__: JSON.stringify(mode === 'makers'),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // unsupported css 추출
          // if (
          //   !id.includes('ApplyHeader') &&
          //   (id.includes('reset') ||
          //     id.includes('Callout') ||
          //     id.includes('Header') ||
          //     id.includes('Layout') ||
          //     id.includes('Unsupported'))
          // ) {
          //   return 'unsupported';
          // }
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: '@apis', replacement: path.resolve(__dirname, 'src/common/apis') },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/common/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/common/components'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/common/constants'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/common/hooks'),
      },
      {
        find: '@store',
        replacement: path.resolve(__dirname, 'src/common/store'),
      },
      { find: '@type', replacement: path.resolve(__dirname, 'src/common/type') },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/common/utils'),
      },
      { find: 'contexts', replacement: path.resolve(__dirname, 'src/contexts') },
      { find: 'styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'tests', replacement: path.resolve(__dirname, 'src/tests') },
      { find: 'views', replacement: path.resolve(__dirname, 'src/views') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
  },
}));
