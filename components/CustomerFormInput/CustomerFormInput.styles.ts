import styled from "styled-components";
export const CustomerFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 45px 0;
  display: flex;
  align-items: flex-start;
`;
export const CustomerFormInputLabel = styled.label`
  color: #000;
  font-size: 16px;
  transition: 300ms ease all;
  position: absolute;
  margin-left: 16px;
  @media (max-width: 899px) {
    font-size: 14px;
  }
`;

export const CustomerFormInputField = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 90%;
  border: 1px solid #999;
  border-radius: 10px;
  margin: 25px 0 0 12px;
`;

export const errorMessage = styled.span`\
  color: red;
  font-size: 12px;
  margin-left: 12px;
`;
