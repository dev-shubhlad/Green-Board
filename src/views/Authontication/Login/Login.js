import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/Logo/GreenBordLOGO.svg";
import InstituteLogo from "../../../assets/images/icons/Instituteloginicon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/AuthAction";
import { Loader } from "../../../components/loader/Loader";

export const Login = ({ location, history }) => {
  const [instituteID, setInstituteID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message) => {
    toast.error(message);
  };

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { loading, error, userToken } = auth;

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/institute";

  useEffect(() => {
    if (userToken) {
      history.push(redirect);
    }
    if (error) {
      notify(error);
    }
  }, [history, userToken, redirect, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div id="login-form" className="login-wrapper">
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
              <button type="submit">{loading ? <Loader /> : "LOGIN"}</button>
              <ToastContainer closeButton={false} />
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
