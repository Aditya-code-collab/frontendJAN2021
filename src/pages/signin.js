import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const history = useHistory();
  const MoveToHome = () => {
    console.log("Moving to home....");
    history.push("/home");
  };

  const handleSubmit = (e) => {};

  return (
    <div className="signin">
      <div className="small">
        <div className="brand-wrapper">
          <img src="/logo192.png" alt="logo" className="logo" />
        </div>
        <h3>Welcome Back ! Sign into Your Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control input"
              id="exampleInputPassword1"
              placeholder="***********"
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </form>
        <a href="#!" class="forgot-password-link">
          Forgot password?
        </a>
        <p class="login-card-footer-text">
          Don't have an account?{" "}
          <a href="/" class="text-reset">
            SIGN UP{" "}
          </a>
        </p>
        <nav class="login-card-footer-nav">
          <a href="#!">Terms of use.</a>
          <a href="#!">Privacy policy</a>
        </nav>
      </div>
    </div>
  );
}
