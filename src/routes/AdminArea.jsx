import React, { useReducer, useState } from "react";
import { FromLogin } from "../components/FromLogin";
import { CreateProduct } from "../components/CreateProduct";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
  isLogged: false,
  user: undefined
}

export const AdminArea = () => {

  const [action, setAction] = useState("");

  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  const clickHandler = (ev) => {
    setAction(ev.target.id);
  };

  const loginHandler = ({userMail, password}) => {
    if (userMail === 'juanchi@gmail.com' && password === "12345") {
      const user = { userMail: 'juanchi@gmail.com', password: '12345' }
      dispatch({
        type: "login",
        payload: user
      });
      sessionStorage.setItem('login', JSON.stringify({
        isLogged: true,
        user
      }));
    } else {
      Swal.fire("Error login", "Username o password incorrecots", "error");
    }
  }

  const logutHandler = () => {
    dispatch({
      type: 'logout'
    });
    sessionStorage.removeItem('login');
  }

  return (
    <div className="adminArea_container">
      {login.isLogged ? (
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
          </div>
        ) : (
          <div className="adminArea_container-agregarProd">
            {action === "agregar" && <CreateProduct />}
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
