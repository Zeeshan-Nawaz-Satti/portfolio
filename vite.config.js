import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace <REPO_NAME> with your GitHub repository name
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  
});
