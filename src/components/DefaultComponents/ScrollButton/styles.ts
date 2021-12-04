import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 50px;
  bottom: 50px;
  width: 80px;
  height: 80px;
  z-index: 20;

  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 834px) {
    width: 60px;
    bottom: 20px;
    left: 47%;
    right: 47%;
    height: 60px;

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

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
  height: 100%;
  border-radius: 100%;
  padding-top: 10px;
  border: none;
  animation: alternate infinite scrollAnimate 2s ease;

  @keyframes scrollAnimate {
    from {
      transform: translateY(-1rem);
    }
  }
`;
