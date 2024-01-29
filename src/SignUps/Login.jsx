import React, { useState } from "react";
import Carousal from "../components/Carousal";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Carousal />
            </div>
            <div className="col-md-6 InputSide">
              <div className="FormHeading">
                <h1>WelCome Back</h1>
                <p>
                  Please enter your registered email address and password to
                  access your acount
                </p>
              </div>
              <form className="FormSection">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn button1">
                  Submit
                </button>
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <button className="btn btn-primary btn-lg btn-block btn2">
                  <i class="fa-solid fa-g me-2"></i>Login with Google
                </button>
                <p className="SignUpLink">
                  Don't have an Account?
                  <NavLink to="/signUp">SignUp</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
