import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
    jsxInject: `import { createElement, Fragment } from '/src/components/CreateElement.jsx'`

  },

});
