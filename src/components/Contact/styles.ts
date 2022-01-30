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

export const ContactFormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  width: 75%;
  height: 60%;
  align-items: end;
  justify-content: space-between;
  margin-top: -10rem;
`;

export const IconsContainer = styled.div`
  /* background-color: blue; */
  width: 20%;
  height: 50%;
  font-size: 3.5rem;
  text-align: right;
  svg {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const ContactInfoContainer = styled.div``;
