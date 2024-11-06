import { fieldNamesLoop } from '@flylib/utils';
import type { DataNode } from 'antd/es/tree';
import { Key, useRef } from 'react';

interface IExtendParam {
  parentKeys?: Array<Key>;
  parentNodes?: Array<Pick<DataNode, 'title' | 'key' | 'disabled'>>;
  childrenKeys?: Array<Key>;
  childrenNodes?: Array<DataNode & IExtendParam>;
}

interface TUseTreeType {
  treeData: DataNode[];
  treeDataMap: Record<string, DataNode & IExtendParam>;
  treeDataArray: DataNode[];
  getTreeNodeInfo: (key: Key) => DataNode;
}

/**
 * 自定义 useTree
 *
 * @param {Array<Object>} data - 需要遍历的数据数组。
 * @param {Object} [fieldNames] - 字段名称映射对象，用于将源数据中的字段映射到新对象中。
 * @param {number} [level] - 递归层级限制，如果指定了层级，超过该层级的子节点将不再递归。
 * @returns {Array<Object>} - 生成的新对象数组
 */

export const useTree = (data: DataNode[], fieldNames: Record<string, string>, maxLevel: number): TUseTreeType => {
  const treeData = fieldNamesLoop(data, fieldNames, maxLevel);
  const treeNodeMapRef = useRef<Record<string, DataNode & IExtendParam>>({}); // 树中所有结点的枚举
  const flatTreeDataRef = useRef<DataNode[]>([]); // 打平所有的节点

  // 向下递归 - children
  // @ts-ignore
  const deepChildren = (source) => {
    // @ts-ignore
    return source?.reduce((pre, cur) => {
      const { key, title, disabled } = cur;
      if (cur?.children?.length > 0) {
        return [...pre, { key, title, disabled }, ...deepChildren(cur.children)];
      }
      return [...pre, { key, title, disabled }];
    }, []);
  };

  // 获取某个节点信息
  const getTreeNodeInfo = (key: Key): DataNode & IExtendParam => {
    return treeNodeMapRef.current?.[key as string | number];
  };

  // 初始化
  const initTreeNodeMap = (data: DataNode[]) => {
    const treeNodeMap: Record<string, DataNode & IExtendParam> = {}; // 树中所有结点的枚举
    const flatTreeData: Array<DataNode & IExtendParam> = [];

    // 递归循环，往节点中插入信息
    const loop = (data: DataNode[], parentNodes: DataNode[] = [], parentKeys: Key[] = []): DataNode[] => {
      return data?.map((item) => {
        const { children, ...rest } = item;
        const title = item.title;

        const options = {
          ...rest,
          title,
          key: item.key,
          parentNodes: parentNodes?.slice(),
          parentKeys: parentKeys?.slice(),
        };

        if (item.children) {
          const childrenNodes = deepChildren(children);
          const extendParams = {
            childrenKeys: childrenNodes?.map((item: DataNode) => item.key),
            childrenNodes: childrenNodes,
            children: loop(
              item.children,
              [...parentNodes, { key: item.key, title: item.title, disabled: item.disabled }],
              [...parentKeys, item.key],
            ),
          };
          Object.assign(options, extendParams);
        }

        treeNodeMap[item.key as string] = { ...options };
        flatTreeData.push(options);
        return options;
      });
    };
    // 赋值给treeNodeMapRef
    treeNodeMapRef.current = treeNodeMap;
    flatTreeDataRef.current = flatTreeData;
    return loop(data);
  };

  // 实例化
  initTreeNodeMap(treeData);

  return {
    treeData: treeData,
    treeDataMap: treeNodeMapRef.current,
    treeDataArray: flatTreeDataRef.current,
    getTreeNodeInfo: getTreeNodeInfo,
  };
};
