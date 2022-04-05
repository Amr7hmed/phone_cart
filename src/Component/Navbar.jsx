import React from "react";
import { NavLink } from "react-router-dom";
import Login from '../buttons/Login';
import Singup from '../buttons/Singup';
import Cartbutton from '../buttons/Cartbutton';

function Navbar() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
          <NavLink to="/" className="navbar-brand">Apple Market</NavLink>
          <Login />
          <Singup />
          <Cartbutton/>
        </div>
      </div>
    </nav>
  </>);
}

export default Navbar;
