import styled, { css } from 'styled-components';

export type ButtonProps = {
  direction: string;
};

export const Container = styled.div`
  position: fixed;
  height: 100%;
  left: 50px;
  width: 80px;
  z-index: 20;

  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 834px) {
    width: 60px;
    bottom: 20px;
    left: 0;
    right: 47%;
    height: 80px;
    width: 100%;
    button {
      svg {
        margin-top: -4px;
        width: 30px;
        height: 30px;
      }
    }
  }
  @media (max-width: 428px) {
    width: 40px;
    bottom: 20px;
    height: 40px;
    left: 45%;
    right: 45%;

    button {
      svg {
        margin-top: -4px;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  ${({ direction }) => css`
    ${() =>
      direction === 'up'
        ? css`
            padding-bottom: 10px;
            margin-top: 5vh;
            position: fixed;
            @media (max-width: 834px) {
              display: none;
            }
          `
        : css`
            padding-top: 10px;
            margin-top: 88vh;
            position: fixed;
            @media (max-width: 834px) {
              margin-top: 0;
              padding-bottom: 0;
              margin-left: 46%;
            }
            @media (max-width: 428px) {
              margin-left: 0;
              margin-top: -30px;
              width: 50px;
              height: 50px;
            }
          `};
  `}
  cursor: pointer;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 100%;
  border: none;
  animation: alternate infinite scrollAnimate 2s ease;

  @keyframes scrollAnimate {
    from {
      transform: translateY(-1rem);
    }
  }
`;
