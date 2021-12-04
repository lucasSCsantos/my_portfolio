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
    width: 6.25rem;
    background-color: ${({ theme }) => theme.colors.navHighlight};
  }
  @media (max-width: 1440px) {
    .actual {
      width: 5.75rem;
    }
  }
  @media (max-width: 1024px) {
    top: 50%;
    .actual {
      width: 4.5rem;
    }
  }
  @media (max-width: 834px) {
    top: 45%;
    .actual {
      width: 3.25rem;
    }
  }
  @media (max-width: 428px) {
    top: 40%;
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
  position: relative;

  .popover {
    background: white;
    position: absolute;
    border-radius: 2px;
    top: -40px;
    width: max-content;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 8px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
  }

  .triangle {
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    position: absolute;
    left: 5px;
    border-left: 5px solid transparent;
    bottom: -5px;
  }

  &:hover {
    .popover {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 1440px) {
    width: 4.5rem;
  }
  @media (max-width: 1024px) {
    width: 3.25rem;
    height: 0.5625rem;
    .popover {
      display: none;
    }
  }
  @media (max-width: 834px) {
    margin-bottom: 0.5rem;

    width: 2rem;
    height: 0.5rem;
  }
  @media (max-width: 428px) {
  }
`;
