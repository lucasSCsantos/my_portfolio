import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export type HeadingProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  fontWeight?: 100 | 400 | 700;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export type TextProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  fontWeight?: 100 | 400 | 700;
  lineHeight?: string | number;
};

export type AreaProps = {
  backgroundColor?: keyof typeof theme.colors;
  width?: number;
  height?: number | string;
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ color = 'text', size, fontWeight = 700, lineHeight = 1.5 }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;

export const Text = styled('p')<TextProps>`
  ${({
    color = 'text',
    size = 'xsmall',
    fontWeight = 700,
    lineHeight = 1.5
  }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;

export const Area = styled('div')<AreaProps>`
  ${({ backgroundColor = 'background', width, height }) => css`
    background-color: ${theme.colors[backgroundColor]};
    width: ${width}%;
    height: ${typeof height === 'number' ? `${height}rem` : height};
  `}
`;
