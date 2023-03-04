import axios from "axios";
import { useEffect, useState } from "react";

type Props<BODY> = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: BODY;
};

export function useRequest<
  RESPONSE,
  BODY extends Object | undefined = undefined
>({ url, method, body }: Props<BODY>) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<RESPONSE | undefined>(undefined);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    setIsLoading(true);
    axios
      .request({
        url,
        method,
        data: {
          ...body,
        },
      })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [body, method, url]);

  return { isLoading, response, error };
}
