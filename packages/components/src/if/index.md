---
nav:
  path: /components
title: If
toc: content
group:
  title: 逻辑组件
  order: 1
hideActions: ['CSB']
demo:
  cols: 2
---

# If

在 React 项目中用来替代三元表达式的而特意封装的一个组件

:::warning
该组件在 antd 的 `Descriptions` 中的 item 以及类似组件中无法使用。
:::

## 代码演示

```jsx
/**
 * title: 基本示例
 * description: 替代三元表达式的一种优雅写法
 */
import { If } from '@flylib/antd';

export default () => {
  return <If isTrue={true}>我渲染出来啦。。。</If>;
};
```

## API

<API id="If"></API>
