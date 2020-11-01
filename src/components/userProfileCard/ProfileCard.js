import React from "react";
import DP from "../../assets/images/shubham_lad.jpg";
import Edit from "../../assets/images/icons/Editicon.svg";
import "./ProfileCard.css";

export const ProfileCard = (props) => {
  return (
    <div className="user-card">
      <div className="row">
        <div className="col-3 d-flex align-items-center ">
          <img src={DP} className="profile-image" alt={"shubham"} />
        </div>
        <div className="col-9">
          <span className="title">Shubham Lad</span>
          <br />
          <span>Address</span>
          <br />
          <span>shubham@gmail.com</span>
          <br />
          <span>7249148567</span>
          <span class="badge badge-secondary position-badge">SUPERVISOR</span>
        </div>
        <img src={Edit} className="editProfile" />
      </div>
      <div className="row">
        <span className="rm-btn">REMOVE</span>
      </div>
    </div>
  );
};
