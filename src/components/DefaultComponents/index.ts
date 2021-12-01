import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const { sizes, colors } = theme;
const sizeArr = Object.values(sizes);

export type HeadingProps = {
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  fontWeight?: 100 | 400 | 700;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export type TextProps = {
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  fontWeight?: 100 | 400 | 700;
  lineHeight?: string | number;
};

export type AreaProps = {
  backgroundColor?: keyof typeof colors;
  width?: number;
  height?: number | string;
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ color = 'text', size, fontWeight = 700, lineHeight = 1.5 }) => css`
    font-size: ${sizes[size]};
    color: ${colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    @media (max-width: 1440px) {
      font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 1]};
    }
    @media (max-width: 1024px) {
      font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 2]};
    }
    @media (max-width: 834px) {
      font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 3]};
    }
    @media (max-width: 428px) {
      font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 4]};
    }
  `}
`;

export const Text = styled('p')<TextProps>`
  ${({ color = 'text', size, fontWeight = 600, lineHeight = 1.5 }) => css`
    font-size: ${sizes[size]};
    color: ${colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    @media (max-width: 1440px) {
      font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 1]};
    }
    @media (max-width: 1024px) {
      font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 2]};
    }
    @media (max-width: 834px) {
      font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 3]};
    }
    @media (max-width: 428px) {
      font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 4]};
    }
  `}
`;

export const Area = styled.div<AreaProps>`
  ${({ backgroundColor = 'background', width, height }) => css`
    background-color: ${colors[backgroundColor]};
    width: ${width}%;
    height: ${typeof height === 'number' ? `${height}rem` : height};
    position: relative;
    display: flex;
  `}
`;
