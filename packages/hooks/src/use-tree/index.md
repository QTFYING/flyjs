---
nav:
  path: /hooks
title: useTree
toc: content
group:
  title: 树的方法
  order: 1
hideActions: ['CSB']
demo:
  cols: 2
---

# useTree

在 React 项目中用来替代三元表达式的而特意封装的一个组件

:::warning
该组件在 antd 的 `Descriptions` 中的 item 以及类似组件中无法使用。
:::

:::info
该组件在 antd 的 `Descriptions` 中的 item 以及类似组件中无法使用。
:::

## 代码演示

```jsx
import { If } from '@fly/antd';

export default () => {
  return <If isTrue={true}>我渲染出来啦。。。</If>;
};
```

## API

<API id="If"></API>
