import React, { useState } from "react";
import { api } from "../../../api/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../../loader/Loader";
import { useDispatch } from "react-redux";
import { updateInstituteProfile } from "../../../redux/actions/ProfileAction";

export const EditInstituteProfile = ({ instituteInfo, setPopup }) => {
  const [name, setName] = useState(instituteInfo.name);
  const [type, setType] = useState(instituteInfo.type);
  const [instituteId, setInstituteId] = useState(instituteInfo.instituteId);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const notifyError = (message) => {
    toast.error(message);
  };

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const instituteData = {
    name: name,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      updateInstituteProfile(
        instituteData,
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
        <label htmlFor="Email">Institute ID</label>
        <input
          type="text"
          className="form-control"
          id="instituteID"
          onChange={(e) => setInstituteId(e.target.value)}
          value={instituteId}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Email">Type</label>
        <input
          type="email"
          className="form-control"
          id="text"
          disabled
          value={type}
          onChange={(e) => setType(e.target.value)}
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
