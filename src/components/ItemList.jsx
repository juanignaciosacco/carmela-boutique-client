import { ItemCard } from "./ItemCard";
import { useFetch } from "../hooks/useFetch";

export const ItemList = () => {
  
  const { items } = useFetch("http://localhost:8080/productos");

  return (
    <div className="itemList_card_container">
      {items.length > 0 &&
        items.map((item) => <ItemCard key={item.id} item={item} />)
      }
    </div>
  );
};
