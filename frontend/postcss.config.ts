import type { Plugin } from 'postcss';

const config: { plugins: Plugin[] } = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

export default config;