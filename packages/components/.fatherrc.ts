import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  sourcemap: false,
  platform: 'browser',
  prebundle: {
    // 只配置要预打包的依赖
    deps: {
      antd: { minify: true },
      rimraf: { minify: false },
    },
  },
});
