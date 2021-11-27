import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  position: relative;

  .navLinks {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .iconLinks {
    display: flex;
    position: absolute;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    right: 2rem;
    font-size: ${({ theme }) => theme.sizes.normal};
    width: 12%;
    background-color: red;
  }
`;

export const NavLinkContainer = styled.div`
  cursor: pointer;
`;

export const IconLinkContainer = styled.div`
  cursor: pointer;
  display: flex;
`;
