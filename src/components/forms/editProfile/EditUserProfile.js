import React, { useState } from "react";
import { api } from "../../../api/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../../loader/Loader";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../../redux/actions/ProfileAction";

export const EditUserProfile = ({ userInfo, setPopup }) => {
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const notifyError = (message) => {
    toast.error(message);
  };

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      updateUserProfile(
        name,
        email,
        setPopup,
        setLoading,
        notifySuccess,
        notifyError
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
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
        <label htmlFor="Email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Email">Employee ID</label>
        <input
          type="email"
          className="form-control"
          id="text"
          disabled
          value={userInfo.employeeId}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Email">Role</label>
        <input
          type="email"
          className="form-control"
          id="text"
          disabled
          value={userInfo.role}
          placeholder="Enter email"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%" }}
      >
        {loading ? <Loader /> : "UPDATE"}
      </button>
    </form>
  );
};
