import styled, { css } from 'styled-components';

export type MainBubbleProps = {
  backgroundImage?: string;
  id?: any;
};

export type SmartBubbleProps = {
  backgroundImage?: string;
  origin?: { l: number; t: number };
  float: number;
  id?: any;
};

export const Container = styled.div`
  display: flex;
  position: relative;

  & > div:first-child {
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
  }

  & > div:nth-child(2) {
    display: flex;
    padding-top: 40px;
    flex-wrap: wrap;
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
  }
`;

export const ProjectBubblesContainer = styled.div`
  z-index: 10;
  display: flex;
  position: relative;
  height: 40vh;
  margin: 4vh 0;
  width: 100%;
  /* background-color: red; */
`;

export const MainBubble = styled.div<MainBubbleProps>`
  ${({ backgroundImage, id }) => css`
    width: 270px;
    height: 270px;
    border-radius: 100%;
    background: url(${backgroundImage}) no-repeat;
    margin-left: ${id % 2 === 0 ? 55 : 20}%;
  `}
  position: absolute;
  background-size: cover;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
    inset 4px 4px 20px rgba(250, 250, 250, 0.5);
  animation: moveBubble 3s ease-in-out infinite alternate;
  transform: translateY(10px);
  transition: ease 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;

  .popover {
    background: white;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 2px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 8px;
    visibility: hidden;
    opacity: 0;
    z-index: 50;
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

  @keyframes moveBubble {
    from {
      transform: translate(0, 0);
    }
  }
`;

export const SmartBubble = styled.div<SmartBubbleProps>`
  ${({ backgroundImage, origin, float, id }) => css`
    background: url(${backgroundImage}) no-repeat;
    left: ${origin.l}px;
    top: ${origin.t}px;
    transform: translate(0, ${float}px);
    bottom: auto;
    margin-left: ${id % 2 === 0 ? 55 : 20}%;
    margin-top: 10px;
  `}
  position: absolute;
  background-size: contain;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
    inset 4px 4px 20px rgba(250, 250, 250, 0.5);
  width: 64px;
  height: 64px;
  border-radius: 50px;
  animation: moveBubble 3s ease-in-out infinite alternate;
  z-index: 10;
  @keyframes moveBubble {
    from {
      transform: translate(0, 0);
    }
  }
`;

export const ProjectInfoContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 40vh;
  margin: 4vh 0;
  padding: 5% 5% 0 40%;
  text-align: end;
`;
