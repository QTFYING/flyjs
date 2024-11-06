import { DownOutlined } from '@ant-design/icons';
import { useTree } from '@flylib/hooks';
import { Card, Space, Tree, Typography } from 'antd';
import React, { Key, useCallback, useMemo, useState } from 'react';

const { Text } = Typography;

const App: React.FC = () => {
  const title = '部门';
  const dataSource = new Array(2).fill(null).map((_item, index) => ({
    value: `${index + 1}`,
    label: `${title}${index + 1}`,
    children: new Array(2).fill(null).map((_i, k) => ({
      value: `${index + 1}_${k + 1}`,
      label: `${title}${index + 1}_${k + 1}`,
      children: new Array(2).fill(null).map((_m, n) => ({
        value: `${index + 1}_${k + 1}_${n + 1}`,
        label: `${title}${index + 1}_${k + 1}_${n + 1}`,
      })),
    })),
  }));

  const { treeData, getTreeNodeInfo } = useTree(dataSource, { key: 'value', title: 'label' });
  const [activeKey, setActiveKey] = useState<Key>(null);

  const onSelect = useCallback((_, event) => {
    setActiveKey(event.node.key);
  }, []);

  const treeNodeInfo = useMemo(() => getTreeNodeInfo(activeKey), [activeKey]);

  return (
    <>
      <Tree showLine blockNode={true} onSelect={onSelect} treeData={treeData} switcherIcon={<DownOutlined />} />

      <Card title="选中节点信息如下" size="small" style={{ marginTop: 20 }}>
        <Space direction="vertical">
          <Text type="secondary">节点： {(activeKey as '') ?? '-'}</Text>
          <Text type="secondary">该节点所有父节点： {treeNodeInfo?.parentKeys?.join('、') ?? '-'}</Text>
          <Text type="secondary">该节点所有子节点： {treeNodeInfo?.childrenKeys?.join('、') ?? '-'}</Text>
          <Text type="secondary">该节点直属父级节点： {treeNodeInfo?.parentKeys?.at(-1) ?? '-'}</Text>
          <Text type="secondary">
            该节点父级PATH： {treeNodeInfo?.parentNodes?.map((item) => item.title).join('-') ?? '-'}
          </Text>
        </Space>
      </Card>
    </>
  );
};

export default App;
