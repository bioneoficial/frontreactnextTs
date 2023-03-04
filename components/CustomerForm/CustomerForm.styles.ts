import styled from "styled-components";
export const FormLabel = styled.label`
  position: relative;
  display: block;
  margin-bottom: 20px;
  border: 1px solid #000;
  &::before {
    content: "Cadastrar Novo Cliente";
    position: absolute;
    top: -16px;
    left: 20px;
    transform: translateX(-50%);
    background-color: #fff;
  }
  @media (min-width: 900px) {
    &::before {
      left: 20%;
    }
  }

  @media (max-width: 899px) {
    &::before {
      left: 30%;
      font-size: 18px;
      top: -10px;
    }
  }
`;

export const Form = styled.form`
  padding: 20px;
  width: 100%;

  @media screen and (min-width: 900px) {
    width: 45%;
  }
`;
