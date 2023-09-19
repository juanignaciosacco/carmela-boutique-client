import React from "react";
import { Link } from "react-router-dom";

export const ItemCard = ({ item }) => {

  const { nombre, descripcion, precio, precioOferta, images, stock } = item;
  
  return (
    <div>
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src={images[0].url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <p>${precio}</p>
          <p>Stock: {stock}</p>
          <Link className="btn btn-primary">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
};
