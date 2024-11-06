declare interface Window {
  // _hmt: 百度统计的关键字
  readonly _hmt: any[];
}

declare interface Document {
  getElementById(elementId: string): HTMLElement | null;
  getElementsByClassName(classNames: string): HTMLCollectionOf<HTMLElement>;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.css';
declare module '*.less';

declare type Key = string | number;
