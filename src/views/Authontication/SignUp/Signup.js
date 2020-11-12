import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/Logo/GreenBordLOGO.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { register } from "../../../redux/actions/AuthAction";
import { Loader } from "../../../components/loader/Loader";
import "./signup.css";
import { Link } from "react-router-dom";

export const Signup = ({ location, history }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [instiName, setInstiName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [supportNumber, setSupportNumber] = useState("");

  const options = [
    { value: "School", label: "School" },
    { value: "Coaching", label: "Coaching" },
    { value: "College", label: "College" },
  ];

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
    const instituteData = {
      admin: {
        name: name,
        password: password,
        email: email,
      },
      institute: {
        name: instiName,
        type: type,
        aboutUs: {
          description: description,
          supportEmail: supportEmail,
          supportNumber: supportNumber,
        },
      },
    };
    console.log("Register: ", instituteData);
    dispatch(register(instituteData));
  };

  return (
    <div id="login-form" className="signup-wrapper">
      <div className="login-card">
        <div>
          <img className="login-logo" src={Logo} alt="GreenBoard Logo" />
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <p className="names">Register Institute</p>
              </div>
            </div>
            <div id="contact">
              <label className="signup-label">Admin Details</label>
              <div>
                <input
                  type="text"
                  placeholder="Admin Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Admin Email"
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
              <label className="signup-label">Institute Details</label>
              <div>
                <input
                  type="text"
                  placeholder="Institute Name"
                  value={instiName}
                  onChange={(e) => setInstiName(e.target.value)}
                />
              </div>
              <div>
                <Select
                  className="select-opt-class"
                  options={options}
                  onChange={(e) => setType(e.value)}
                />
              </div>
              <label className="signup-label">About Institute</label>
              <div>
                <textarea
                  placeholder="Institute Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  required
                ></textarea>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Support Email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Support Number"
                  value={supportNumber}
                  onChange={(e) => setSupportNumber(e.target.value)}
                />
              </div>
              <button type="submit">
                {loading ? <Loader /> : "RESGISTER"}
              </button>
              <ToastContainer closeButton={false} />
            </div>
          </form>
        </div>
        <div className="login-footer">
          <p>
            Alredy Have an Account
            <Link to="/login">
              <strong> Login Institute!</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
