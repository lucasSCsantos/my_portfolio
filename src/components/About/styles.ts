import styled, { css } from 'styled-components';

export type BubbleProps = {
  backgroundImage: string;
  size: number;
  margin: number;
  float: number;
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
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  & > div:nth-child(2) {
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const Bubble = styled.div<BubbleProps>`
  margin: 0 10px;
  ${({ backgroundImage, size, margin, float }) => css`
    background-image: url(${backgroundImage});
    width: ${size}px;
    height: ${size}px;
    margin-top: ${margin}px;
    transform: translate(0, ${float}px);
  `}
  background-size: contain;
  border-radius: 100%;
  box-shadow: inset 0px 3px 40px rgba(250, 250, 250, 0.7);
  animation: moveBubble 2s ease-in-out infinite alternate;
  @keyframes moveBubble {
    from {
      transform: translate(0, 0);
    }
  }
`;
