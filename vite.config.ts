import path from 'path';
import {defineConfig} from 'vite';

// We removed the React and Tailwind plugins since we are using plain HTML and Bootstrap.
export default defineConfig(() => {
  return {
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
