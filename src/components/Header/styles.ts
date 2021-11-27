import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 7.5rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

export const NavLinkContainer = styled.div`
  cursor: pointer;
`;

export const IconLinkContainer = styled.div`
  cursor: pointer;
`;
