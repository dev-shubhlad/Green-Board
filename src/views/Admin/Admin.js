import React from "react";
import { ProfileCard } from "../../components/userProfileCard/ProfileCard";
import { useMediaQuery } from "react-responsive";
import { AddSupervisor } from "../../components/addSupervisor/AddSupervisor";

import "./admin.css";

const Admin = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <ProfileCard />
      <div className="supervisor-mb-add">
        <AddSupervisor />
      </div>

      <div className="supervisor-mb-list">
        <div className="list-title">
          <p>Supervisors</p>
        </div>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <div className="white h-100 .flex-fixed-left-width-item">
        <ProfileCard />
      </div>
      <div className="h-100 flex-fixed-right-width-item">
        <AddSupervisor />
        <div className="supervisor-list">
          <div className="list-title">
            <p>Supervisors</p>
          </div>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Admin;
