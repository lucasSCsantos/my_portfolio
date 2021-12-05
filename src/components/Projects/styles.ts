import styled, { css } from 'styled-components';

export type MainBubbleProps = {
  backgroundImage?: string;
};

export type SmartBubbleProps = {
  backgroundImage?: string;
  origin?: { l: number; t: number };
};

export const Container = styled.div`
  display: flex;
  position: relative;

  & > div:nth-child(2) {
    display: flex;

    flex-wrap: wrap;
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
  }
`;

export const ProjectBubblesContainer = styled.div`
  display: flex;
  position: relative;
  height: 450px;
  margin: 20px 0;
  /* background-color: red; */
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MainBubble = styled.div<MainBubbleProps>`
  ${({ backgroundImage }) => css`
    width: 270px;
    height: 270px;
    border-radius: 100%;
    background: url(${backgroundImage}) no-repeat;
  `}
  position: relative;
  background-size: contain;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SmartBubble = styled.div<SmartBubbleProps>`
  ${({ backgroundImage, origin }) => css`
    background: url(${backgroundImage}) no-repeat;
    left: ${origin.l}px;
    top: ${origin.t}px;
    /* right: auto; */
    bottom: auto;
  `}
  position: absolute;
  background-size: contain;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
    inset 4px 4px 20px rgba(250, 250, 250, 0.5);
  /* background-color: ${({ theme }) => theme.colors.background}; */
  width: 64px;
  height: 64px;
  border-radius: 50px;

  /* animation: moveBubble 2s ease-in-out infinite alternate; */
  @keyframes moveBubble {
    from {
      transform: translate(0, 0);
    }
  }
`;
