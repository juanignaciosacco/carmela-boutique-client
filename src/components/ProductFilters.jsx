import React from "react";

export const ProductFilters = ({ changeHandler }) => {

  const inputChangeHandler = ({ target: { value, checked }}) => {
    changeHandler(value, checked)
  };

  return (
    <div className="productFilters">
      <div>
        <input
          type="checkbox"
          value="Indumentaria"
          onChange={inputChangeHandler}
        />
        Indumentaria
      </div>
      <div>
        <input
          type="checkbox"
          value="ParaDormir"
          onChange={inputChangeHandler}
        />
        Para Dormir
      </div>
      <div>
        <input
            type="checkbox"
            value="ComederosYBebederos"
            onChange={inputChangeHandler}
        />
        Comederos y Bebederos
      </div>
      <div>
        <input type="checkbox" value="Juguetes" onChange={inputChangeHandler} />
        Juguetes
      </div>
      <div>
        <input
          type="checkbox"
          value="ParaPasear"
          onChange={inputChangeHandler}
        />
        Para pasear
      </div>
      <div>
        <input
          type="checkbox"
          value="Rascadores"
          onChange={inputChangeHandler}
        />
        Rascadores
      </div>
      <div>
        <input
          type="checkbox"
          value="PiedrasYLiteras"
          onChange={inputChangeHandler}
        />
        Piedras y Literas
      </div>
      <div>
        <input
          type="checkbox"
          value="BellezaEHigiene"
          onChange={inputChangeHandler}
        />
        Belleza e Higiene
      </div>
      <div>
        <input type="checkbox" value="Snacks" onChange={inputChangeHandler} />
        Snacks
      </div>
      <div>
        <input
          type="checkbox"
          value="OtrosAccesorios"
          onChange={inputChangeHandler}
        />
        Otros Accesorios
      </div>
      <div>
        <input type="checkbox" value="Ofertas" onChange={inputChangeHandler} />
        Ofertas
      </div>
    </div>
  );
};
