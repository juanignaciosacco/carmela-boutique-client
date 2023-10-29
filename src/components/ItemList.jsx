import { ItemCard } from "./ItemCard";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

export const ItemList = ({ filtro }) => {
  const [prods, setProds] = useState([]);
  const [prodsFiltrados, setProdsFiltrados] = useState([]);
  const { data } = useFetch("http://localhost:8080/productos");

  useEffect(() => {
    setProds(data);
  }, [data]);

  useEffect(() => {
    let prods2 = []
    if (filtro.length > 0) {
      filtro.forEach(element => {
        prods2.push(...prods.filter((prod) => prod.categoria === element))
      });
    }
    setProdsFiltrados(prods2)
  }, [filtro, prods]);

  return (
    <div className="itemList_card_container">
      {filtro.length > 0
        ? prodsFiltrados.map((item) => (
          <div key={item.id} className="itemList_container-card">
            <ItemCard key={item.id} item={item} />
          </div>
          ))
        : prods.length > 0 &&
          prods.map((item) => (
          <div key={item.id} className="itemList_container-card">
            <ItemCard key={item.id} item={item} />
          </div>
          ))}
    </div>
  );
};
