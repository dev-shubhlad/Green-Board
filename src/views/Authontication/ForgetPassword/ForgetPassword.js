import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/Logo/GreenBordLOGO.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../../../components/loader/Loader";
import { api } from "../../../api/Axios";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const notify = (message) => {
    toast.error(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.post("/v1/institute/forgotPassword", {
        email: email,
      });
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      notify(error.message);
    }
  };

  return (
    <div id="login-form" className="login-wrapper">
      <div className="login-card">
        <div>
          <img className="login-logo" src={Logo} alt="GreenBoard Logo" />
        </div>
        <div className="login-form">
          {!success ? (
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <p className="names">Forget Password</p>
                </div>
              </div>
              <div id="contact">
                <div>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit">
                  {loading ? <Loader /> : "SEND EMAIL"}
                </button>
                <ToastContainer closeButton={false} />
              </div>
            </form>
          ) : (
            <p
              style={{
                margin: "50px 15px",
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              Reset Email Sent
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
