import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  & > div:first-child {
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    flex-direction: column;
    h1 {
      line-height: 120px;
    }
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

  @media (max-width: 1440px) {
    & > div:first-child {
      h1 {
        margin-top: 25px;
      }
    }
  }
  @media (max-width: 1024px) {
    & > div:first-child {
      h1 {
        margin-top: 95px;
        line-height: 80px;
      }
    }
  }
  @media (max-width: 834px) {
    flex-direction: column;
    & > div:first-child {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.transparent};
      position: absolute;
      z-index: 3;
    }
    & > div:nth-child(2) {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 428px) {
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
  min-width: 20%;
  height: 50%;
  font-size: 3.5rem;
  text-align: right;
  svg {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 834px) {
    font-size: 0;
    height: fit-content;
    color: white;
    min-width: 80px;
    /* background-color: red; */
    svg {
      margin: 0 0.5rem;
      margin-bottom: 1.2rem;
    }
  }
  @media (max-width: 428px) {
    min-width: 50px;
    svg {
      margin: 0 0.1rem;
      margin-bottom: 1.2rem;
    }
  }
`;

export const ContactInfoContainer = styled.div`
  margin-top: -12.2rem;
  margin-left: 0.5rem;

  h1 {
    margin-bottom: -0.5rem;
  }
`;

export const MobileContainer = styled.div`
  height: 100%;
  padding: 81px 61px;
  width: 100%;

  h1 {
    margin: 0 !important;
    font-size: 4.5rem;
  }
  @media (max-width: 428px) {
    padding: 61px 41px;
    h1 {
      font-size: 3rem;
      line-height: 60px !important;
    }
  }
`;

export const MobileContactInfo = styled.div`
  display: flex;
  div {
    margin-top: 80px;
  }
  div p {
    text-align: left;
    margin-bottom: 10px;
    margin-left: 20px;
  }
  @media (max-width: 428px) {
    div p {
      margin-left: 2px;
      margin-bottom: 12px;
      font-size: 1rem;
    }
  }
`;
