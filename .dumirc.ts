import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  outputPath: 'docs-dist', //打包后文档的包名
  base: '/flyjs',
  publicPath: '/flyjs/',
  hash: true, //文档包名是否生成hash，防止浏览器缓存
  apiParser: {},
  //解析目录
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: 'packages/components/src/index.ts',
    docDirs: ['docs'], //配置 Markdown 文档的解析目录
    atomDirs: [
      //配置子项目（例如组件、函数、工具等）Markdown 的解析目录。
      { type: 'components', dir: 'packages/components/src' },
      { type: 'hooks', dir: 'packages/hooks/src' },
      { type: 'utils', dir: 'packages/utils/src' },
      { type: 'example', dir: 'packages/example/src' },
      { type: 'rules', dir: 'packages/rules/src' },
    ],
  },
  //别名：dumi 2不再感知 monorepo,需要手动配置包名到 src 的 alias。
  alias: {
    '@flylib/antd': join(__dirname, 'packages/components/src'),
    '@flylib/hooks': join(__dirname, 'packages/hooks/src'),
    '@flylib/utils': join(__dirname, 'packages/utils/src'),
  },
  themeConfig: {
    logo: 'https://img.icons8.com/stickers/300/woody-woodpecker.png',
    name: 'flyjs',
    showLineNum: true,
    nav: [
      { title: '组件', link: '/components/overview' },
      { title: 'Hooks', link: '/hooks/overview' },
      { title: 'Utils', link: '/utils/overview' },
      { title: '用例', link: '/example/overview' },
      { title: '开发标准', link: '/rules/overview' },
    ],
    prefersColor: { default: 'light', switch: false }, //主题色
    socialLinks: {
      github: 'https://github.com/qtfying/flyjs',
    },
    footer: 'Copyright © 2024 | 寄蜉蝣于天地，心在水，水在渊，即天下共水',
  },
  cssMinifierOptions: { minifyWhitespace: true, minifySyntax: true },
  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  },
  clickToComponent: { editor: 'vscode' },
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
  favicons: ['https://img.icons8.com/stickers/300/woody-woodpecker.png'],
  // externals: { react: 'React' },
  // headScripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
  mock: { include: ['.dumi/pages/**/_mock.ts'] },
});
