import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for 'src' directory
      '~components': path.resolve(__dirname, './src/components'), // Alias for 'components' directory
    },
  },
})
