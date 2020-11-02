import React from "react";
import DP from "../../../assets/images/shubham_lad.jpg";
import Edit from "../../../assets/images/icons/Editicon.svg";
import "./InstituteCard.css";

export const InstituteCard = (props) => {
  return (
    <div className="institute-card">
      <div className="row">
        <div className="col-3 d-flex align-items-center ">
          <img src={DP} className="profile-image" alt={"shubham"} />
        </div>
        <div className="col-9">
          <span className="title">Shubham Lad</span>
          <br />
          <span>Address</span>
          <br />
          <span class="badge badge-secondary institute-badge">SCHOOL</span>
        </div>
        <img src={Edit} className="editProfile" />
      </div>
    </div>
  );
};
