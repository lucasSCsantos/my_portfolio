import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 1.25rem;
  top: 40%;
  bottom: 50%;
  /* background-color: red; */
  width: 6.25rem;
  height: 6.25rem;
  z-index: 21;
  .actual {
    width: 6.25rem !important;
    background-color: ${({ theme }) => theme.colors.navHighlight};
  }
`;

export const BarContainer = styled.div`
  transition: ease 0.5s;
  cursor: pointer;
  height: 0.625rem;
  width: 5rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.nav};
  border-radius: 6.25rem;
`;
