import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    ignores: ['**/demo/**'], // 不打包demo文件
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
