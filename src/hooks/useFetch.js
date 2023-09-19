import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url !== undefined) {
      fetch(`${url}`)
        .then((res) => res.json())
        .then((res2) => setData(res2))
        .catch((error) => console.log("error"));
    }
  }, [url]);

  return { data };
};
