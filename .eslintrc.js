module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    semi: 0, // 禁止尾部使用分号“ ; ”
    'no-var': 'error', // 禁止使用 var
    indent: ['error', 2], // 缩进2格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    quotes: [2, 'single'], // 使用单引号
    'no-useless-catch': 0,
    'prettier/prettier': 0,
    'no-new': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'new-cap': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
