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
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.tertiary},
      ${({ theme }) => theme.colors.quaternary}
    );
  }
`;
