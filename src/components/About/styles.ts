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

  & > div:nth-child(1) {
    /* z-index: 50; */
  }

  & > div:nth-child(2) {
    overflow: hidden;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );

    h1 {
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 834px) {
    flex-direction: column;
    h1 {
      color: ${({ theme }) => theme.colors.textLight};
      font-size: ${({ theme }) => theme.sizes.normal};
      font-weight: 1000;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
      font-size: ${({ theme }) => theme.sizes.small};
    }
    p {
      color: ${({ theme }) => theme.colors.textLight};
      font-size: ${({ theme }) => theme.sizes.xxsmall};
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    & > div:first-child {
      height: 80%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
      div {
        display: block;
        height: fit-content;
        width: 80%;
        left: 10%;
        right: 10%;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
    & > div:nth-child(2) {
      width: 100%;
    }
  }
  @media (max-width: 428px) {
    h1 {
      font-size: ${({ theme }) => theme.sizes.small};
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
      font-size: ${({ theme }) => theme.sizes.xxsmall};
      width: 90%;
    }
    p {
      font-size: ${({ theme }) => theme.sizes.xxxsmall};
    }
    & > div:first-child {
      height: 60%;
      div {
        width: 80%;
        left: 10%;
        right: 10%;
      }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  & > div:nth-child(2) {
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px 0 60px 0;
  }
  @media (max-width: 834px) {
    & > div:nth-child(2) {
      width: 60%;
      margin: 10px 0 20px 0;
    }
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

    @media (max-width: 1440px) {
      width: ${size - 4}px;
      height: ${size - 4}px;
      margin-right: ${margin - 10}px;
    }
    @media (max-width: 1024px) {
      width: ${size - 16}px;
      height: ${size - 16}px;
      margin-right: ${margin - 10}px;
    }
    @media (max-width: 834px) {
      width: ${size - 20}px;
      height: ${size - 20}px;
      margin-right: ${margin - 10}px;
    }
    @media (max-width: 428px) {
      width: ${size - 32}px;
      height: ${size - 32}px;
      margin-right: 5px;
    }
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
    left: 10px;
    top: -10px;
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

  @media (max-width: 1440px) {
    .popover {
      left: 0;
      top: -20px;
      font-size: 12px;
      transition: visibility 0s, opacity 0.2s linear;
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 834px) {
    .popover {
      left: 0;
      top: 20px;
      padding: 4px;

      font-size: 12px;
      transition: visibility 0s, opacity 0.2s linear;
    }

    .triangle {
      border-right: 5px solid transparent;
      border-bottom: 5px solid white;
      border-top: none;
      border-left: 5px solid transparent;
      bottom: 100%;
    }
  }
  @media (max-width: 428px) {
  }
`;

export const FishContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;

  img {
    width: 150px;
    position: absolute;
    opacity: 0.7;
  }

  .fish1 {
    top: 50%;
    left: 20px;
  }

  .fish2 {
    right: 20px;
    top: 85%;
  }

  .fish3 {
    right: 40px;
    top: 10%;
  }

  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 834px) {
    display: none;
  }
`;

export const AboutContainer = styled.div`
  width: 60%;
  position: absolute;
  right: 40px;
  height: 40%;
  align-self: center;
  display: flex;
  text-align: end;
  align-items: flex-end;
  flex-direction: column;
`;
