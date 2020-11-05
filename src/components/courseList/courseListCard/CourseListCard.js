import React from "react";
import "./CourseListCard.css";

export const CourseListCard = () => {
  return (
    <div className="user-card course-list-card">
      <div className="">
        <span className="course-title">English Class X - Section A</span>
        <br />
        <span className="rating">
          4.8 <span className="total-rating">(87 Ratings)</span>
        </span>
        <span className="badge badge-secondary course-badge">Class X</span>
        <br />
        <span className="badge badge-secondary category-badge">PRIVATE</span>
        <span className="course-type">Active</span>
        <br />
        <span className="instructor-name">Prakash Kumar</span>
      </div>
      <div className="row">
        <span className="rm-btn course-lst-btn">VIEW DETAILS</span>
      </div>
    </div>
  );
};
