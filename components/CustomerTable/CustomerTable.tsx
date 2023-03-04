import React, { FC } from "react";
import { parseISO } from "date-fns";
import * as S from "./CustomerTable.styles";
interface Props {
  getAllCustomersRequest?: {
    id: string;
    name: string;
    birthDate: string;
    address: string;
    email: string;
  }[];
}

export const CustomerTable: FC<Props> = ({ getAllCustomersRequest }: Props) => {
  return (
    <S.CustomerTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Data de Nascimento</th>
          <th>Endereço</th>
        </tr>
      </thead>
      <tbody>
        {getAllCustomersRequest?.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{parseISO(customer.birthDate).toLocaleDateString()}</td>
            <td>{customer.address}</td>
          </tr>
        ))}
      </tbody>
    </S.CustomerTable>
  );
};
