import React, { useEffect, useState } from "react";
import { MovieType } from "../constants/types";

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        data?.results.map((m: MovieType) => ({ ...m, liked: false }))
      )
      .then((data) => {
        setLoading(false);
        setData(data as T[]);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url, loading]);

  return { data, loading, error };
};
export default useFetch;
