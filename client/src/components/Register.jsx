import React, { useState, useEffect } from "react";
import "../css/Login/login.css";
import { TextField } from "@mui/material";
import logoblue from "../css/images/EduNotes Logo Blue.png";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register | EduNotes";
  }, []);

  return (
    <div className="login-page-container">
      <div className="login-left-side">
        <div className="logo">
          <img src={logoblue} alt="" onClick={() => navigate("/")} />
        </div>
      </div>
      <div className="login-right-side">
        <form>
          <div className="login-title">Register</div>
          <div className="form-group">
            <TextField
              className="textfield"
              type="text"
              label="Name"
              variant="standard"
              size="50px"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <TextField
              className="textfield"
              type="email"
              label="Email"
              variant="standard"
              size="50px"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <TextField
              className="textfield"
              type="password"
              label="Password"
              variant="standard"
              size="50px"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <TextField
              className="textfield"
              type="password"
              label="Confirm Password"
              variant="standard"
              size="50px"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
