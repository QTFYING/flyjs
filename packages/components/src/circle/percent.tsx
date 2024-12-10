import React, { FC } from 'react';

interface IColoredRingProps {
  /**
   * @description 判断条件
   * @default []
   */
  segments: { color: string; percentage: number }[];
  /**
   * @description 外环直径
   * @default 200
   */
  size?: number;
  /**
   * @description 环的厚度
   * @default 20
   */
  strokeWidth?: number;
}

export const PercentCircle: FC<IColoredRingProps> = ({ segments, size = 200, strokeWidth = 20 }) => {
  const radius = (size - strokeWidth) / 2; // 半径
  const circumference = 2 * Math.PI * radius; // 圆周长

  let dashOffset = 0; // 每段的起始位置偏移

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {segments.map((segment, index) => {
        const { color, percentage } = segment;
        const segmentLength = (percentage / 100) * circumference; // 当前段的长度
        const gap = circumference - segmentLength; // 间隙部分

        const circleElement = (
          <circle
            key={index}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${segmentLength} ${gap}`}
            strokeDashoffset={-dashOffset}
          />
        );

        dashOffset += segmentLength;
        return circleElement;
      })}
    </svg>
  );
};
