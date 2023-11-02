import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://wavelandweb.com',
  scopedStyleStrategy: 'class',
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
    },
  },
  integrations: [
    mdx(),
    sitemap({
      lastmod: new Date(),
    }),
  ],
})
