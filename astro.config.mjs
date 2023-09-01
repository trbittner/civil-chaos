import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site:'https://trbittner.github.io',
    base:'/civil-chaos',
    integrations: [tailwind()]
});