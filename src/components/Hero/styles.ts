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

  .heroTitle {
    /* background-color: red; */
    margin-right: 0.75rem;
    margin-bottom: 15rem;
    position: relative;
  }

  .titleCover {
    position: absolute;
    background-color: transparent;
    border: 6px solid black;
    border-right: none;
    top: 110px;
    left: -10px;
    width: 665px;
    height: 100px;
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
      transform: translate(-37.5rem, -2rem);
    }
    to {
      transform: translate(0, -2rem);
    }
  }

  @keyframes moveMidWave {
    from {
      transform: translate(-25rem, 1rem);
    }
    to {
      transform: translate(0, 1rem);
    }
  }

  @keyframes moveFrontWave {
    from {
      transform: translate(-18.75rem, 1rem);
    }
    to {
      transform: translate(0, 1rem);
    }
  }
`;
