import React, { FC } from "react";
import * as S from "./CustomerFormInput.styles";

interface Props {
  title: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  errorMessage?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

export const CustomerFormInput: FC<Props> = ({
  title,
  value,
  onChange,
  onBlur,
  errorMessage,
  required,
  maxLength,
  minLength,
}: Props) => {
  return (
    <S.CustomerFormInputContainer>
      <S.CustomerFormInputLabel>{title}</S.CustomerFormInputLabel>
      <S.CustomerFormInputField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur && onBlur(e.target.value)}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
      />
      {errorMessage && <S.errorMessage>{errorMessage}</S.errorMessage>}
    </S.CustomerFormInputContainer>
  );
};
