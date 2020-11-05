import React, { useState } from "react";
import { api } from "../../../api/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../../loader/Loader";

export const AddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const notifyError = (message) => {
    toast.error(message);
  };

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.post("/v1/institute/supervisor", {
        name,
        email,
      });
      setName("");
      setEmail("");
      setLoading(false);
      notifySuccess(data.message);
    } catch (error) {
      notifyError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <label for="Email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%" }}
      >
        {loading ? <Loader /> : "ADD"}
      </button>
    </form>
  );
};
