import React, { useEffect, useState } from "react";
import { data, Link, useNavigate, redirect } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [data, setData] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {});

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((output) => {
        localStorage.setItem("token", output.token);
        navigate("/posts");
        console.log(output);
      });
    // const data = await res.json();
  };

  return (
    <div className="login">
      <h3 className="heading-title">POST App</h3>
      <div className="login-div">
        <h2 id="login-text" className="login-text">
          Welcome Back
        </h2>
        <p id="login-p" className="login-text">
          Log in to your account
        </p>

        <form onSubmit={login}>
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
            <Link className="forgot">Forgot Password?</Link>
          </div>
          <div className="loginInputDiv">
            <input
              className="login-input"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-button-div">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
      <p className="signUpP">
        Don't have an account? <Link to={"/signup"}>Sign Up</Link>
      </p>
    </div>
  );
};

export default LogIn;
