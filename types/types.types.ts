export type CustomerData = {
  name: string;
  email: string;
  birthDate: any;
  address: string;
};

export type GET_ALL_CUSTOMERS_RESPONSE = {
  id: string;
  name: string;
  birthDate: string;
  address: string;
  email: string;
};

export type customer = {
  isLoading: boolean;
  response: GET_ALL_CUSTOMERS_RESPONSE[] | undefined;
  error: unknown;
};
