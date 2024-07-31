import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',  // Ajoutez cette ligne
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});