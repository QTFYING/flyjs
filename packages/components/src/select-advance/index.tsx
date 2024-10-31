import type { SelectProps } from 'antd';
import { Checkbox, Row, Select, Tag, Typography } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useEffect, useState } from 'react';
interface IAdvanceSelectProps {
  title?: string;
  mode?: SelectProps['mode'];
  showSelectAll?: boolean;
  options: SelectProps['options'];
  onChange?: (options: unknown) => void;
  value?: string[];
}

/**
 * @description 封装改造antd的select，后序会集成更复杂的业务功能
 * @param mode  非必传， select的形态，如不传则为单选
 * @param title 非必传，多选时有效，显示
 * @param showSelectAll 非必传，多选时有效，是否隐藏多选按钮，默认为true，显示
 * @param options select的options
 * @param title modal的title
 * @param onChange form自动注入，自定义form-item
 * @param value form自动注入，如果有值，则自动填入form表单中
 */

export function AdvanceSelect(props: IAdvanceSelectProps & SelectProps) {
  const {
    options = [],
    title = '全选',
    onChange,
    placeholder,
    mode,
    ...rest
  } = props;
  const [selectAllSt, setSelectAllSt] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<
    Array<string | number | undefined | null>
  >([]);

  useEffect(() => {
    setSelectValue(props?.value ?? []);
    if (props?.value?.length === options?.length) setSelectAllSt(true);
  }, [props, options]);

  const onClickSelectAll = (event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      const option = options.map((item) => item.value);
      setSelectValue(option);
      void onChange?.(option);
    } else {
      setSelectValue([]);
      void onChange?.([]);
    }
    setSelectAllSt(event.target.checked);
  };

  const onChangeSelect = (value: any) => {
    setSelectValue(value);
    void onChange?.(value);
    setSelectAllSt(value.length === options.length);
  };

  const summary = () => {
    return (
      <Row justify="space-between">
        <Typography.Text
          strong
        >{`${title} (${selectValue.length}/${options.length})`}</Typography.Text>
        <Checkbox
          indeterminate={
            selectValue?.length !== options?.length && !!selectValue?.length
          }
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
      value={selectValue}
      placeholder={placeholder || '请选择'}
      {...(mode ? { mode: mode, tagRender } : null)}
      options={
        mode ? [{ label: summary(), options: options }] : (options as [])
      }
      onChange={onChangeSelect}
    />
  );
}
