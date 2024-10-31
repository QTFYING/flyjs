---
nav:
  path: /components
title: AdvanceSelect
toc: content
group:
  title: 表单元素
  order: 2
demo:
  cols: 1
---

# AdvanceSelect

基于 Antd 封装的全能的 Select 组件

:::info

<ul style="padding: 0">
  目前已完成功能包括：
  <li>全选功能 </li>
  <li>启用搜索默认搜索选项的label</li>
</ul>
:::

:::warning

<ul style="padding: 0">
  原计划是在 Antd 封装一个大而全的 select 组件，现有 Antd 的 Select 组件不支持以下功能：
  <li>全选功能 </li>
  <li>显示的是 label 和其他属性的组合，但是传过去的时候是 label </li>
  <li>显示的时候需要 value，但是传过去的需要是其他属性 </li>
  <li>多选时，禁止 tag 删除 </li>
  <li>不支持下拉框不能下拉，而是从弹框中选中回填 </li>
</ul>
:::

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/select-all.tsx">多选用法</code>
<code src="./demo/select-label-name.tsx">label定制化</code>

## API

| 参数          | 说明                                             | 类型                     | 默认值             | 版本 |
| ------------- | ------------------------------------------------ | ------------------------ | ------------------ | ---- |
| title         | options 的 title                                 | `string`                 | `全选`             |      |
| mode          | 设置 Select 的模式为多选或标签                   | `SelectProps['mode']`    | `undefined`        |      |
| showSelectAll | 是否启用全选功能                                 | `boolean`                | `true, 多选时有效` |      |
| options       | select 的 options，建议均采用 options 的形式传入 | `SelectProps['options']` |                    |      |

## Q & A

### Antd 的 Select 的组件存在哪些问题

antd 的组件存在诸多问题，比如有

- 搜索关键字时以下拉选项的 `value` 进行搜索，而不是以 `label`，和正常交互相反
- 搜索请求下拉场景缺失，但是该场景其实很常见，`antd` 提供的方法非常复杂
- 不支持全选功能
- `label` 和 `name` 混合在一起，用的时候，需要额外的处理，比如需要显示员工名：`{label: '小明-001'， value: '001'}`

### 其他

待补充
