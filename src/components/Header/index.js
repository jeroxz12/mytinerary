import React from "react";
import  "./styles.css";
import Imagen from "../../assets/logo_my_tinerary.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary header">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img src={Imagen} alt="Imagen logo"  />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={"/Home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cities"} className="nav-link">
                Cities
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/hotels"} className="nav-link">
                Hotels
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa-solid fa-user" style={{ color: "ffffff" }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to={"/login"}>
                  Login
                </Link>
                <Link className="dropdown-item" to={"/register"}>
                  Sign in
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
