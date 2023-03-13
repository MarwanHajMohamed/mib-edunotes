import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login/login.css";
import { TextField } from "@mui/material";
import logoblue from "../css/images/EduNotes Logo Blue.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const router = (route) => {
    let path = "/" + route;
    navigate(path);
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios.get("/user").then((response) => {
      console.log(response.data);
      response.data.forEach((user) => {
        if (username === user.email && password === user.password) {
          localStorage.setItem("emailData", user.email);
          localStorage.setItem("userID", user.userID);
          router("personal-feed");
        } else if (username === user.name && password === user.password) {
          localStorage.setItem("emailData", user.email);
          localStorage.setItem("userID", user.userID);
          router("personal-feed");
        } else {
          setError("Invalid username or password. Please try again.");
        }
      });
    });
  }

  useEffect(() => {
    document.title = "Login | EduNotes";
  }, []);

  return (
    <>
      <div className="login-page-container">
        <div className="login-left-side">
          <div className="logo">
            <img src={logoblue} alt="" onClick={() => navigate("/")} />
          </div>
        </div>
        <div className="login-right-side">
          <form onSubmit={handleSubmit}>
            <div className="login-title">Login</div>
            <div className="form-group">
              <TextField
                type="text"
                label="email"
                variant="standard"
                size="50px"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <TextField
                type="password"
                label="Password"
                variant="standard"
                size="50px"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
