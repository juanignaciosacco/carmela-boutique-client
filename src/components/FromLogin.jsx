import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import Swal from "sweetalert2";

const initialLoginForm = {
    userMail: '',
    password: ''
}

export const FromLogin = ({ loginHandler }) => {

  const { adminIsLogged, logged } = useContext(AdminContext);
  const [formData, setFormData] = useState(initialLoginForm);
  const { userMail, password } = formData 

  const inputChangeHandler = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginClickHandler = (ev) => {
    ev.preventDefault();
    if (!userMail || !password) {
        Swal.fire('Error de validacion', 'El mail y la contraseña son requeridos', 'error')
    }
    loginHandler({ userMail, password })
    setFormData(initialLoginForm);
  };

  return (
    <div className="text-center">
      <form className="form" onSubmit={loginClickHandler}>
        <label htmlFor="userMail" className="form-label mt-4">Usuario</label>
        <input type="email" name="userMail" onChange={inputChangeHandler} className="form-control" value={userMail}/>
        <label htmlFor="password" className="form-label mt-4">Contraseña</label>
        <input type="password" name="password" onChange={inputChangeHandler} className="form-control" value={password}/>
        <button type="submit" className="btn btn-primary m-4">Ingresar</button>
      </form>
    </div>
  );
};
