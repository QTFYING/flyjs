---
nav:
  path: /utils
title: isEmpty
toc: content
demo:
  cols: 1
---

# isEmpty

基于 Antd 的 Calendar 封装的一个日历看板，后期可扩展为提醒，TODO 等

## 代码演示

```jsx
/**
 * title: 日历看板
 * transform: true
 * compact: true
 * description: 日历看板，目前暂时不接受任何定制，如需定制，请自行实现
 */
import { CalendarOverview } from '@flylib/antd';

export default () => {
  return (
    <div style={{ height: 1000 }}>
      <CalendarOverview />
    </div>
  );
};
```
