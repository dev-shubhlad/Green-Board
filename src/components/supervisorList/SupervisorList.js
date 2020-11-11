import React, { useEffect, useState } from "react";
import { api } from "../../api/Axios";
import { Loader } from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfileCard } from "../userProfileCard/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSupervisorList,
  removeSupervisor,
} from "../../redux/actions/SupervisorAction";

export const SupervisorList = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const listOfSupervisor = useSelector((state) => state.listOfSupervisor);

  const { loadin, supervisorList, error } = listOfSupervisor;
  const { userInfo } = user;

  const notify = (message) => {
    toast.error(message);
  };

  const removeUser = async (id) => {
    try {
      const { data } = await api.delete(`/v1/institute/supervisor/${id}`);
      let newList = supervisorList.filter((supervisor) => supervisor.id !== id);
      dispatch(removeSupervisor(newList));
      // setSupervisorList(newList);
    } catch (error) {
      notify(error.message);
    }
  };

  useEffect(() => {
    if (!supervisorList) {
      dispatch(fetchSupervisorList());
    }
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
        userInfo &&
        supervisorList.map((supervisor) => {
          return (
            <ProfileCard
              user={supervisor}
              key={supervisor.email}
              rmbutton={userInfo.role === "admin"}
              removeUser={removeUser}
            />
          );
        })}
    </>
  );
};
