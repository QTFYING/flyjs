import { If, SelectAdvance } from '@efcs/components';
import type { RadioChangeEvent } from 'antd';
import { Button, Form, Radio } from 'antd';
import beautify from 'js-beautify';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IFormValue {
  valType: '1' | '2';
  invoiceType: string[];
}

const App: React.FC = () => {
  const [form] = Form.useForm<IFormValue>();
  const [resultJSON, setResultJSON] = useState('');
  const [valType, setValType] = useState('1');

  const onFinish = (values: IFormValue) => {
    setResultJSON(JSON.stringify(values, null, 2));
  };

  const onChange = (e: RadioChangeEvent) => {
    form.setFieldValue('invoiceType', []);
    setValType(e.target.value);
  };

  const dataSource = [
    { label: '增值税普通发票', value: '1' },
    { label: '增值税电子普通发票', value: '2' },
    { label: '机动车销售统一发票', value: '3' },
    { label: '定额发票', value: '4' },
  ];

  return (
    <div className="page">
      <Form
        form={form}
        onFinish={onFinish}
        style={{ marginTop: 20 }}
        initialValues={{ valType: '1' }}
      >
        <Form.Item name="valType" label="获取值类型">
          <Radio.Group
            onChange={onChange}
            options={[
              { label: 'string[]', value: '1' },
              { label: 'option[]', value: '2' },
            ]}
          />
        </Form.Item>

        <Form.Item noStyle shouldUpdate>
          {() => {
            const valType = form.getFieldValue('valType');
            return (
              <Form.Item name="invoiceType" label="发票类型选择">
                <SelectAdvance
                  options={dataSource}
                  mode="multiple"
                  title="发票类型"
                  labelInValue={valType === '2'}
                />
              </Form.Item>
            );
          }}
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            提交
          </Button>
        </Form.Item>
      </Form>

      <If isTrue={resultJSON}>
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
          {beautify(resultJSON, { indent_size: 2, space_in_empty_paren: true })}
        </SyntaxHighlighter>
      </If>
    </div>
  );
};

export default App;
