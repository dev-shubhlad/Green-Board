import React, { useState } from "react";
import { api } from "../../../api/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../../loader/Loader";

export const AddInstructorForm = ({ setPopup }) => {
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
      const { data } = await api.post(`/v1/institute/addInstructor/${email}`);
      setLoading(false);
      notifySuccess(data.message);
      setPopup(false);
    } catch (error) {
      setLoading(false);
      notifyError(error.message);
      setPopup(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
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
        {loading ? <Loader /> : "SENT INVITE"}
      </button>
      <ToastContainer />
    </form>
  );
};
