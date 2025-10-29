import React, { useState } from "react";
import { data, Link, redirect, useRoutes, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [output, setOutput] = useState("");

  const navigate = useNavigate();

  const onSignUp = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  const toLogin = () => {
    fetch("/login");
  };

  return (
    <div className="login">
      <h3 className="heading-title">POST App</h3>
      <div className="login-div">
        <h2 id="login-text" className="login-text">
          Welcome
        </h2>
        <p id="login-p" className="login-text">
          Create an account
        </p>

        <form onSubmit={onSignUp}>
          <p id="login-p" className="loginP">
            Name
          </p>
          <div className="loginInputDiv">
            <input
              className="login-input"
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <p id="login-p" className="loginP">
            Email
          </p>
          <div className="loginInputDiv">
            <input
              className="login-input"
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>

          <div className="second-div">
            <p id="login-p" className="loginP">
              Password
            </p>
          </div>
          <div className="loginInputDiv">
            <input
              className="login-input"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <link to="" /> */}
          <div className="login-button-div">
            <button type="submit" className="login-btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
