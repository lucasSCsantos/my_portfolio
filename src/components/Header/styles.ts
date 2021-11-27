import styled from 'styled-components';

export type AreaProps = {
  width: number;
  height: number;
};

export const Container = styled.header`
  width: 100%;
  height: 7.5rem;
  background-color: red;
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

  #teco {
    margin-top: 1900px;
    height: 50px;
    width: 50px;
    background-color: blue;
  }
`;

export const NavLinkContainer = styled.div`
  background-color: tomato;
`;
