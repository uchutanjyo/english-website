import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    // Adjust the loader configuration to parse JSX files correctly
    jsxInject: `import React from 'react';`
  },
  plugins: [react()],

})
