import { AdvanceSelect } from '@flylib/antd';
import { Button, Form } from 'antd';
import React from 'react';

interface IFormValue {
  invoiceType: string[];
}

const App: React.FC = () => {
  const [form] = Form.useForm<IFormValue>();

  const onFinish = (values: IFormValue) => {
    console.log('xxxx-1', values);
  };

  const dataSource = [
    { label: '增值税普通发票', value: '1' },
    { label: '增值税电子普通发票', value: '2' },
    { label: '机动车销售统一发票', value: '3' },
    { label: '定额发票', value: '4' },
  ];

  return (
    <Form form={form} onFinish={onFinish} style={{ marginTop: 20 }}>
      <Form.Item name="invoiceType" label="发票类型选择" help="一次性最多选3个">
        <AdvanceSelect options={dataSource} mode="multiple" title="发票类型" maxCount={3} allowClear />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
