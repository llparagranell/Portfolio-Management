import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import jwt_decode from "jwt-decode";

function Login(props) {
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTBjOGJjYjc1MzZlMjQxMDU5ZTgwMCIsIm5hbWUiOiJwZXJzb25vbmUiLCJlbWFpbCI6InBlcnNvbm9uZUBnbWFpbC5jb20iLCJpYXQiOjE2OTI4MDUzNTgsImV4cCI6MTY5MjgxMjU1OH0.CcCjjL_SmXOPY-m23LrfOhrNHu69xxszZObSV68xTSA";
  // const decoded = jwt_decode(token);
  // console.log(decoded);

  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email,
    password,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const handleform = (e) => {
    e.preventDefault();
    axios
      .post("https://portfolio-mangement.onrender.com/api/login", user, config)
      .then((res) =>
      // console.log(res.data)

        navigate("/", { state: {tokenKey: res.data.token} })  
      );
      props.setProgress(100);
  };


  return (
      <div className="login">
        
        <div className="loginComponent">
          <h1 id="login">Login</h1>
          <form className="form-login">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Id..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleform} className="sub">
              submit
            </button>
          </form>

          <p id="registerP">
            Don't have an account?{" "}
            <button className="btn-login-form" onClick={handleRegister}>
              Register
            </button>
            .
          </p>
        </div>
      </div>
  );
}

export default Login;
