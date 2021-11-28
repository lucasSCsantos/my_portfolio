import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  & > div:first-child {
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
  }

  & > div:nth-child(2) {
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .heroTitle {
    margin-right: 0.75rem;
    margin-bottom: 15rem;
    position: relative;
  }

  .heroSubtitle {
    margin-left: 0.65rem;
    margin-top: 8rem;
    position: relative;
    z-index: 10;
  }

  .titleCover {
    position: absolute;
    background-color: transparent;
    border: 6px solid ${({ theme }) => theme.colors.text};
    border-right: none;
    top: 6.875rem;
    left: -0.625rem;
    width: 41.5625rem;
    height: 6.25rem;
  }

  .subtitleCover {
    position: absolute;
    background-color: transparent;
    border: 6px solid ${({ theme }) => theme.colors.textLight};
    border-left: none;
    top: 6.875rem;
    left: -0.625rem;
    width: 29.375rem;
    height: 6.25rem;
  }

  @media (max-width: 1440px) {
    .heroSubtitle {
      margin-left: 0.65rem;
      margin-top: 1rem;
      position: relative;
      z-index: 10;
    }

    .titleCover {
      height: 5rem;
      top: 4.2rem;
    }

    .subtitleCover {
      height: 5rem;
      top: 4.2rem;
      width: 22rem;
    }
  }
  @media (max-width: 1024px) {
    .heroTitle {
      margin-left: 6rem;
    }

    .titleCover {
      height: 3.6rem;
      top: 2.6rem;
      border-width: 0.25rem;
    }

    .subtitleCover {
      height: 3.2rem;
      top: 2.8rem;
      width: 14rem;
      border-width: 0.25rem;
    }
  }
  @media (max-width: 834px) {
    display: flex;
    flex-direction: column;

    & > div:first-child,
    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 90%;
    }

    .heroTitle {
      margin: 0;
      top: 1rem;
      display: flex;
      flex-direction: column;
      h1 {
        justify-content: flex-end;
        text-align: end;
        font-size: ${({ theme }) => theme.sizes.normal};
      }
      p {
        justify-content: flex-start;
        text-align: start;
        font-size: ${({ theme }) => theme.sizes.xxsmall};
      }
    }

    .heroSubtitle {
      margin: 0;
      top: -4rem;
      display: flex;
      flex-direction: column;
      h1 {
        justify-content: flex-start;
        text-align: start;
        font-size: ${({ theme }) => theme.sizes.normal};
      }
    }

    .titleCover {
      width: 28rem;
      height: 4rem;
      top: 4.7rem;
      border: 4px solid ${({ theme }) => theme.colors.text};
    }

    .subtitleCover {
      width: 20rem;
      height: 4rem;
      top: 4.7rem;
      border: 4px solid ${({ theme }) => theme.colors.textLight};
    }
  }
  @media (max-width: 428px) {
    .heroTitle {
      h1 {
        font-size: ${({ theme }) => theme.sizes.small};
      }
      p {
        font-size: ${({ theme }) => theme.sizes.xxxsmall};
      }
    }

    .heroSubtitle {
      top: -3rem;
      h1 {
        font-size: ${({ theme }) => theme.sizes.small};
      }
    }

    .titleCover {
      width: 19rem;
      height: 2.8rem;
      top: 3rem;
      left: 0.55rem;
      border: 3px solid ${({ theme }) => theme.colors.text};
    }

    .subtitleCover {
      width: 13.5rem;
      height: 3rem;
      top: 2.9rem;
      border: 4px solid ${({ theme }) => theme.colors.textLight};
    }
  }
`;

export const WavesContainer = styled.svg`
  align-self: flex-end;
  height: 25rem;
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  .backWave {
    animation: moveBackWave 6s ease-in-out infinite alternate;
  }

  .midWave {
    animation: moveMidWave 6s ease-in-out infinite alternate;
  }

  .frontWave {
    animation: moveFrontWave 6s ease-in-out infinite alternate;
  }

  @keyframes moveBackWave {
    from {
      transform: translate(-30rem, -2rem);
    }
    to {
      transform: translate(0, -2rem);
    }
  }

  @keyframes moveMidWave {
    from {
      transform: translate(-22rem, 1rem);
    }
    to {
      transform: translate(0, 1rem);
    }
  }

  @keyframes moveFrontWave {
    from {
      transform: translate(-16rem, 1rem);
    }
    to {
      transform: translate(0, 1rem);
    }
  }

  @media (max-width: 1440px) {
    height: 20rem;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 834px) {
    height: 17rem;
  }
  @media (max-width: 428px) {
    height: 12rem;
  }
`;
