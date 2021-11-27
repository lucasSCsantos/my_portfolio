import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  position: relative;

  /* & > div:first-child {
    background-color: maroon;
  } */

  .navLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    align-self: center;
    margin: 0 2rem;
    /* background-color: blue; */
  }

  .iconLinks {
    display: flex;
    align-self: center;
    align-items: center;
    position: absolute;
    right: 2rem;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.sizes.normal};
    width: 7.5rem;
  }

  @media (max-width: 1440px) {
  }
  @media (max-width: 1000px) {
    & > div:first-child {
      width: 100%;
      background-color: maroon;
    }
    & > div:nth-child(2) {
      display: none;
    }
  }
  @media (max-width: 700px) {
    padding: 0 2rem;
  }
`;

export const NavLinkContainer = styled.div`
  cursor: pointer;
`;

export const IconLinkContainer = styled.div`
  cursor: pointer;
  display: flex;
`;
