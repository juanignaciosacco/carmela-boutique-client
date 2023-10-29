import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import axios from "axios";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isLogged: false,
  user: undefined,
};

export const useLogin = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  let token = '';
  let claims = {}
  let user = {}

  const loginHandler = ({ username, password }) => {
    axios.post("http://localhost:8080/login", {username, password})
    .then((res) => {
      token = Object.values(res.data)[0];
      claims = JSON.parse(window.atob(token.split(".")[1]));
      user = {username: claims.sub};
      dispatch({
        type: "login",
        payload: {...user, isAdmin: claims.isAdmin},
      });
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isLogged: true, 
          isAdmin: claims.isAdmin,
          ...user,
        })
      );
      sessionStorage.setItem('token', `Bearer ${token}`)
      Swal.fire("Login exitoso", "Has iniciado sesion con exito!", "success");
    })
    .catch((error) => {
      if (error.response?.status === 401) {
        Swal.fire("Error login", "Username o password incorrectos", "error");
      } else if (error.response?.status === 403) {
        Swal.fire("Error login", "No tiene acceso al recurso!", "error");
      }
    })
  };

  const logutHandler = () => {
    dispatch({
      type: "logout"
    });
    sessionStorage.removeItem("login");
    sessionStorage.removeItem('token')
  };

  return { login, loginHandler, logutHandler };
};
