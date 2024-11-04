import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'dist',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
