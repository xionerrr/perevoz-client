import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
