---
nav:
  path: /components
title: ColoredRing
toc: content
group:
  title: 单体组件
  order: 1
hideActions: ['CSB']
demo:
  cols: 2
---

# ColoredRing

用在列表或者表格中，有时候可以替代`echarts`的圆环组件，减少包的体积

## 代码演示

```jsx
/**
 * title: 基本示例
 * description: 根据数据的百分比显示不同的颜色
 */
import { SharingCircle } from '@flylib/antd';

export default () => {
  return (
    <>
      <ColoredRing size={60} strokeWidth={10} segments={[{ color: 'gray', percentage: 100 }]} />
      <ColoredRing
        size={60}
        strokeWidth={10}
        segments={[
          { color: 'red', percentage: 10 },
          { color: 'blue', percentage: 30 },
          { color: 'orange', percentage: 60 },
        ]}
      />
    </>
  );
};
```

## API

<API id="SharingCircle"></API>
