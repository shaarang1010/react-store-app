import { useEffect, useState } from "react";
import { httpRequest } from "../utils/httpRequest";

/**
 *
 * Please refactor the below code from lines 10-14.
 * The current implementation is using the api url directly but we would like to make this function reusable.
 *
 */
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
