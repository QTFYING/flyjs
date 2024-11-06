---
nav:
  path: /hooks
title: useTree
toc: content
group:
  title: 树
  order: 1
hideActions: ['CSB']
demo:
  cols: 1
---

# useTree

用于在业务中处理树形状数据的方法集合。

:::warning
限制渲染的最大层级 - 未实现<br>
获取树中所有的非禁用节点 - demo 待编写<br>
:::

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/parallel.tsx" description="不同的树组件接收不同的结构，通过参数映射可以源数据映射为目标组件的数据结构">参数映射</code>
<code src="./demo/get-node-info.tsx" description="`getTreeNodeInfo`方法用来获取当前节点信息，包括`title`、`key`、`parentKeys`、`parentNodes`、`childrenKeys`、`childrenNodes`所有节点信息，可用来拼接父级路径、获取直属父级、直接下级等">获取节点信息</code>

## API

| 参数       | 说明                                                         | 类型                     | 默认值 | 版本 |
| ---------- | ------------------------------------------------------------ | ------------------------ | ------ | ---- |
| data       | 要处理的树形数据                                             | `DataNode[]`             |        |      |
| fieldNames | 映射关系，比如将 `label` 映射为 `title`， `{title: 'label'}` | `Record<string, string>` |        |
| maxLevel   | 限制数据输出的最大层级                                       | `number`                 | `null` |      |
