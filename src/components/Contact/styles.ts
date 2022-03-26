import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  z-index: 10;

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
    div {
      z-index: 10;
    }
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
      z-index: 10;
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
    min-width: 125px;
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
  @media (max-width: 1440px) {
    h1 {
      margin-top: 35px;
    }
    & > p:nth-child(2) {
      margin-left: 2px;
      font-size: 2.2rem;
      margin-top: 0px;
    }
    & > p:nth-child(3) {
      margin-left: 2px;
      font-size: 2.2rem;
      margin-top: 15px;
    }
  }
  @media (max-width: 1024px) {
    h1 {
      margin-top: 70px;
    }
    & > p:nth-child(2) {
      margin-left: 2px;
      font-size: 2rem;
      margin-top: 15px;
    }
    & > p:nth-child(3) {
      margin-left: 2px;
      font-size: 2rem;
      margin-top: 25px;
    }
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
    z-index: 10;
  }
  @media (max-width: 834px) {
    div p {
      margin-left: 2px;
      margin-bottom: 20px;
      margin-top: 5px;
      z-index: 10;
      font-size: 1.6rem;
    }
  }
  @media (max-width: 428px) {
    div p {
      margin-left: 2px;
      margin-bottom: 12px;
      margin-top: 0;
      z-index: 10;
      font-size: 1rem;
    }
  }
`;

export const PlantsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  /* background-color: red; */
  overflow: hidden;

  img {
    height: auto;
    position: absolute;
    opacity: 0.8;
    z-index: 3;
  }

  .plant1 {
    width: 300px;
    bottom: -80px;
    left: -50px;
  }

  .plant2 {
    width: 500px;
    bottom: -130px;
    left: 300px;
    transform: rotate(-40deg);
    transform: scaleX(-1);
  }

  .plant3 {
    width: 350px;
    right: -100px;
    bottom: 200px;
    transform: rotate(-50deg);
  }

  .anchor {
    width: 700px;
    opacity: 0.3;
    z-index: 2;
    bottom: 0;
    right: -220px;
  }

  @media (max-width: 834px) {
    img {
      z-index: -1;
    }

    .plant2 {
      width: 400px;
      bottom: -80px;
      left: 210px;
      transform: rotate(-40deg);
      transform: scaleX(-1);
    }

    .anchor {
      z-index: -2;
    }
  }
`;
