import React from "react";
import "../../css/Navbar/navbar.css";
import { useNavigate } from "react-router-dom";

import NavbarCollapsed from "./NavbarCollapsed";

export default function Navbar() {
  let navigate = useNavigate();

  const router = (route) => {
    let path = "/" + route;
    navigate(path);
  };

  const auth = localStorage.getItem("emailData");

  const loginNavbar = () => {
    return (
      <div>
        {auth ? (
          <NavbarCollapsed />
        ) : (
          <ul className="ul">
            <li className="nav-list" onClick={() => router("login")}>
              Login
            </li>
            <li className="nav-list" onClick={() => router("register")}>
              Register
            </li>
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo-side">
      </div>
      <div className="navbar-buttons-side">{loginNavbar()}</div>
    </div>
  );
}
