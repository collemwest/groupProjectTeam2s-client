import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: black;
  padding: 60px 50px;

  @media (max-width: 900px) {
    padding: 60px 0;
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 6px;
    text-align: center;
    color: white;

    @media (max-width: 630px) {
      letter-spacing: 0;
    }
  }

  /* ---DESCRIPTION--- */
  .description {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  .description p {
    margin: 0 auto;
    color: white;
  }
  /* .description p a {
    color: #b09661;
    text-decoration: none;
    padding-right: 10px;
  } */
  @media (max-width: 768px) {
    .description p {
      text-align: center;
    }
  }
`;

// ------------FORM----------------
const Boundary = styled.div`
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 900px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const FormContainer = styled.form`
  width: 640px;
  margin: 50px auto;
  border-radius: 4px;
  padding: 30px 90px;

  @media (max-width: 630px) {
    max-width: 100%;
  }
`;

const Half = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const Input = styled.input`
  width: 48%;
  border: 1px solid white;
  outline: 0;
  padding: 10px;
  height: 44px;
  background: transparent;
  font-size: 17px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
  &:focus::placeholder {
    color: transparent;
  }

  @media (max-width: 630px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }
`;

const Full = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid white;
  padding: 2px;
  width: 100%;
  height: 44px;
  & input {
    flex-grow: 2;
    border: none;
    padding: 5px;
    font-size: 17px;

    &:focus {
      outline: none;
    }
    & ::placeholder {
      color: white;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
  }
`;
const SubscribeButton = styled.input`
  flex-grow: 2;
  border: none;
  padding: 5px;

  background: #b09661;
  color: black;
  margin: 5px 5px 5px 0;
  font-size: 17px;
  text-transform: uppercase;
  transition: 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: #c1ad83;
  }

  @media (max-width: 630px) {
    width: 100%;
    margin-top: 40px;
    text-align: center;
    padding: 0;
  }
`;

// ------------MENU----------------
const MenuContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap;
  justify-content: space-evenly; */
  justify-content: space-evenly;
  & > * {
    flex-basis: 20%;
  }

  @media (max-width: 630px) {
    flex-direction: column;
    justify-content: center;
    & > * {
      flex-basis: 100%;
    }
  }
`;

const Column = styled.div`
  /* flex: 0 0 15%; */
  & ul {
    list-style: none;
    padding-left: 0;
  }
  & ul li {
    margin-bottom: 20px;
  }
  & ul li a {
    display: block;
    margin-bottom: 6px;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #b09661;
    }
  }

  @media (max-width: 630px) {
    text-align: center;
  }
`;
const Title = styled.div`
  margin-bottom: 20px;
  color: #b09661;
  text-transform: uppercase;

  @media (max-width: 630px) {
    margin-top: 20px;
  }
`;

export {
  StyledFooter,
  Boundary,
  FormContainer,
  Half,
  Input,
  Full,
  SubscribeButton,
  MenuContainer,
  Column,
  Title,
};
