// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://portfolio.sunadokei.dev/',
  base: '/',
  trailingSlash: 'always',
  output: 'static',
  
  vite: {
    plugins: [yaml()],
  },
});