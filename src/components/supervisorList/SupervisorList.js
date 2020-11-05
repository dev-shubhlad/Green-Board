import React, { useEffect, useState } from "react";
import { api } from "../../api/Axios";
import { Loader } from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfileCard } from "../userProfileCard/ProfileCard";

export const SupervisorList = () => {
  const [supervisorList, setSupervisorList] = useState([]);
  const [loadin, setLoadin] = useState(false);
  const [error, setError] = useState("");

  const notify = (message) => {
    toast.error(message);
  };

  const fetchList = async () => {
    try {
      setLoadin(true);
      const { data } = await api.get("/v1/institute/supervisor");
      setLoadin(false);
      console.log(data.data);
      setSupervisorList(data.data.supervisors);
    } catch (error) {
      setLoadin(false);
      console.log(error.message);
      notify(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      {error && notify(error)}
      <div className="list-title">
        <p>Supervisors</p>
      </div>
      <ToastContainer closeButton={false} />
      {loadin && <Loader />}
      {supervisorList &&
        supervisorList.map((supervisor) => {
          return <ProfileCard user={supervisor} key={supervisor.email} />;
        })}
    </>
  );
};
