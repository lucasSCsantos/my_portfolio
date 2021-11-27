import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
    transform: translateY(-1rem);
    animation: moveBackWave 6s ease-in-out infinite alternate;
  }

  .midWave {
    transform: translateY(4rem);
    animation: moveMidWave 6s ease-in-out infinite alternate;
  }

  .frontWave {
    transform: translateY(7rem);
    animation: moveFrontWave 6s ease-in-out infinite alternate;
  }

  @keyframes moveBackWave {
    from {
      transform: translate(-33.5rem, -3rem);
    }
    to {
      transform: translate(0, -3rem);
    }
  }

  @keyframes moveMidWave {
    from {
      transform: translate(-31.25rem, 1rem);
    }
    to {
      transform: translate(0, 1rem);
    }
  }

  @keyframes moveFrontWave {
    from {
      transform: translate(-25rem, 1rem);
    }
    to {
      transform: translate(0, 1rem);
    }
  }
`;
