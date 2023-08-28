import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://wavelandweb.com',
  experimental: {
    assets: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
})
