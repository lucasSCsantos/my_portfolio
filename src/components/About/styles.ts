import styled, { css } from 'styled-components';

export type BubbleProps = {
  backgroundImage: string;
  size: number;
  margin: number;
  float: number;
  zindex: number;
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
  ${({ backgroundImage, size, margin, float, zindex }) => css`
    background: url(${backgroundImage}) no-repeat;
    width: ${size}px;
    height: ${size}px;
    margin-top: ${margin}px;
    margin-right: ${margin - 5}px;
    transform: translate(0, ${float}px);
    z-index: ${zindex};
  `}
  position: relative;
  background-size: contain;
  border-radius: 100%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.background};
  animation: moveBubble 2s ease-in-out infinite alternate;
  @keyframes moveBubble {
    from {
      transform: translate(0, 0);
    }
  }

  .popover {
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

  .triangle {
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    position: absolute;
    left: 5px;
    border-left: 5px solid transparent;
    bottom: -5px;
  }

  &:hover {
    .popover {
      visibility: visible;
      opacity: 1;
    }
  }
`;
