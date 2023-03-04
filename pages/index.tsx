import { CustomerForm } from "@/components/CustomerForm/CustomerForm";
import { CustomerTable } from "@/components/CustomerTable/CustomerTable";
import { API_URL } from "@/constants";
import { useRequest } from "@/hooks/useRequest";
import { GET_ALL_CUSTOMERS_RESPONSE } from "@/types/types.types";
import * as S from "./index.styles";

export default function Home() {
  const getAllCustomersRequest = useRequest<GET_ALL_CUSTOMERS_RESPONSE[]>({
    url: `${API_URL}/customer/all`,
    method: "GET",
  });

  if (getAllCustomersRequest.isLoading) {
    return (
      <main>
        <p>Carregando</p>
      </main>
    );
  }

  if (getAllCustomersRequest.error) {
    return (
      <main>
        <p>Houve um erro ao obter a lista de clientes</p>
      </main>
    );
  }

  return (
    <S.Container>
      <CustomerForm />
      <CustomerTable getAllCustomersRequest={getAllCustomersRequest.response} />
    </S.Container>
  );
}
