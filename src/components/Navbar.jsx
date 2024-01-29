import React, { useState } from "react";
import Logo from "../Assests/HeroLogo.png";
import { Link, NavLink } from "react-router-dom";
import MenuBar from "./MenuBar";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white navbarss">
        <div className="container Navbars">
          <img src={Logo} style={{ width: 167, height: 147 }} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul
              className="navbar-nav  me-auto mb-2 mb-lg-0"
              style={{ fontSize: 19 }}
            >
              <li className="nav-item">
                <NavLink className="nav-link  home-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item Menu2" >
                <NavLink className="nav-link" to="/">
                  Feature
                </NavLink>
                <MenuBar />
              </li>

              <li className="nav-item registerButton">
                <NavLink to="/login">
                  <button className="nav-link btn">Login</button>
                </NavLink>
              </li>
              <li className="nav-item registerButton">
                <NavLink to="/signUp">
                  <button className="nav-link btn btn-outline-success signUpbutton">
                    Sign up
                  </button>
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex formButton"></form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
