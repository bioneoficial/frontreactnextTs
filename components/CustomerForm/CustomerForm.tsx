import { API_URL } from "@/constants";
import { CustomerData } from "@/types/types.types";
import { birthDateMask, formatBrazilianDate, nameMask } from "@/utils/masks";
import React, { FC, useState } from "react";
import { CustomerFormButton } from "../CustomerFormButton/CustomerFormButton";
import { CustomerFormInput } from "../CustomerFormInput/CustomerFormInput";
import * as S from "./CustomerForm.styles";

export const CustomerForm: FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: "",
    email: "",
    birthDate: "",
    address: "",
  });
  const [errorMessageName, setErrorMessageName] = useState<string>("");
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");
  const [errorMessageBirthDate, setErrorMessageBirthDate] =
    useState<string>("");
  const [errorMessageAddress, setErrorMessageAddress] = useState<string>("");
  const [formReady, setformReady] = useState<boolean>(false);

  const checkErrors = (): boolean => {
    if (
      errorMessageName ||
      errorMessageEmail ||
      errorMessageBirthDate ||
      errorMessageAddress
    ) {
      return true;
    }
    return false;
  };
  const isFormValid = (): void => {
    if (
      customerData.name &&
      customerData.email &&
      customerData.birthDate &&
      customerData.address &&
      !checkErrors()
    ) {
      setformReady(true);
    } else {
      setformReady(false);
    }
  };

  const validateDate = (inputDate: Date, dateString: string) => {
    const today = new Date();
    const day = parseInt(dateString.substring(0, 2));
    const month = parseInt(dateString.substring(3, 5));
    const year = parseInt(dateString.substring(6, 10));
    const maxDaysLeapYear = new Date(year, 2, 0).getDate();
    if (
      isNaN(inputDate.getTime()) ||
      inputDate.getTime() > today.getTime() ||
      (month === 2 && day > maxDaysLeapYear)
    ) {
      setErrorMessageBirthDate("Data inválida");
      console.error("Invalid date:", dateString);
      return false;
    }
    setErrorMessageBirthDate("");
    return true;
  };

  const onChangeBirthDate = (birthDate: string): void => {
    birthDate = birthDateMask(birthDate);
    setCustomerData({ ...customerData, birthDate: birthDate });

    if (birthDate.length === 10) {
      const inputDate = new Date(formatBrazilianDate(birthDate));
      if (!validateDate(inputDate, birthDate)) {
        setErrorMessageBirthDate("Data inválida");
        return;
      }
    } else if (birthDate.length > 10) {
      setErrorMessageBirthDate("Data inválida");
    }
  };

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    isFormValid();
    if (!formReady) {
      return alert("Preencha todos os campos corretamente");
    }
    try {
      const newCustomerData = {
        ...customerData,
        birthDate: new Date(customerData.birthDate),
      };
      const response = await fetch(`${API_URL}/customer/customer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCustomerData),
      });
      const data = await response.json();
      console.log("Customer created successfully:", data);
      document.location.reload();
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  const isNameValid = (name: string) => {
    if (name.length < 2) {
      setErrorMessageName("Nome deve ter no mínimo 2 caracteres");
    } else {
      setErrorMessageName("");
    }
  };

  const isEmailValid = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setErrorMessageEmail("Email inválido");
    } else {
      setErrorMessageEmail("");
    }
  };

  const isAddressValid = (address: string) => {
    if (address.length < 5) {
      setErrorMessageAddress("Endereço deve ter no mínimo 5 caracteres");
    } else {
      setErrorMessageAddress("");
    }
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.FormLabel>
        <CustomerFormInput
          title={"Nome"}
          value={customerData.name}
          errorMessage={errorMessageName}
          onChange={(e) =>
            setCustomerData({ ...customerData, name: nameMask(e) })
          }
          minLength={2}
          maxLength={50}
          onBlur={(e) => isNameValid(e)}
        />
        <CustomerFormInput
          title={"Email"}
          value={customerData.email}
          errorMessage={errorMessageEmail}
          onChange={(e) => setCustomerData({ ...customerData, email: e })}
          onBlur={(e) => isEmailValid(e)}
          minLength={2}
          maxLength={30}
        />
        <CustomerFormInput
          title={"Data de Nascimento"}
          value={customerData.birthDate}
          errorMessage={errorMessageBirthDate}
          onChange={(e) => onChangeBirthDate(e)}
          onBlur={(e) => validateDate(new Date(e), e)}
          maxLength={10}
        />
        <CustomerFormInput
          title={"Endereço"}
          value={customerData.address}
          errorMessage={errorMessageAddress}
          onChange={(e) => setCustomerData({ ...customerData, address: e })}
          onBlur={(e) => isAddressValid(e)}
          minLength={5}
          maxLength={90}
        />
        <CustomerFormButton title={"Cadastrar"} />
      </S.FormLabel>
    </S.Form>
  );
};
