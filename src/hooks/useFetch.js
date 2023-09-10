import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (url !== undefined) {
      fetch(`${url}`)
        .then((res) => res.json())
        .then((res2) => setItems(res2))
        .catch((error) => console.log("error"));
    }
  }, [url]);

  return { items };
};
