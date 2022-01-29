import styled, { css } from 'styled-components';

export type MainBubbleProps = {
  backgroundImage?: string;
  id?: any;
};

export type SmartBubbleProps = {
  backgroundImage?: string;
  origin?: {
    l: number;
    t: number;
    ls: number;
    ts: number;
    lx: number;
    tx: number;
  };
  float: number;
  id?: any;
};

export type ProjectInfoProps = {
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
  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 834px) {
    & > div:nth-child(2) {
      width: 100%;
      position: absolute;
      background-color: transparent;
      background-image: none;
      z-index: 1;
    }
    & > div:first-child {
      z-index: 0;
      width: 100%;
      background-image: linear-gradient(
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
      );
    }
  }
  @media (max-width: 428px) {
  }
`;

export const ProjectBubblesContainer = styled.div`
  z-index: 10;
  display: flex;
  position: relative;
  height: 40vh;
  margin: 4.8vh 0;
  width: 100%;
  @media (max-width: 834px) {
    height: 20vh;
  }
  @media (max-width: 428px) {
  }
`;

export const MainBubble = styled.div<MainBubbleProps>`
  ${({ backgroundImage, id }) => css`
    width: 270px;
    height: 270px;
    border-radius: 100%;
    background: url(${backgroundImage}) no-repeat;
    margin-left: ${id % 2 === 0 ? 55 : 20}%;

    @media (max-width: 1440px) {
      margin-left: ${id % 2 === 0 ? 38 : 13}%;
    }
    @media (max-width: 1024px) {
      margin-left: ${id % 2 === 0 ? 30 : 18}%;
    }
    @media (max-width: 834px) {
      width: 200px;
      height: 200px;
      margin-left: ${id % 2 === 0 ? 63 : 16}%;
    }
    @media (max-width: 428px) {
      width: 100px;
      height: 100px;
      margin-left: ${id % 2 === 0 ? 57 : 13}%;
    }
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

    @media (max-width: 1440px) {
      width: 54px;
      height: 54px;
      margin-left: ${id % 2 === 0 ? 40 : 15}%;
    }
    @media (max-width: 1024px) {
      width: 54px;
      height: 54px;
      margin-left: ${id % 2 === 0 ? 30 : 20}%;
    }
    @media (max-width: 834px) {
      margin-left: ${id % 2 === 0 ? 59 : 12}%;
      left: ${origin.ls}px;
      top: ${origin.ts}px;
      margin-top: -10px;
    }
    @media (max-width: 428px) {
      margin-left: ${id % 2 === 0 ? 38 : -5}%;
      left: ${origin.lx}px;
      top: ${origin.tx}px;
      width: 32px;
      height: 32px;
      margin-top: -60px;
    }
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

export const ProjectInfoContainer = styled.div<ProjectInfoProps>`
  ${({ id }) => css`
    @media (max-width: 1440px) {
    }
    @media (max-width: 1024px) {
    }
    @media (max-width: 834px) {
      margin-left: ${id % 2 === 0 ? 10 : 60}%;
      margin-top: 8vh;
      padding: 0;
      text-align: left;
      /* background-color: red; */
      width: 35%;
      height: 25vh;
      h2,
      p {
        color: ${({ theme }) => theme.colors.textLight};
        text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
      }
      h2 {
        font-size: 200%;
      }
      p {
        font-weight: 200;
        font-size: 120%;
      }
    }
    @media (max-width: 428px) {
      margin-top: 4vh;
      height: 20vh;
      /* width: 32%; */
      margin-left: ${id % 2 === 0 ? 10 : 60}%;
      h2 {
        font-size: 120%;
      }
      p {
        font-weight: 200;
        font-size: 80%;
      }
    }
  `}
  width: 100%;
  height: 40vh;
  margin: 4.8vh 0;
  padding: 5% 5% 0 35%;
  text-align: end;
  .vertical-lign {
    height: 230px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.text};
    margin: 5% 5% 0 60%;
  }
  @media (max-width: 1440px) {
    .vertical-lign {
      height: 220px;
    }
  }
  @media (max-width: 1024px) {
    .vertical-lign {
      height: 320px;
    }
  }
  @media (max-width: 834px) {
    .vertical-lign {
      display: none;
    }
  }
  @media (max-width: 428px) {
  }
`;
