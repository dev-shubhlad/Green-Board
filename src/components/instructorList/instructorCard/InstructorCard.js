import React from "react";
import DP from "../../../assets/images/shubham_lad.jpg";

export const InstructorCard = () => {
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
          <span>shubham.lad@gmail.com</span>
          <br />
          <span>7249148567</span>
        </div>
      </div>
      <div className="row">
        <span className="rm-btn" style={{ cursor: "pointer" }}>
          TERMINATE
        </span>
      </div>
    </div>
  );
};
