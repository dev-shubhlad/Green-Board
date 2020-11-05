import React, { useEffect } from "react";
import { ProfileCard } from "../../components/userProfileCard/ProfileCard";
import { useMediaQuery } from "react-responsive";
import { AddSupervisor } from "../../components/addSupervisor/AddSupervisor";
import { Loader } from "../../components/loader/Loader";

import "./admin.css";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeDetails } from "../../redux/actions/ProfileAction";
import { SupervisorList } from "../../components/supervisorList/SupervisorList";

const Admin = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, userInfo, error } = user;

  useEffect(() => {
    dispatch(getEmployeeDetails());
  }, [dispatch]);

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      {loading && <Loader />}
      {userInfo && <ProfileCard user={userInfo} rmbutton={false} edit={true} />}
      <div className="supervisor-mb-add">
        {userInfo ? (
          userInfo.role === "admin" ? (
            <AddSupervisor />
          ) : (
            <ProfileCard user={userInfo} rmbutton={false} edit={true} />
          )
        ) : (
          ""
        )}
      </div>
      <div className="supervisor-mb-list">
        <SupervisorList />
      </div>
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <div className="white h-100 .flex-fixed-left-width-item">
        {loading && <Loader />}
        {userInfo && (
          <ProfileCard user={userInfo} rmbutton={false} edit={true} />
        )}
      </div>
      <div className="h-100 flex-fixed-right-width-item">
        {userInfo ? (
          userInfo.role === "admin" ? (
            <AddSupervisor />
          ) : (
            <ProfileCard user={userInfo} rmbutton={false} edit={true} />
          )
        ) : (
          ""
        )}
        <div className="supervisor-list">
          <SupervisorList />
        </div>
      </div>
    </div>
  );
};

export default Admin;
