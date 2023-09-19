import React, { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";
import { ProductFilters } from "../components/ProductFilters";

export const ItemsContainer = () => {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState([]);

  const [filtros, setFiltros] = useState({
    Indumentaria: false,
    ParaDormir: false,
    ComederosYBebederos: false,
    Juguetes: false,
    ParaPasear: false,
    Rascadores: false,
    PiedrasYLiteras: false,
    BellezaEHigiene: false,
    Snacks: false,
    OtrosAccesorios: false,
    Ofertas: false,
  });

  const inputChangeHandler = (value, checked) => {
    setFiltros({
      ...filtros,
      [value]: checked,
    });
  };

  useEffect(() => {
    setFiltroSeleccionado(
      Object.keys(filtros).filter((key) => filtros[key] === true)
    );
  }, [filtros]);

  return (
    <>
      <h1 className="text-center m-3">Productos</h1>
      <div className="itemListContainer">
        <div className="itemListContainer-filters">
          <ProductFilters changeHandler={inputChangeHandler} />
        </div>
        <div>
          <ItemList filtro={filtroSeleccionado}/>
        </div>
      </div>
    </>
  );
};
