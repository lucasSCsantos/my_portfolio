import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 20px;
  top: 40%;
  bottom: 50%;
  /* background-color: red; */
  width: 100px;
  height: 100px;
  z-index: 21;
  .actual {
    width: 100px !important;
    background-color: green;
  }
`;

export const BarContainer = styled.div`
  height: 10px;
  width: 80px;
  margin-bottom: 20px;
  background-color: red;
  border-radius: 100px;
`;
