import React from "react";
import { Link } from "react-router-dom";
import DP from "../../../assets/images/shubham_lad.jpg";

export const InstructorProfileCard = () => {
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
        <Link
          to="/instructor/1234"
          className="rm-btn course-lst-btn"
          style={{ cursor: "pointer" }}
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
};
