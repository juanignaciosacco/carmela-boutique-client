import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState()

  useEffect(() => {
    if (url !== undefined) {
      fetch(`${url}`)
        .then((res) => res.json())
        .then((res2) => setData(res2))
        .catch((error) => {
          setErrors(error)
        });
    }
  }, [url]);

  return { data, errors };
};
