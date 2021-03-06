import styled from 'styled-components';

export type ContainerProps = {
  size?: number;
};
// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 55%;
  right: 0;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  .bubble {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: absolute;
    background-color: white;
    bottom: -30px;
    opacity: 0.2;
    animation: bubble 15s ease-in-out infinite,
      sideWays 4s ease-in-out infinite alternate;
  }

  @media (max-width: 834px) {
    width: 100%;
  }

  @keyframes bubble {
    0% {
      transform: translateY(0%);
      opacity: 0.06;
    }
    100% {
      transform: ${props => `translateY(-${props.size}vh)`};
    }
  }

  @keyframes sideWays {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: 200px;
    }
  }

  .bubble1 {
    left: 10%;
    animation-delay: 0.5s;
    animation-duration: 16s;
    opacity: 0.2;
  }

  .bubble2 {
    width: 15px;
    height: 15px;
    left: 40%;
    animation-delay: 1s;
    animation-duration: 10s;
    opacity: 0.1;
  }

  .bubble3 {
    width: 10px;
    height: 10px;
    left: 30%;
    animation-delay: 5s;
    animation-duration: 20s;
    opacity: 0.3;
  }

  .bubble4 {
    width: 25px;
    height: 25px;
    left: 40%;
    animation-delay: 8s;
    animation-duration: 17s;
    opacity: 0.2;
  }

  .bubble5 {
    width: 30px;
    height: 30px;
    left: 60%;
    animation-delay: 10s;
    animation-duration: 15s;
    opacity: 0.1;
  }

  .bubble6 {
    width: 10px;
    height: 10px;
    left: 80%;
    animation-delay: 3s;
    animation-duration: 30s;
    opacity: 0.4;
  }

  .bubble7 {
    width: 15px;
    height: 15px;
    left: 90%;
    animation-delay: -7s;
    animation-duration: 25s;
    opacity: 0.3;
  }

  .bubble9 {
    width: 20px;
    height: 20px;
    left: 50%;
    bottom: 30px;
    animation-delay: -5s;
    animation-duration: 19s;
    opacity: 0.2;
  }

  .bubble10 {
    width: 40px;
    height: 40px;
    left: 30%;
    bottom: 30px;
    animation-delay: -21s;
    animation-duration: 16s;
    opacity: 0.3;
  }

  .bubble11 {
    width: 30px;
    height: 30px;
    left: 60%;
    bottom: 30px;
    animation-delay: -13.75s;
    animation-duration: 20s;
    opacity: 0.3;
  }

  .bubble11 {
    width: 25px;
    height: 25px;
    left: 90%;
    bottom: 30px;
    animation-delay: -10.5s;
    animation-duration: 19s;
    opacity: 0.3;
  }
`;
