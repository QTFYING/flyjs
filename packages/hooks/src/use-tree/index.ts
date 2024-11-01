import type { DataNode } from 'antd/es/tree';
import { Key, useRef } from 'react';

interface IExtendParam {
  parentKeys?: Array<Key>;
  parentNodes?: Array<Pick<DataNode, 'title' | 'key' | 'disabled'>>;
  childrenKeys?: Array<Key>;
  childrenNodes?: Array<DataNode & IExtendParam>;
}

/**
 * 自定义 useTree
 * @description 主要是处理网站中的各种树形数据
 * 目前方法基本上满足网站中所有的需求
 */

export const useTree = (data: DataNode[]) => {
  const treeNodeMapRef = useRef<Record<string, DataNode & IExtendParam>>({}); // 树中所有结点的枚举
  const flatTreeDataRef = useRef<DataNode[]>([]); // 打平所有的节点

  // 向下递归 - children
  const deepChildren = (source) => {
    return source?.reduce((pre, cur) => {
      const { key, title, disabled } = cur;
      if (cur?.children?.length > 0) {
        return [
          ...pre,
          { key, title, disabled },
          ...deepChildren(cur.children),
        ];
      }
      return [...pre, { key, title, disabled }];
    }, []);
  };

  // 获取某个节点信息
  const getTreeNodeInfo = (key): DataNode & IExtendParam =>
    treeNodeMapRef.current?.[key];

  // 初始化
  const initTreeNodeMap = (data: DataNode[]) => {
    const treeNodeMap: Record<string, DataNode & IExtendParam> = {}; // 树中所有结点的枚举
    const flatTreeData: Array<DataNode & IExtendParam> = [];

    // 递归循环，往节点中插入信息
    const loop = (
      data: DataNode[],
      parentNodes: DataNode[] = [],
      parentKeys: Key[] = [],
    ): DataNode[] => {
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
            childrenKeys: childrenNodes?.map((item) => item.key),
            childrenNodes: childrenNodes,
            children: loop(
              item.children,
              [
                ...parentNodes,
                { key: item.key, title: item.title, disabled: item.disabled },
              ],
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
  initTreeNodeMap(data);

  return {
    treeData: data,
    treeDataMap: treeNodeMapRef.current,
    treeDataArray: flatTreeDataRef.current,
    getTreeNodeInfo: getTreeNodeInfo,
  };
};
