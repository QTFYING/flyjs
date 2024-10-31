---
nav:
  path: /components
title: CalendarOverview
toc: content
group:
  title: 其他
  order: 1
demo:
  cols: 1
---

# CalendarOverview

基于 Antd 的 Calendar 封装的一个日历看板，后期可扩展为提醒，TODO 等

## 代码演示

```jsx
import { CalendarOverview } from '@fly/components';

export default () => {
  return (
    <div style={{ height: 1000, overflowY: 'auto' }}>
      <CalendarOverview />
    </div>
  );
};
```
