// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://5unad0ke1.github.io/',
  base: '/portfolio-site/',
  
  vite: {
    plugins: [yaml()],
  },
  output: 'static',
});