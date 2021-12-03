import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 50px;
  bottom: 50px;
  width: 80px;
  height: 80px;
  z-index: 20;
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
