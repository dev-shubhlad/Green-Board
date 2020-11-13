import React from "react";
import { Link } from "react-router-dom";
import DP from "../../../assets/images/shubham_lad.jpg";

export const InstructorProfileCard = (props) => {
  const { user } = props;
  return (
    <div className="user-card">
      <div className="row">
        <div className="col-3 d-flex align-items-center ">
          <img src={DP} className="profile-image" alt={"shubham"} />
        </div>
        <div className="col-9">
          <span className="title">{user.name}</span>
          <br />
          <span>Address</span>
          <br />
          <span>{user.email}</span>
          <br />
          <span>7249148567</span>
        </div>
      </div>
      <div className="row">
        <Link
          to={`/instructor/${user.id}`}
          className="rm-btn course-lst-btn"
          style={{ cursor: "pointer" }}
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
};
