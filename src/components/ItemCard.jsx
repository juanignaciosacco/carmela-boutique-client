import React from "react";

export const ItemCard = ({ item }) => {

  const { nombre, descripcion, precio, precioOferta, img, stock } = item;
  
  return (
    <div>
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <p>${precio}</p>
          <p>Stock: {stock}</p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};
