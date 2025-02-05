import path, { resolve } from 'path'
import glob from 'glob'

export default {
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, 'src', '**/*.html')),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm.js',
    },
  },
  emptyOutDir: true,
}
