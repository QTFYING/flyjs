import type { SelectProps } from 'antd';
import { Checkbox, message, Row, Select, Tag, Typography } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useEffect, useState } from 'react';
interface IAdvanceSelectProps {
  title?: string;
  mode?: SelectProps['mode'];
  showSelectAll?: boolean;
  options: SelectProps['options'];
  onChange?: (options: unknown) => void;
  value?: string[];
  /** 改变select的option时触发 */
  onChangeOptions?: (value: any[], options: any[]) => void;
}

/**
 * @description 封装改造antd的select，后序会集成更复杂的业务功能
 * @param mode  非必传， select的形态，如不传则为单选
 * @param title 非必传，多选时有效，显示
 * @param showSelectAll 非必传，多选时有效，是否隐藏多选按钮，默认为true，显示
 * @param options select的options
 * @param onChange form自动注入，自定义form-item
 * @param value form自动注入，如果有值，则自动填入form表单中
 *  @param maxCount 最大能选择的数量;
 * @param onChangeOptions 修改select本身的onChange为onChangeOptions
 */

export function AdvanceSelect(props: IAdvanceSelectProps & SelectProps) {
  const {
    options = [],
    title = '全选',
    onChange,
    placeholder,
    mode,
    maxCount = 0,
    value,
    ...rest
  } = props;
  const [selectAllSt, setSelectAllSt] = useState<boolean>(false);

  useEffect(() => {
    setSelectAllSt(value?.length === options?.length);
  }, [props, options]);

  const onClickSelectAll = (event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      const ids = options.map((item) => item.value);
      void onChange?.(rest?.labelInValue ? options : ids);
    } else {
      void onChange?.([]);
    }
    setSelectAllSt(event.target.checked);
  };

  const onChangeSelect = (value: any) => {
    if (!!maxCount && value?.length > maxCount) {
      void message.warning(`最多只能选择${maxCount}个`);
      return;
    }

    const opts = value?.map((item: any) => {
      if (item instanceof Object && !Array.isArray(item)) {
        return options?.find((i) => i.value === item.value);
      }
      return options?.find((i) => i.value === item);
    });

    if (props?.onChangeOptions) props?.onChangeOptions?.(value, opts);

    void onChange?.(rest?.labelInValue ? opts : value);
    setSelectAllSt(value.length === options.length);
  };

  const summary = () => {
    return (
      <Row justify="space-between">
        <Typography.Text strong>
          {`${title} (${value?.length ?? 0}/${options?.length})`}
        </Typography.Text>
        <Checkbox
          indeterminate={value?.length !== options?.length && !!value?.length}
          checked={selectAllSt}
          onChange={onClickSelectAll}
        />
      </Row>
    );
  };

  const tagRender: SelectProps['tagRender'] = (props) => {
    const { label, closable, onClose } = props;

    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
      >
        {label}
      </Tag>
    );
  };

  return (
    <Select
      optionFilterProp="label"
      {...rest}
      value={value}
      placeholder={placeholder || '请选择'}
      {...(mode ? { mode: mode, tagRender } : null)}
      options={
        mode ? [{ label: summary(), options: options }] : (options as [])
      }
      onChange={onChangeSelect}
    />
  );
}
