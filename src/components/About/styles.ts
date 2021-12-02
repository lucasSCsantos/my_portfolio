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
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillContainer = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  & > div:nth-child(2) {
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 40px 0;
  }
`;

export const Bubble = styled.div<BubbleProps>`
  ${({ backgroundImage, size, margin, float }) => css`
    background: url(${backgroundImage}) no-repeat;
    width: ${size}px;
    height: ${size}px;
    margin-top: ${margin}px;
    margin-right: ${margin - 5}px;
    transform: translate(0, ${float}px);
  `}
  position: relative;
  background-size: contain;
  border-radius: 100%;
  z-index: 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.background};
  animation: moveBubble 2s ease-in-out infinite alternate;
  @keyframes moveBubble {
    from {
      transform: translate(0, 0);
    }
  }

  div {
    background: white;
    position: absolute;
    left: 30px;
    top: -20px;
    border-radius: 2px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 8px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
  }

  &:hover {
    div {
      visibility: visible;
      opacity: 1;
    }
  }
`;
