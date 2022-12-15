import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    devSourcemap: true, // this one
  },
  build: {
    outDir: '/',
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
