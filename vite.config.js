import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'createElement',
    jsxFragment: 'FRAGMENT_TYPE',
    jsxInject: `import { createElement, Fragment } from '/src/components/CreateElement.jsx'`

  },

});
