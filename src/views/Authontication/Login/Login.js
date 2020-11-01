import React, { useState } from "react";
import Logo from "../../../assets/images/Logo/GreenBordLOGO.svg";
import InstituteLogo from "../../../assets/images/icons/Instituteloginicon.svg";
import "./Login.css";
import { api, setAuthToken } from "../../../api/Axios";

export const Login = () => {
  const [instituteID, setInstituteID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      let resposne = await api.get("/login");
      console.log(resposne);
    } catch (error) {
      console.log("Error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div>
          <img className="login-logo" src={Logo} alt="GreenBoard Logo" />
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <p className="names">Institute</p>
              </div>
              <div>
                <img
                  className="institute-logo"
                  src={InstituteLogo}
                  alt="Institute Logo"
                />
              </div>
              <div>
                <p className="names">Login</p>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Institute Id"
                value={instituteID}
                onChange={(e) => setInstituteID(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">LOGIN</button>
            </div>
          </form>
          <div>
            <p>
              forgot <strong>password</strong> ?
            </p>
          </div>
        </div>
        <div className="login-footer">
          <p>
            <strong>Register Institute!</strong> Get Institute ID
          </p>
        </div>
      </div>
    </div>
  );
};
