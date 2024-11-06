import { DownOutlined } from '@ant-design/icons';
import { useTree } from '@flylib/hooks';
import { Tree } from 'antd';
import beautify from 'js-beautify';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const App: React.FC = () => {
  const title = '部门';
  const dataSource = new Array(2).fill(null).map((_item, index) => ({
    value: `${index + 1}`,
    label: `${title}${index + 1}`,
    children: new Array(2).fill(null).map((_i, k) => ({
      value: `${index + 1}_${k + 1}`,
      label: `${title}${index + 1}_${k + 1}`,
    })),
  }));

  const { treeData } = useTree(dataSource, { key: 'value', title: 'label' });

  return (
    <>
      <Tree showLine checkable blockNode={true} treeData={treeData} switcherIcon={<DownOutlined />} />

      <SyntaxHighlighter
        language="json"
        showLineNumbers={true}
        wrapLines={true}
        style={atelierLakesideLight}
        lineProps={() => {
          const style = { display: 'block', cursor: 'pointer' };
          return { style };
        }}
      >
        {beautify(JSON.stringify(treeData), { indent_size: 2, space_in_empty_paren: true })}
      </SyntaxHighlighter>
    </>
  );
};

export default App;
