import React, { useState } from "react";

export const CreateProduct = () => {

  const [infoProd, setInfoProd] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    images: "",
    stock: 0,
    categoria: ''
  });

  const changeHandler = ({ target: { name, value } }) => {
    setInfoProd({
      ...infoProd,
      [name]: value,
    });
  };

  const submitHandler = ( ev ) => {
    ev.preventDefault();
    fetch("http://localhost:8080/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Configura el encabezado Content-Type
      },
      body: JSON.stringify(infoProd)
    })
      .then((res) => res.json())
      .then((res2) => console.log(res2))
      .catch((error) => console.log("error"));
  };

  return (
    <div className="mx-auto">
      <form onSubmit={(ev) => submitHandler(ev)} className="text-center">
        <label htmlFor="nombre" className="form-label mt-4">Nombre:</label>
        <input type="text" name="nombre" onChange={changeHandler}  className="form-control"/>
        <label htmlFor="descripcion" className="form-label mt-4">Descripcion:</label>
        <input type="text" name="descripcion" onChange={changeHandler}  className="form-control"/>
        <label htmlFor="precio" className="form-label mt-4">Precio:</label>
        <input type="text" name="precio" onChange={changeHandler} className="form-control" />
        {/* <label htmlFor="img" className="form-label mt-4">Imagen:</label>
        <input type="text" name="img" onChange={changeHandler}  className="form-control"/> */}
        <label htmlFor='file' className="form-label">Imagen</label>
        <input className='form-control' multiple id='file' type='file' onChange={(e) => setFile(e.target.files)} />
        <label htmlFor="stock" className="form-label mt-4">Stock:</label>
        <input type="text" name="stock" onChange={changeHandler}  className="form-control"/>
        <label htmlFor="categoria" className="form-label mt-4">Categoria:</label>
        <input type="text" name="categoria" onChange={changeHandler}  className="form-control"/>
        <button type="submit" className="btn btn-primary m-4">
          Subir
        </button>
      </form>
    </div>
  );
};
