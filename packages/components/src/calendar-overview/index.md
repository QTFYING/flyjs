---
nav:
  path: /components
title: CalendarOverview
toc: content
group:
  title: 其他
  order: 3
demo:
  cols: 1
---

# CalendarOverview

基于 Antd 的 Calendar 封装的一个日历看板，后期可扩展为提醒，TODO 等

## 代码演示

```jsx
/**
 * title: 日历看板
 * transform: true
 * compact: true
 * description: 日历看板，目前暂时不接受任何定制，如需定制，请自行实现
 */
import { CalendarOverview } from '@fly/antd';

export default () => {
  return (
    <div style={{ height: 1000 }}>
      <CalendarOverview />
    </div>
  );
};
```
