import axios from "axios";
import { useEffect, useState } from "react";

export const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/usuarios")
      .then((res) => setUsuarios(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <div>
        {usuarios.length > 0 ? (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Fecha de nacimiento</th>
                <th scope="col">Ver más</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usu) => (
                <tr key={usu.id}>
                  <th scope="row">{usu.id}</th>
                  <td>{usu.nombre}</td>
                  <td>{usu.apellido}</td>
                  <td>{usu.username}</td>
                  <td>{usu.email}</td>
                  <td>{usu.fechaNacimiento}</td>
                  <td><button className="btn btn-primary">Ver más</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Cargando usuarios...</p>
        )}
      </div>
    </div>
  );
};
