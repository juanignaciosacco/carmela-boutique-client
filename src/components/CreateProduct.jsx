import React, { useState } from "react";
import Swal from "sweetalert2";
import { uploadFile, convertHeic } from '../index';

export const CreateProduct = () => {
  const [infoProd, setInfoProd] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    categoria: "",
  });
  const [file, setFile] = useState()

  const changeHandler = ({ target: { name, value } }) => {
    setInfoProd({
      ...infoProd,
      [name]: value,
    });
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    var results = []
    try {
      for (const i of file) {
        if (i.type === "image/heic") {
          results.push({"url": await convertHeic(i)});
        } else {
          results.push({"url": await uploadFile(i)});
        }
      }
    } catch (error) {
      ev.preventDefault();
      Swal.fire("Fallo interno, avisale a juanchi ", "Error al cargar las imagenes", 'error');
    }
    console.log({...infoProd, images: results})
    fetch("http://localhost:8080/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Configura el encabezado Content-Type
      },
      body: JSON.stringify({...infoProd, images: results}),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-auto">
      <form onSubmit={(ev) => submitHandler(ev)} className="text-center">
        <label htmlFor="nombre" className="form-label mt-4">
          Nombre:
        </label>
        <input
          type="text"
          name="nombre"
          onChange={changeHandler}
          className="form-control"
        />
        <label htmlFor="descripcion" className="form-label mt-4">
          Descripcion:
        </label>
        <input
          type="text"
          name="descripcion"
          onChange={changeHandler}
          className="form-control"
        />
        <label htmlFor="precio" className="form-label mt-4">
          Precio:
        </label>
        <input
          type="text"
          name="precio"
          onChange={changeHandler}
          className="form-control"
        />
        <label htmlFor="file" className="form-label">
          Imagen
        </label>
        <input
          className="form-control"
          multiple
          id="file"
          type="file"
          onChange={(e) => setFile(e.target.files)}
        />
        <label htmlFor="stock" className="form-label mt-4">
          Stock:
        </label>
        <input
          type="text"
          name="stock"
          onChange={changeHandler}
          className="form-control"
        />
        <label htmlFor="categoria" className="form-label mt-4">
          Categoria:
        </label>
        <input
          type="text"
          name="categoria"
          onChange={changeHandler}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary m-4">
          Subir
        </button>
      </form>
    </div>
  );
};
