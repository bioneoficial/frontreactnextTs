import React, { FC } from "react";
import * as S from "./CustomerFormButton.styles";

interface Props {
  title: string;
}

export const CustomerFormButton: FC<Props> = ({ title }: Props) => {
  return (
    <S.ButtonContainer>
      <S.Button>{title}</S.Button>
    </S.ButtonContainer>
  );
};
