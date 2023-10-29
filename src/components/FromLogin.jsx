import React, { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: ''
}

export const FromLogin = ({ loginHandler }) => {

  const [formData, setFormData] = useState(initialLoginForm);
  const { username, password } = formData 

  const inputChangeHandler = ({ target: { name, value }}) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginClickHandler = (ev) => {
    ev.preventDefault();
    if (!username || !password) {
        Swal.fire('Error de validacion', 'El mail y la contraseña son requeridos', 'error')
    } else {
      loginHandler({ username, password })
      setFormData(initialLoginForm);
    }
  };

  return (
    <div className="text-center">
      <form className="form" onSubmit={loginClickHandler}>
        <label htmlFor="username" className="form-label mt-4">Usuario</label>
        <input type="text" name="username" onChange={inputChangeHandler} className="form-control" value={username} />
        <label htmlFor="password" className="form-label mt-4">Contraseña</label>
        <input type="password" name="password" onChange={inputChangeHandler} className="form-control" value={password} />
        <button type="submit" className="btn btn-primary m-4">Ingresar</button>
      </form>
    </div>
  );
};
