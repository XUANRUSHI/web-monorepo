
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    open: true,
    proxy: {
      api: {
        target: 'https:www.zhihu.com',
        changeOrigin: true,
      },
    },
  },
})

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
