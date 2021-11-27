import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 10;

  .navLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    align-self: center;
    margin: 0 3rem;
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
    & > div:first-child {
      width: 80%;
    }
    & > div:nth-child(2) {
      width: 20%;
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 834px) {
    & > div:first-child {
      width: 100%;
    }
    & > div:nth-child(2) {
      display: none;
    }
  }
  @media (max-width: 428px) {
    .navLinks > div:first-child {
      display: none;
    }
  }
`;

export const NavLinkContainer = styled.div`
  cursor: pointer;
`;

export const IconLinkContainer = styled.div`
  cursor: pointer;
  display: flex;
`;
