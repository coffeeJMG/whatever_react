import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'customCreateElement',
    jsxFragment: 'Fragment',
    jsxInject: `import customCreateElement from '/src/components/CreateElement.jsx'`  
  },
  
});
