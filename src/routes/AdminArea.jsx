import React, { useState } from "react";
import { FromLogin } from "../components/FromLogin";
import { CreateProduct } from "../components/CreateProduct";
import { useLogin } from "../hooks/useLogin";
import { ListarUsuarios } from "../components/ListarUsuarios";

export const AdminArea = () => {

  const [action, setAction] = useState("");
  const { login, loginHandler, logutHandler } = useLogin();

  const clickHandler = (ev) => {
    setAction(ev.target.id);
  };

  return (
    <div className="adminArea_container">
      {login.isLogged && login.isAdmin ? (
        action === "" ? (
          <div className="adminArea_container-buttons">
            <button
              className="btn btn-primary m-3"
              id="agregar"
              onClick={clickHandler}
            >
              Agregar un producto
            </button>
            <button
              className="btn btn-primary m-3"
              id="editar"
              onClick={clickHandler}
            >
              Editar un producto
            </button>
            <button
              className="btn btn-primary m-3"
              id="eliminar"
              onClick={clickHandler}
            >
              Eliminar un producto
            </button>
            <button
              className="btn btn-primary m-3"
              id="listarUsuarios"
              onClick={clickHandler}
            >
              Ver usuarios
            </button>
            <button
              className="btn btn-primary m-3"
              id="eliminar"
              onClick={logutHandler}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="adminArea_container-agregarProd">
            {action === "agregar" && <CreateProduct />}
            {action === "listarUsuarios" && <ListarUsuarios />}
            <button className="btn btn-primary" onClick={() => setAction("")}>Volver</button>
          </div>
        )
      ) : (
        <div className="adminArea_container-form">
          <FromLogin loginHandler={loginHandler}/>  
        </div>
      )}
    </div>
  );
};
