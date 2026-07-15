// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://luiscalcina.dev',
  integrations: [sitemap()],
  image: { dangerouslyProcessSVG: true },
  vite: { build: { chunkSizeWarningLimit: 800 } },
});
