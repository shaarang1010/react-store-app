import { useEffect, useState } from "react";
import { httpRequest } from "../utils/httpRequest";

const getAllProducts = async () => {
  return await httpRequest("https://fakestoreapi.com/products").catch((err) => {
    throw new Error(err.message);
  });
};

export const useApi = <T>() => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, []);
  return { data, error };
};
