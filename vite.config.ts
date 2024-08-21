import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    visualizer({
      filename: './dist/report.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,
  ],
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
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'views', replacement: path.resolve(__dirname, 'src/views') },
    ],
  },
});
