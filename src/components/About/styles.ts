import styled, { css } from 'styled-components';

export type BubbleProps = {
  backgroundImage: string;
};

export const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;

  & > div:nth-child(2) {
    align-items: center;
    flex-direction: column;

    h1 {
      background-color: red;
    }
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillContainer = styled.div`
  width: 50%;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: red;
`;

export const Bubble = styled.div<BubbleProps>`
  ${({ backgroundImage }) => css`
    background-image: url(${backgroundImage});
  `}
  background-size: contain;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  box-shadow: inset 0px 3px 40px rgba(250, 250, 250, 0.7);
`;
