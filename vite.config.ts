import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/xxx': {
        target: 'https://xxx',
        changeOrigin: true
      }
    },
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/assets/global.less')}";`,
        },
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: []
    }
  }
})
