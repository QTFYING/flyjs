import { type FC, Fragment, ReactNode } from 'react';

interface IIFProps {
  /**
   * @description 判断条件
   * @default "默认值"
   */
  isTrue: boolean;
  /**
   * @description 子组件
   * @default null
   */
  children?: ReactNode;
}

export const If: FC<IIFProps> = ({ isTrue, children }) => {
  if (isTrue) {
    return <Fragment>{children}</Fragment>;
  } else {
    return null;
  }
};
