import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to={"/"}>
          <img className="navbar-logo" src={Logo} alt="Carmela Boutique Logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/adminArea"} className="nav-link">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/productos"} className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contacto"} className="nav-link">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
